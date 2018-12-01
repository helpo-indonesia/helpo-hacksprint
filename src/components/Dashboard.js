import React from 'react';
import {
  View,
  Dimensions,
  StatusBar
} from 'react-native'

import Tabbar from 'react-native-tabbar-bottom'
import { createStackNavigator } from 'react-navigation'
class Dashboard extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    return(
      <View>

        <Tabbar 
          stateFunc={(tab) => {
            this.setState({ page: tab.page })
          }}
          tabbarBgColor={"#fff"}
          labelColor={"#C4C4C4"}
          selectedLabelColor={"#67B26F"}
          selectedIconColor={"#67B26F"}
          activePage={this.state.page}
          tabs={[

          ]}
        />
      </View>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: Dashboard,
    Notification: NotificationScreen,
    LeaderBoard: LeaderBoardScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'Home'
  },
  { header: null }
)

export default class DashboardApp extends React.Component {
  render() {
    return <RootStack />
  }
}