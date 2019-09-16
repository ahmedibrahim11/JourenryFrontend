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

import { MyTab } from "../tab-navigator";
import ProfileDataCompletingContainer from "./profile-data-completing-screen";

// export const NavigationContext = React.createContext("navigate");

export default class ApplicationContainer extends Component {
  render() {
    return (
      <Container>
        {/* <NavigationContext.Provider value={this.props.navigation}> */}
        <MyTab screenProps={this.props.navigation} />
        {/* </NavigationContext.Provider> */}
      </Container>
    );
  }
}
