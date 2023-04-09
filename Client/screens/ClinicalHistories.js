import React, { useEffect, useState } from "react";
import { View, 
    Button, 
    TouchableOpacity, 
    ScrollView, 
    StyleSheet, 
    Text,
    TextInput } from 'react-native';
import AuthService from '../services/AuthService';
import { prodApi } from '../api/prodApi';
import Timeline from 'react-native-timeline-flatlist'
import { CalendarCom } from '../components/CalendarCom';
import TextBoxCom from "../components/TextBoxCom";
import { v4 as uuidv4 } from 'uuid';
import {ButtonCom} from "../components/ButtonCom";

const ClinicalHistoriesScreen = ({ navigation }) => {
    const [clinicalHistories, setClinicalHistories] = useState([{}]);
    const [historyMap, setHistoryMap] = useState({});
    const [refresh, setRefresh] = useState('');
    const [newEventVisible, setNewEventVisible] = useState(false);
    const [newEvent, setNewEvent] = useState({});
    const [data, setData] = useState({});

    const [newClinicalHistoryName, setNewClinicalHistoryName] = useState('');
    const [newClinicalHistoryVisible, setNewClinicalHistoryVisible] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const response = await prodApi.get( '/personalInfo/self', {
            headers: {
            "Authorization" : AuthService.getCurrentUser(),
            }
        }).catch(function (error) {
            if (error.response.status === 401) {
                AuthService.logOut();
            }
        });
        setData( response.data.item );
        setClinicalHistories(response.data.item.clinicalHistories);
    }

    async function updateData( ) {   
        const request = {
            ...data, 
            'clinicalHistories': clinicalHistories,
          }
          const response = await prodApi.post( '/personalinfo', request);
    }
    
    function setHistoryVisibility(index) {
        setHistoryMap((prevIndexMap) => ({
            ...prevIndexMap,
            [index]: !prevIndexMap[index],
          }));
    }

    function eventPress(event) {
    }

    function deleteEvent(toDeleteEvent) {
        let toDeleteHistoryIndex = -1;
        let toDeleteEventIndex = -1;

        for (let historyIndex = 0; 
            historyIndex < clinicalHistories.length;
            historyIndex++) {
            
            let history = clinicalHistories[historyIndex];
            let found = false;

            for (let eventIndex = 0; 
                eventIndex < history.events.length;
                eventIndex++) {
                
                let currentEvent = history.events[eventIndex];
                if (currentEvent.id === toDeleteEvent.id) {
                    toDeleteHistoryIndex = historyIndex;
                    toDeleteEventIndex = eventIndex;
                    found = true;
                    break;
                }
            }

            if (found)
                break;
        }

        if (toDeleteEventIndex != -1 &&
            toDeleteHistoryIndex != -1) {
            
            let currentClinicalHistories = clinicalHistories;
            currentClinicalHistories[toDeleteHistoryIndex].events.splice(toDeleteEventIndex, 1);
            
            setClinicalHistories(currentClinicalHistories);
        }

        setRefresh(Math.random());
        updateData();
    }

    async function saveEvent(historyIndex) {
        if (!newEvent || 
            !newEvent.time ||
            !newEvent.title || 
            !newEvent.description) 
            return;

        const event = {
            id: uuidv4(),
            time: newEvent.time,
            title: newEvent.title,
            description: newEvent.description
        }

        let currentClinicalHistories = clinicalHistories;
        currentClinicalHistories[historyIndex].events.push(event);
        setClinicalHistories(currentClinicalHistories);
        setRefresh(Math.random());
        setNewEvent({});
        setNewEventVisible(false);
        updateData();
    }

    function renderDetail(rowData, sectionID, rowID) {
        return (
            <View key={rowData.id} style={styles.rowData}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.eventName}>
                        {rowData.title}
                    </Text>
                    <TouchableOpacity 
                        style={styles.minusButton}
                        onPress={() => deleteEvent(rowData)}>
                        <Text style={styles.minusButtonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <Text>
                    {rowData.description}
                </Text>
            </View>
        );
    }

    function renderTime(rowData, sectionID, rowID) {
        return (
            <View style={ styles.timeContainer}>
                <Text style={ styles.timeText}>
                    {rowData.time}
                </Text>
            </View>
        )
    }

    function newClinicalHistoryButtonClick() {
        
        // Open form
        if (!newClinicalHistoryVisible) {
            setNewClinicalHistoryVisible(true);
            return;
        }

        // Save
        alert('save');
    }
    return (
        <View style={styles.container}>
            { clinicalHistories && 
            <ScrollView>
                {
                    clinicalHistories.map((history, index) => (
                        <View style={styles.historyContainer} key={index}>
                            <TouchableOpacity onPress={() => setHistoryVisibility(index)}>
                                <Text style={styles.historyName}>
                                    {(index + 1) + '. '+ history.name}
                                </Text>
                            </TouchableOpacity>
                            {historyMap[index]&&
                                (<View style={styles.timelineContainer}>
                                    <Timeline
                                        data={history.events}
                                        circleColor='#fc2954'
                                        lineColor='#ff9797'
                                        timeContainerStyle={{ minWidth: 52, marginTop: '-6px' }}
                                        timeStyle={{ textAlign: 'center', fontWeight: 'bold', padding: 5, borderRadius: 13 }}
                                        descriptionStyle={{ marginTop: '5px', paddingBottom: '20px', color: 'gray' }}
                                        titleStyle={{ marginTop: '-10px' }}
                                        renderDetail={(rowData, sectionID, rowID) => renderDetail(rowData, sectionID, rowID)}
                                        renderTime={(rowData, sectionID, rowID) => renderTime(rowData, sectionID, rowID)}
                                        renderFullLine={true}
                                        onEventPress={(event) => eventPress(event)}
                                        isUsingFlatlist={true} 
                                        options={{
                                            extraData:{refresh}
                                        }}/>

                                    <TouchableOpacity style={styles.plusButton} 
                                        onPress={() => setNewEventVisible(!newEventVisible)}>
                                        <Text style={styles.plusButtonText}>+</Text>
                                    </TouchableOpacity>
                                    
                                    {newEventVisible &&
                                        <View style={styles.newEventContainer}>
                                            <CalendarCom
                                                content={{
                                                    display: "Fecha",
                                                    name: "time"
                                                }}
                                                data={newEvent}
                                                setData={setNewEvent} />

                                            <TextBoxCom
                                                content={{
                                                    placeholder: 'Nombre del evento',
                                                    id: 'title',
                                                    inputMode: "text"
                                                }}
                                                data={newEvent}
                                                setData={setNewEvent} />

                                            <TextBoxCom
                                                content={{
                                                    placeholder: 'Descripción',
                                                    id: 'description',
                                                    inputMode: "text"
                                                }}
                                                data={newEvent}
                                                setData={setNewEvent} />
                                
                                            <TouchableOpacity
                                             style={styles.addEventButton} onPress={() => saveEvent(index)}>
                                                <Text style={styles.addEventButtonText} >
                                                    Agregar
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    }
                                </View>)
                            }
                        </View>
                    ))
                }
            </ScrollView>
            }
            {newClinicalHistoryVisible && 
            <View style={styles.newClinicalHistoryContainer}>
                <TextBoxCom
                    content={{
                        placeholder: 'Nombre de la historia clínica',
                        id: 'name',
                        inputMode: "text"
                    }}
                    data={newClinicalHistoryName}
                    setData={setNewClinicalHistoryName} />
            </View>}
            <ButtonCom style={styles.newClinicalHistoryButton}
                text = {newClinicalHistoryVisible ? 
                    "Agregar": 
                    "Nueva historia clínica"}
                onPress = {() => newClinicalHistoryButtonClick()}
            />

            {newClinicalHistoryVisible && 
                <Text 
                    style={styles.cancelButton} 
                    onPress={() => setNewClinicalHistoryVisible(false)}>Cancelar</Text>                                
            }
        </View>
    );
}

const styles = StyleSheet.create({
    cancelButton: {
        float: 'left', 
        marginTop: '10px', 
        color:'#2196F3',
        textDecorationLine: 'underline'
    },
    newClinicalHistoryContainer: {
        backgroundColor: 'white',
        padding: '5px',
        maxWidth: '355px',
        borderRadius: 10,
        marginBottom: '10px'
    },  
    timeContainer: {
        width: '90px'
    },
    timeText: {
        fontWeight: 'bold'
    },
    addEventButton:{ 
        width: '150px',
        backgroundColor: '#fc2954',
        color: 'white',
        height: '20px',
        alignItems: 'center'
    },
    addEventButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    newEventContainer: {
        marginTop: '10px'
    },
    rowData: {
        marginTop: '-10px',
        marginBottom: '20px'
    },
    eventName: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#414141'
    },
    plusButtonText: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: '2px',
        fontSize: '16px'
    },
    minusButtonText: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: '-2px',
        fontSize: '16px'
    },
    plusButton: {
        borderRadius: 20,
        backgroundColor: '#fc2954',
        width: '20px',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: '101px'
    },
    minusButton: {
        marginLeft: '10px',
        borderRadius: 30,
        backgroundColor: '#fc2954',
        width: '15px',
        height: '15px',
        alignContent: 'center',
        alignItems: 'center'
    },
    historyContainer: {
        marginLeft: '20px',
        marginBottom: '20px'
    },
    historyName: {
        fontWeight: 'bold',
        marginBottom: '20px',
        fontSize: '20px',
        // color: '#294CFC'
    },
    container: {
        marginTop: '20px',
        marginLeft: '20px'
    },
    timelineContainer: {
        marginLeft: '10px'
    }
});

export default ClinicalHistoriesScreen;