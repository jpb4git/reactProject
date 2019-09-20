import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, TextInput, Dimensions,  } from 'react-native';
import { Button } from 'react-native-elements';

const { width } = Dimensions.get('window');


const IntroFormScreen = props => {
    async function handleSubmit() {
        if (name) {
            // want to send Globally
            dispatch({
                type : 'app/setName', // path to reducers function  nameModel/functionName 
                payload: { name }    // variable local to send in setName  
            });

            // then navigate
            navigation.navigate('Welcome');

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
    const [name, setName] = useState('');  // hooks https://fr.reactjs.org/docs/hooks-intro.html
    /*  props have lot of things ... 
        dispatch and navifation are some of them. we destructure them on separate const
    */
    const { dispatch, navigation } = props; 
    

    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.label}>Prénom</Text>
            <TextInput style={styleSheet.input} onChangeText={(text) => setName(text)} value={name} />      
            <Button onPress={handleSubmit} title="OK" color="#841584" />
        </View>
    );
}

IntroFormScreen.prototype = {
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
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',
    },
};


export default connect()(IntroFormScreen);