import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native'
import { Hr } from '../components/Hr'

export const MedicalEntry = () => {
  return (
    <View>
        <View style={styles.container}>
            <View style={{width: '15%', marginRight:10}}> 
                <Image 
                    source={require('../assets/icons/pdf-icon.png')}
                    style={styles.image} 
                />
            </View>
            <View style={{width: '%70'}}>
                <View style={{ flexDirection:'row', justifyContent: 'space-between',  }}>
                    <View>
                        <Text style={styles.title}>Chequeo Mensual</Text>
                    </View>
                    <View>
                        <Text style={styles.date}>15/02/2023</Text>
                    </View>
                </View>
                <Text style={{width: 230}}>Analisis de sangre, predictivo y cardiovascular.</Text>
            </View>

        </View>
        <Hr />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        width: 50,
        height: 50,  
        marginRight: 20,
    },
    container: {
        flexWrap:'wrap', 
        alignItems: 'center', 
        flexDirection: "row",
        marginBottom: 10,
    },
    title: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 18,
        color: 'rgba(0, 0, 0, 0.6)',
  
    },
    description: {
        ontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: 10,
        lineHeight: 12,
        color: '#000000',
    },
    date: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 10,
        lineHeight: 18,
        color: '#000000',
    }
});