import React, { useEffect, useState } from "react";
import { View, Button, TouchableOpacity, ScrollView, StyleSheet, Text } from 'react-native';
import AuthService from '../services/AuthService';
import { prodApi } from '../api/prodApi';
import Timeline from 'react-native-timeline-flatlist'
import EStyleSheet from 'react-native-extended-stylesheet';

const ClinicalHistoriesScreen = ({ navigation }) => {
    const [clinicalHistories, setClinicalHistories] = useState([{}]);
    const [historyMap, setHistoryMap] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        setClinicalHistories(
            [
                {
                    name: 'Historia Clínica 1',
                    events: [
                        { 
                            id: '123',
                            time: '02/03/2023', 
                            title: 'Event 1', 
                            description: 'Event 1 Description' },
                        {   
                            id: '456',
                            time: '02/03/2023', 
                            title: 'Event 2', 
                            description: 'Event 2 Description' 
                        },
                    ]
                }
            ]
        );
    }, []);

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
            setRefresh(!refresh);
        }
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
    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    clinicalHistories.map((history, index) => (
                        <View style={styles.historyContainer} key={index}>
                            <TouchableOpacity onPress={() => setHistoryVisibility(index)}>
                                <Text style={styles.historyName}>
                                    {history.name}
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
                                        renderFullLine={true}
                                        onEventPress={(event) => eventPress(event)}
                                        isUsingFlatlist={true} 
                                        options={{
                                            extraData:{refresh}
                                        }}/>

                                    <TouchableOpacity style={styles.plusButton}>
                                        <Text style={styles.plusButtonText}>+</Text>
                                    </TouchableOpacity>

                                </View>)
                            }
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
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
        marginLeft: '104px'
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
        color: '#294CFC'
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