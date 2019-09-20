import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, StatusBar, View, AsyncStorage } from 'react-native';


const AuthLoadingScreen = (props) => {

    _boostrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('name');
        props.navigation.navigate(userToken ? 'App' : 'Auth');
    }

    useEffect(() => {
        _boostrapAsync();
    },[]);

    return (
        <View>
            <ActivityIndicator />
            <StatusBar hidden={true} />
        </View>
    );
}

AuthLoadingScreen.propTypes = {
    navigation: PropTypes.shape({navigate: PropTypes.func,}).isRequired
}


export default AuthLoadingScreen;