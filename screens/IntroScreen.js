import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Dimensions, AsyncStorage } from 'react-native';

const { width } = Dimensions.get('window');



const IntroScreen = props => {
   
    /* will be executed after loading component
        here a timeOut 5000 will redirect to App
    */
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('App');
        }, 500);
    },
    []);

    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.nameStyle}> { props.name } </Text>
        </View>
    );
}

IntroScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    nameStyle: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',
    },
};


export default connect(state => state.app)(IntroScreen);