import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, TextInput, Dimensions,  FlatList, ActivityIndicator } from 'react-native';
import {Button, Card, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { swapper } from '../utils/iconSwapper'
const { width } = Dimensions.get('window');


const SearchFormScreen = props => {

    
    
    
    
    
    //-----------------------------------------------------

     function handleSubmitAdd() {
       console.log("clicked add ")

       // find a way to add informationSearch to informations   ...prevState , 
        dispatch({
            type: 'app/addSearchToInformations', 
            
                
        });

        navigation.navigate('Welcome');
        
    }

    function handleSubmit() {

        //console.log("clicked !!");
        if (citySearch) {
            // want to send Globally
            
            dispatch({
                type: 'app/setCitySearch', // path to reducers function  nameModel/functionName 
                payload: { citySearch }    // variable local to send in setName  
            });

    
            dispatch({
                type: 'app/getMeteoInformationForCity',
                payload: { citySearch },  

            });
            // then navigate
           // navigation.navigate('');

        }
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
    const [citySearch, setCitySearch] = useState('');  // hooks https://fr.reactjs.org/docs/hooks-intro.html
    /*  props have lot of things ... 
        dispatch and navifation are some of them. we destructure them on separate const
    */
  
    const { dispatch, navigation , app: { informationsSearch }, loading } = props;
  
    return (
        <View style={{paddingTop : 25}}>
            <Text style={styleSheet.label}>Recherchez une Ville</Text>
            <TextInput style={styleSheet.input} onChangeText={(text) => setCitySearch(text)} value={citySearch} />
            <Button onPress={handleSubmit} title="OK" color="#841584" />

        <View>
            
                {!loading && Object.keys(informationsSearch).length > 0 ?
                    <Card containerStyle={{ justifyContent: 'space-between', alignContent: 'center'}} title={informationsSearch.name}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'  }}>
                            {swapper(informationsSearch.weather[0].id,150,150)}
                        </View>

                            <Text> {`${informationsSearch.main.temp} °C`} </Text>
                            <Text style={{fontSize : 25}}>{`${informationsSearch.name} `}</Text>
                       
                        <Button  style={{padding : 5 , height : 25 }}
                                onPress={handleSubmitAdd} 
                                
                                color="#AD15FF" 
                                icon={
                                    <Icon
                                        name="plus-circle"
                                        size={45}
                                        color="white"
                                    />
                                }
                        />
                       
                    </Card>
                    
                    :
                    <Text>Ville  </Text>
                }  
                
                     
               
            </View>


        </View>
    );
}

SearchFormScreen.prototype = {
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
    loading: state.loading.effects.app.getMeteoInformationForCity, 
    app: state.app,
})

export default connect(mapState)(SearchFormScreen);