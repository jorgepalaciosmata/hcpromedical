import { StyleSheet } from 'react-native';

export const personalInfoStyle = StyleSheet.create({
    background: {
      backgroundColor: '#2F4550',
    },
    back: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 70,
        padding:50
    },
    'content:last-child': {
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: '#FFFFFF',
    },
    hr: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'black',
        borderStyle:'solid',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150,
        borderWidth: 2,
        borderColor: "black",
        overflow: "hidden",
    },
    userCase: {
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        marginBottom: 30,
        marginTop: 30
    },
    text: {
        marginTop: 10,
        color: "#FFFFFF",
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 300,
    },
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
    }
  });