import { StyleSheet } from 'react-native';

export const documentsViewStyle = StyleSheet.create({
    background: {
        backgroundColor: '#2F4550',
    },
    image: {
        width: 100,
        height: 70,
        resizeMode: 'contain',
        margin: 50,
    },
    back: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 70,
        
    },
    logoCase: { 
        display:'flex',  
        justifyContent: 'center',
        alignItems: 'center' 
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "black",
        overflow: "hidden",
    },
    text: {
        marginTop: 10,
        marginLeft: 10,
        color: "#FFFFFF",
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 300,
    },
    userCase: {
        flexWrap:'wrap', 
        alignItems: 'center', 
        flexDirection: "row",
        marginLeft: 35,
        marginBottom: 5,
    },
    title: {
        color: "#2F4550",
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 24,
        marginTop: 20,
        marginLeft: 40,
        marginBottom: 30
    },
    subtitle: {
        color: "rgba(43, 43, 43, 0.5)",
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 20,
        marginLeft: 40
    }
})