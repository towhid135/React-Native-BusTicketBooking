import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {SvgUri} from 'react-native-svg';
import AppNav from './navigator/AppNavigator/AppNav';

const App = () => {
  return(
        <AppNav />
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
});

export default App;
