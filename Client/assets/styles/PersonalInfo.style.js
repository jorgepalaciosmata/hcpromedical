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
    }
  });