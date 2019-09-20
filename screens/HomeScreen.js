import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Dimensions, Image, FlatList, ActivityIndicator, TouchableHighlight } from 'react-native';
import { Button, Badge, Avatar } from 'react-native-elements';
import { swapper } from '../utils/iconSwapper'

const { width } = Dimensions.get('window');
const uri = '';

const HomeScreen = props => {


    function handleSubmitDelete(index) {
        // set the active index  in city list 
        /*         dispatch({
                    type: 'app/setIndex',
                    payload : {index},    
        
                }); */
        //remove from informations the obj at specified index

        dispatch({
            type: 'app/removeIndexInformations',
            payload: { index },

        });
    }

    function onClick(index) {
        console.log('list item  clicked ' + index);
        navigation.navigate('Detail', { indexId: index });


    }
    //-----------------------------------------------------
    useEffect(() => {
        if (informations.length === 0) {
            dispatch({
                type: 'app/getMeteoInformation',

            });
        } else {

        }

    }, []);

    const [indexToDelete, setIndexToDelete] = useState('');
    //-----------------------------------------------------
    const { dispatch, navigation, app: { informations }, loading } = props;


    return (

        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', marginTop: 25 }}>

            {!loading && informations.length > 0 ?

                <FlatList
                    data={informations.map(c => ({
                        id: c.id,
                        icon: c.weather[0].icon,
                        idIcon: c.weather[0].id,
                        name: c.name,
                        temp: c.main.temp,
                    }))}
                    renderItem={({ item: { id, icon, name, temp, idIcon }, index }) => {
                    
                        return (
                            <TouchableHighlight onPress={() => onClick(index)}>
                                <View style={styleSheet.container} key={id} onLongPress={() => { console.log("pressed") }}>
                                    {swapper(idIcon)}
                                    {/*    <Image source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }} style={{ width: 50, height: 50 }} /> */}

                                    <Text style={styleSheet.textStyle}> {`${temp} °C`} {`${name} `}</Text>
                                    <Badge onPress={() => handleSubmitDelete(index)} value="-" status="error" />

                                </View>
                            </TouchableHighlight>
                        );
                    }}
                    keyExtractor={item => (item.id).toString()}
                />
                : <ActivityIndicator size="large" color="#0000ff" />
            }
        </View>
    );
}; // component




//const user_name =   
const styleSheet = {

    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 1,
        // height: 55,
        width: "100%",
        //backgroundColor: 'rgba(144, 208, 238, 1.0)'    
    },

    textStyle: {
        padding: 5,
        color: 'black',
        fontSize: 14,
        // height: 55,
        fontWeight: 'bold',
        //width: "100%",
        //backgroundColor: 'rgba(144, 208, 238, 1.0)'
    },
    item: {
        padding: 10,
        fontSize: 22,
        //height: 44,
    },
    badge: {
        width: 150,
        fontSize: 50
    }
};

const mapState = (state) => ({
    loading: state.loading.effects.app.getMeteoInformation, // true when the `login/submit` effect is running    
    app: state.app,
})
HomeScreen.prototype = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({ navigate: PropTypes.func, }).isRequired,
};



export default connect(mapState)(HomeScreen);
