import React, { Component } from "react";
import { LinearGradient } from "expo";
import { AsyncStorage } from "react-native";

import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  View,
  Thumbnail,
  Text,
  Spinner,
  Label,
  Button,
  Keyboard
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { UserLoginModel } from "../../proxy/models";
import { GradientBtn } from "../components/Gradient-Btn";
import { ScrollView } from "react-native-gesture-handler";
// import i18next from 'i18next';

// var language = require('../../languages/english.json');
export class ChangePasswordForm extends Component {
  
  constructor() {
    super();
    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
    this.successChangePassword=this.successChangePassword.bind(this);
  }

  props:{
    chanePasswordError:String,
    loading:Boolean,
    isChanged:Boolean,
    tryChangePassword: (changePasswordModel:ChangePasswordModel ) => void
  }

  successChangePassword() {
    this.props.navigation.navigate("HomeScreen");
  }
  changePassword(state) {
    debugger;
      this.props.tryChangePassword(state);
  }
  render() {
    const loadingSpinner = this.props.loading ? (
      <Spinner color="#ef9c05" />
    ) : (
      <Text bold red margin20>
        {this.props.chanePasswordError}
      </Text>
    );

    return (
      <View style={{ flex: 1 }}>
        <Form>
          <Item floatingLabel>
            <Label>oldPassword</Label>
            <Input
              onChangeText={txt => {
                this.setState({ oldPassword: txt });
              }}
            />
          </Item>
          <Item floatingLabel>
            <Label>NewPassword</Label>
            <Input
              secureTextEntry={true}
              onChangeText={txt => {
                this.setState({ newPassword: txt });
              }}
            />
          </Item>
          <Item floatingLabel>
            <Label>ConfirmPassword</Label>
            <Input
              secureTextEntry={true}
              onChangeText={txt => {
                this.setState({ confirmPassword: txt });
              }}
            />
          </Item>
          <Text></Text>
          <View style={styles.ChangePasswordContainer}>
            <Button
              dark
              full
              style={{
                borderRadius: 25,
                borderWidth: 0.8,
                backgroundColor: "#ef9c05"
              }}
               onPress={() => {
               this.props.tryChangePassword(this.state);
                AsyncStorage.clear(() => {
                  this.props.navigation.navigate("LoginScreen");
                });
              }}
            >
              <Text style={{ color: "#FFFFFF" }}>SetNewPassword</Text>
            </Button>
          </View>
          {loadingSpinner}
        </Form>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ChangePasswordContainer: {
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 0 },
    paddingTop: 20
  },
  button: {
    flex: 1,
    borderRadius: 25,
    paddingTop: 5,
    borderRadius: 25,
    shadowRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        // shadowOffset: { width: 1, height: 13 },
        shadowOpacity: 0.2
      },
      android: {
        elevation: 6
      }
    })
  },
  forgetContainer: {
    flex: 1,
    // width: DEVICE_WIDTH,
    flexDirection: "row-reverse"
  },
  forgetText: {
    color: "rgba(3, 3, 3, 0.5)",
    backgroundColor: "transparent",
    fontSize: 14
  },
  registerTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20
  }
});
