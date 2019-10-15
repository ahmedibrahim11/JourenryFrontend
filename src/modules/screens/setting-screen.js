import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon
} from "native-base";

import { StatusBar, Image, StyleSheet } from "react-native";

export class SettingScreen extends Component {
  render() {
    return (
      <Container>
        <Header
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: StatusBar.currentHeight,
            backgroundColor: "#60b4c2"
          }}
        ></Header>
        <Content>
          <List>
            <ListItem
              onPress={() => {
                this.props.screenProps.navigate("ChangePassword");
              }}
            >
              <Left>
                <Text>Change Password</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem
              onPress={() => {
                this.props.screenProps.navigate("Feedback");
              }}
            >
              <Left>
                <Text>Need Help</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text>About</Text>
              </Left>

              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text>Logout</Text>
              </Left>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
