import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffff00',
        marginTop : 30,
    },
    subcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff00',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    bigText:{
        height: 40,
        width:200,
        borderColor: 'gray',
        borderWidth: 1
    },
    bigButton:{
        height: 40,
        width:200,
        backgroundColor: 'black',
        padding: 10
    },
    text:{
        color:'#ffff00',
        textAlign:'center'
    },
    space10:{
        margin:10
    }
});