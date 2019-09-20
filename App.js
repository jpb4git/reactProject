import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { init } from '@rematch/core'; 
import { Provider } from 'react-redux';
import { app } from './models/appModels';
import AppNavigator from './navigation/AppNavigator';
import createLoadingPlugin from '@rematch/loading'
import NavigationService from './navigation/NavigationService';


const loadingPlugin = createLoadingPlugin()

// Load all models in Store 
const store = init({
  models: { app },
  plugins: [loadingPlugin],
});


export default function App() {
  return (
    <Provider store={store}>

      <AppNavigator 
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
