import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes';

// import { Container } from './styles';

export default function App() {
  return (
    <>
       <StatusBar backgroundColor='#38803E' barStyle='light-content'/>
       <Routes />
    </>
   
  );
}
