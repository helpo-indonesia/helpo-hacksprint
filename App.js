/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Native base material theme
import { StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'

// Router-flux
import { Router, Scene } from 'react-native-router-flux'

// Screen
import DashboardApp from './src/components/Dashboard';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {

    let storeInstance = Store();

    return (
      <StyleProvider style={getTheme(material)}>
        <Provider store={storeInstance.store}>
          <PersistGate loading={null} persistor={storeInstance.persistor}>
          <Router>
            <Scene key="root">
              <Scene key="dashboard" component={DashboardApp} hideNavBar={true}/>
            </Scene>
          </Router>
          </PersistGate>
        </Provider>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
