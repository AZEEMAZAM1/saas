/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React from 'react';
import AppNavConatiner from './src/navigations';
import GlobalProvider from './src/context/Provider';


const App = () => {
    return (
   <GlobalProvider>
     <AppNavConatiner />
   </GlobalProvider> 
    );
    
  };


export default App;
