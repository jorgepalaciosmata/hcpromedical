import React, { useEffect, useState } from "react";
import { View, Button , TouchableOpacity, ScrollView, StyleSheet, Text } from 'react-native';
import AuthService from '../services/AuthService';
import { prodApi } from '../api/prodApi';
import Timeline from 'react-native-timeline-flatlist'
import EStyleSheet from 'react-native-extended-stylesheet';

const ClinicalHistoriesScreen = ({ navigation }) => {
    const [clinicalHistories, setClinicalHistories] = useState([{}]);

    useEffect(() => {
        setClinicalHistories(
            [
                {
                    name: 'Historia Clínica 1',
                    events: [
                        {time: '02/03/2023', title: 'Event 1', description: 'Event 1 Description'},
                        {time: '02/03/2023', title: 'Event 2', description: 'Event 2 Description'},
                    ] 
                },
                {
                    name: 'Historia Clínica 2',
                    events: [
                        {time: '02/03/2023', title: 'Event 1', description: 'Event 1 Description'},
                        {time: '02/03/2023', title: 'Event 2', description: 'Event 2 Description'},
                    ] 
                }
            ]
        );
    }, []);

    return(
        <View style={styles.container}>
            <ScrollView>
                {
                    clinicalHistories.map((history, index) => (
                        <View style={styles.historyContainer}>
                            <TouchableOpacity onPress={}>
                                <Text style={styles.historyName}>
                                    {history.name}
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.timelineContainer}>
                            <Timeline 
                                data={history.events} 
                                circleColor='#fc2954'
                                lineColor='#ff9797' 
                                timeContainerStyle={{minWidth:52, marginTop: '-6px'}}
                                timeStyle={{textAlign: 'center', fontWeight:'bold', padding:5, borderRadius:13}}
                                descriptionStyle={{ marginTop: '5px', paddingBottom: '20px', color:'gray'}}
                                titleStyle={{marginTop: '-10px'}}
                                options={{
                                    // style:{paddingTop:50}
                                }}
                                isUsingFlatlist={true}/>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = EStyleSheet.create({
    historyContainer: {
        marginLeft: '20px',
        marginBottom: '20px'
    },
    historyName: {
        fontWeight: 'bold',
        marginBottom: '20px'
    },
    container: {
        marginTop: '20px',
        marginLeft: '20px'
    }
});

export default ClinicalHistoriesScreen;