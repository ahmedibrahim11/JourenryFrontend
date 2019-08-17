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

import MyTab from "../tab-navigator";

export default class ApplicationContainer extends Component {
  render() {
    return (
      <Container>
        <MyTab />
      </Container>
    );
  }
}
