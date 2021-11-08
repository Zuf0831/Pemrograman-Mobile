import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const FIxHeader = () => {
    return(
        
    <View style={styles.contain}>
        <Icon name="rocket" size={40} color="purple" />
        <Text style={styles.header}>RubSky</Text>
    </View>

    )
}

export default FIxHeader;

const  styles= StyleSheet.create({
    contain : {
        height : '10%',
        width : '100%',
        backgroundColor : '#b3b3b3',
        alignContent : 'center',
        flexDirection : 'row',
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
        paddingTop : 20,
        paddingLeft : 10
    },

    header : {
        fontFamily : 'airstrike',
        fontSize : 40,
        marginLeft : 20,
        color : 'black'
    },
});
