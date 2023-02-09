import { StyleSheet } from 'react-native';

export const AntecedentesStyles = StyleSheet.create({
    background: {
        backgroundColor: "#2F4550",
    },
    header: {
        height:60,
        flexWrap: "wrap",
        gap: 30,
        alignContent: "center",
        marginTop: 20,
        marginBottom: 10,
    },
    headerText: {
        fontSize:40,
        fontWeight: "900",
        color: "#ffffff",
    },
    headerImage: {
        height:50,
        width:50,
    },
    content: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 70,
        paddingLeft: 50,
        paddingRight:50,
        paddingTop:30,
        paddingBottom:30,
    },
    titleText: {
        fontSize:30,
        fontWeight: "700",
        color:"#666666",
        marginBottom:10,
    }
})