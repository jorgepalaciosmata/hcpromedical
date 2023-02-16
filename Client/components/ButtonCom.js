import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

export const ButtonCom = ({text, onPress}) => {
  return (
    <TouchableOpacity
        onPress={onPress}
    >
        <View style={styles.container}>        
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 310,
        borderRadius: 100,
        backgroundColor: "#2F4550",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 20,
    }
})
