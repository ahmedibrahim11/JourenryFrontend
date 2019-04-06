import React, { Component } from "react";
import {
  StackNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import { Icon } from "native-base";

import { Image } from "react-native";

import images from "../../assets/images";
import HomeSceen from "./components/home";
import { ProfileScreen, SettingScreen } from "../modules/screens";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeSceen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image source={images.homeIcon} style={{ width: 30, height: 30 }} />
        )
      }
    },
    Connections: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={images.connectionIcon}
            style={{ width: 30, height: 30 }}
          />
        )
      }
    },
    MyProfile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={images.profileIcon}
            style={{ width: 26, height: 26 }}
          />
        )
      }
    },

    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={images.settingIcon}
            style={{ width: 26, height: 26 }}
          />
        )
      }
    }
  },
  { color: "#60b4c2" }
);

export default (MyTab = createAppContainer(TabNavigator));
