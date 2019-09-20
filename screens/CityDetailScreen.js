import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, TextInput, Dimensions, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import { Button, Card, Image, Icon } from 'react-native-elements';
import { swapper } from '../utils/iconSwapper'

const { width } = Dimensions.get('window');


const CityDetailScreen = props => {

    //-----------------------------------------------------

    function handleSubmitAdd() {
        //console.log("clicked add ")

        // find a way to add informationSearch to informations   ...prevState , 
        dispatch({
            type: 'app/addSearchToInformations',


        });

        navigation.navigate('Welcome');

    }




    // local declaration 
    /**
     * use Hook 
     * useState('') use destructuration variable  for set two 
     * element the first Name is the local variable , the second element is the function used to modifiy the first on
     * we can see this in action on  onChangeText={ (text) => setName(text) }  from TextInput
     * this is the only proper way to do initialisation or instanciation of local variable 
     *  
     */

    //console.log(props);
    const { dispatch, navigation, app: { informations }, loading } = props;
    const indexVille = navigation.getParam('indexId');
    return (
        <ScrollView style={{ paddingTop: 25, backgroundColor:'#f7f3f2'  }}>
            <Card containerStyle={{}} containerStyle={{ justifyContent: 'center', alignItems: 'center', borderRadius :5 }}
            
                title=
                {
                    <View style={{ text: 'center', padding: 12, }}>
                        <Text style={{ color: 'black', fontSize: 22, textAlign: 'center', fontWeight: 'bold', }}>{informations[indexVille].name}</Text>
                </View>
                }
                image={require('../assets/town.jpg')}
                >
               
                <Text style={{ fontSize: 45, textAlign: 'center' }}> {`${informations[indexVille].main.temp} °C`} </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent : 'center' }}>
                    {console.log('icon id : ' + informations[indexVille].weather[0].id)}
                    {swapper(informations[indexVille].weather[0].id,80,80)}
                    <Text style={{ fontSize: 15, textAlign: 'center',marginTop : 25 }}> {`${informations[indexVille].weather[0].description}`} </Text>
                </View>
               

            </Card>

            <Card containerStyle={{ backgroundColor: '#0e0a2e', marginBottom: 10, borderRadius: 5 }} 
                title={
                    <View style={{text :'center', padding: 12 , }}>
                        <Text style={{ color: 'white',textAlign:'center'}}>Localisation</Text>
                    </View>
                }
            >
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                    <Icon name='target-two'
                        type='foundation'
                        color='#ffffff'
                    />
                    <Text style={{ fontWeight: 'bold', color :"white" }}> {` lat : ${informations[indexVille].coord.lat}`} </Text>
                    <Text style={{ fontWeight: 'bold', color: "white" }}> {` long : ${informations[indexVille].coord.lon}`} </Text>
                </View>
            </Card>

            <Card containerStyle={{ backgroundColor: '#FCF3CF', marginBottom: 40, borderRadius: 5 }} title='Informations complémentaires'>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                    <Icon
                       
                        name='sc-telegram'
                        type='evilicon'
                        color='#517fa4'
                    />
                    <Text style={{ fontWeight: 'bold',}}> {`${informations[indexVille].main.pressure}`} </Text><Text> mbar </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                    <Icon name='bath'
                        type='font-awesome'
                        color='#517fa4'
                    />
                    <Text style={{ fontWeight: 'bold', }}> {`${informations[indexVille].main.humidity}`} </Text><Text>g/m3</Text>
                </View>
                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15  }}>
                    <Icon name='thermometer-2'
                        type='font-awesome'
                        color='#517fa4'
                    />

                    <Text style={{ fontWeight: 'bold', }}> {`${informations[indexVille].main.temp_min}`} </Text><Text>°C</Text>
                </View>
                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                    <Icon name='thermometer-full'
                        type='font-awesome'
                        color='#510000'
                    />
                    <Text style={{ fontWeight: 'bold', }}> {`${informations[indexVille].main.temp_max}`} </Text><Text>°C</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom : 15}}>
                    <Icon name='flash'
                        type='font-awesome'
                        color='orange'
                    />
                    <Text style={{ fontWeight: 'bold', }}> {`${informations[indexVille].wind.speed}`} </Text><Text>m\s</Text>
                </View>
            </Card>
            
           
        </ScrollView>
    );
}

CityDetailScreen.prototype = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({ navigate: PropTypes.func, }).isRequired,
};
const styleSheet = {

    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',

    },

    label: {
        color: 'black',
        fontSize: 18,
    },

    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },

    textStyle: {
        padding: 5,
        color: 'red',
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
    // loading: state.loading.effects.app.getMeteoInformationForCity,
    app: state.app,
})

export default connect(mapState)(CityDetailScreen);