import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator, createSwitchNavigator} from 'react-navigation-tabs'
import TransactionScreen from './screens/BookTransactionScreen'
import LogInScreen from './screens/LogInScreen';
import SearchScreen from './screens/SearchScreen'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: TransactionScreen},
  Search: {screen: SearchScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon:({})=>{
      const routeName= navigation.state.routeName
      if(routeName==="Transaction"){
        return(
          <Image
            source ={require("./assets/book.png")}
            style = {{width: 40,height:40}}
          />
        )
      }
      else if(routeName=== "Search"){
        return(
          <Image
            source = {require("./assets/searchingbook.png")}
            style = {{width: 40,height:40}}
          />
        )
      }
    }
  })
})

const switchNavigator = createSwitchNavigator({
  loginScreen: {screen: LogInScreen},
  TabNavigator: {screen: TabNavigator}
})
const AppContainer = createAppContainer(switchNavigator)