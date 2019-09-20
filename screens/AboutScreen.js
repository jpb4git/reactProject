import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Dimensions } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



const { width } = Dimensions.get('window');
const AboutScreen = props => {

    //const test = "hello" + props.app.name;
    console.log(props);
    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.textStyle} >
               About screen
            </Text>
        </View>
    );
};

//const user_name =   
const styleSheet = {

    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textStyle: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
    },
};

export default connect()(AboutScreen);