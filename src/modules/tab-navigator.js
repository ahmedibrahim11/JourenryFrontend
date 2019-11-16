import React, { Component } from "react";
import {
  StackNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import { Icon } from "native-base";

import { Image, Text } from "react-native";

import images from "../../assets/images";
import HomeScreen from "./screens/home-screen";
import ProfileScreen from "./screens/profile-screen";
import SettingScreen from "../modules/screens/setting-screen";
import ConnectionScreen from "./screens/connections-container";
export const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: "red" }} focused={focused} />
        ),
        tabBarIcon: ({ focused }) => {
          const image = !focused
            ? require("../../assets/homeIcon/inActive.png")
            : require("../../assets/homeIcon/active.png");
          return (
            <Image
              source={image}
              style={{ width: 80, height: 50, marginTop: 15 }}
            />
          );
        }
      }
    },
    Connections: {
      screen: ConnectionScreen,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: "red" }} focused={focused} />
        ),
        tabBarIcon: ({ focused }) => {
          const image = !focused
            ? require("../../assets/connectionIcon/inActive.png")
            : require("../../assets/connectionIcon/active.png");
          return (
            <Image
              source={image}
              style={{ width: 80, height: 50, marginTop: 15 }}
            />
          );
        }
      }
    },
    MyProfile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: "red" }} focused={focused} />
        ),
        tabBarIcon: ({ focused }) => {
          const image = !focused
            ? require("../../assets/profileIcon/inActive.png")
            : require("../../assets/profileIcon/active.png");
          return (
            <Image
              source={image}
              style={{ width: 80, height: 50, marginTop: 15 }}
            />
          );
        }
      }
    },

    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: "red" }} focused={focused} />
        ),
        tabBarIcon: ({ focused }) => {
          const image = !focused
            ? require("../../assets/settingIcon/inActive.png")
            : require("../../assets/settingIcon/active.png");
          return (
            <Image
              source={image}
              style={{ width: 80, height: 50, marginTop: 15 }}
            />
          );
        }
      }
    }
  },
  { color: "red" }
);

export const MyTab = createAppContainer(TabNavigator);
