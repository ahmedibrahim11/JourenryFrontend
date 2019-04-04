import React, { Component } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem
} from "native-base";

import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";

import MyTab from "../tab-navigator";
import HomeScreen from "../components/home";
import SideBar from "../components/sidebar";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

export default class HS extends Component {
  render() {
    return (
      <Container
        style={{
          paddingTop: 25
        }}
      >
        <MyTab />
      </Container>
    );
  }
}
