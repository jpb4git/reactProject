import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Dimensions, Image, FlatList, ActivityIndicator } from 'react-native';



const { width } = Dimensions.get('window');


const ViewResultScreen = props => {

    //-----------------------------------------------------
    useEffect(() => {
        dispatch({
            type: 'app/getMeteoInformation',

        });
    }, []);

    //-----------------------------------------------------
    useEffect(() => {
        console.log("UseEffect in  : ");
        if (informations.main) {
            setNameCity(informations.name);
            setTemp(informations.main.temp);
        }

        if (informations.coord) {
            setLatCity(informations.coord.lat);
            setLonCity(informations.coord.lon);
            console.log(` LatCity : ${latCity}`);
        }

        if (informations.weather) {
            setIconCity(informations.weather[0].icon);
            console.log(`iconCity :  ${iconCity}`);
        }

    });


    //-----------------------------------------------------
    const { dispatch, app: { informations }, loading } = props;
    console.log(loading);
    console.log(informations);

    const [iconCity, setIconCity] = useState(''); //hook
    const [nameCity, setNameCity] = useState(''); //hook
    const [latCity, setLatCity] = useState(''); //hook
    const [lonCity, setLonCity] = useState(''); //hook
    const [temp, setTemp] = useState(''); //hook


    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', marginTop: 25 }}>
            {!loading && Object.keys(informations).length > 0 ?
                <FlatList
                    data={informations.list.map(c => ({
                        id: c.id,
                        icon: c.weather[0].icon,
                        name: c.name,
                        temp: c.main.temp,

                    }))}
                    renderItem={({ item: { id, icon, name, temp } }) =>
                        <View style={styleSheet.container} key={id}>
                            <Image source={{ uri: `http://openweathermap.org/img/w/${icon}.png` }} style={{ width: 50, height: 50 }} />
                            <Text style={styleSheet.textStyle}> {`${temp} °C`} {`${name} `}</Text>

                        </View>

                    }
                    keyExtractor={item => item.id}
                /> : <ActivityIndicator size="large" color="#0000ff" />
            }
        </View>
    );
};




//const user_name =   
const styleSheet = {

    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 1,
        height: 55,
        width: "100%",
        backgroundColor: 'rgba(144, 208, 238, 1.0)'
    },

    textStyle: {
        padding: 5,
        color: 'white',
        fontSize: 12,
        height: 55,
        fontWeight: 'bold',
        width: "100%",
        backgroundColor: 'rgba(144, 208, 238, 1.0)'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
};

const mapState = (state) => ({
    loading: state.loading.effects.app.getMeteoInformation, // true when the `login/submit` effect is running    
    app: state.app,
})


export default connect(mapState)(ViewResultScreen);
