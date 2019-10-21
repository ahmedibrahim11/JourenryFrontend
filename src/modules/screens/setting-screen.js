import React, { Component } from "react";
import {connect} from "react-redux";
import {Dispatch,bindActionCreators} from "redux";
import { AsyncStorage } from "react-native";

import { Application } from "../../application";
import { logOutUser } from "../../state"
// import {State,SendFeedback} from "../../state"
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

class SettingContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static mapStatetToProps(state: State) {
    return {};
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ logOutUser }, dispatch);
  }

  // props:{
  //   error:String,
  //   isSumbit:Boolean
  //   SendFeedback:(feedback:String)=>void
  // };

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

            <ListItem
              onPress={() => {
                this.props.logOutUser();
                debugger;
                AsyncStorage.clear(() => {
                  this.props.screenProps.navigate("LoginScreen");
                });
              }}
            >
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

export default SettingScreen=connect(
  SettingContainer.mapStatetToProps,
  SettingContainer.mapDispatchToProps
)(SettingContainer);
