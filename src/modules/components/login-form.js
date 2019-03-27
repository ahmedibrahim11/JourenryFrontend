import React, { Component } from "react";
import { LinearGradient } from "expo";
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
  Button
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { UserLoginModel } from "../../proxy/models";
import { GradientBtn } from "../components/Gradient-Btn";
// import i18next from 'i18next';

// var language = require('../../languages/english.json');
export class LoginForm extends Component {
  //koko
  //p@$$w0rd
  //msam
  //123
  constructor() {
    super();
    this.state = {
      username: "koko",
      password: "p@$$w0rd"
    };
  }

  props: {
    isLoggedIn: boolean,
    loading: boolean,
    errorMessage: string,
    navigation: any,
    tryLogin: UserLoginModel => void
  };

  login() {
    this.props.tryLogin(this.state);
  }

  render() {
    const loadingSpinner = this.props.loading ? (
      <Spinner color="blue" />
    ) : (
      <Text bold red margin20>
        {this.props.errorMessage}
      </Text>
    );

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          padding: 15
        }}
      >
        <KeyboardAwareScrollView>
          <View style={{ flex: 1 }}>
            <Form>
              <Item floatingLabel>
                <Label>User Name</Label>
                <Input
                  onChangeText={txt => {
                    this.setState({ username: txt });
                  }}
                />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  onChangeText={txt => {
                    this.setState({ password: txt });
                  }}
                />
              </Item>
              <View style={styles.forgetContainer}>
                <Text
                  style={styles.forgetText}
                  onPress={() => console.log("Forget password")}
                >
                  ForgetPassword
                  {/* {i18next.t("login.Lables.ForgotPassword")} */}
                </Text>
              </View>
            </Form>
            <View style={styles.loginContainer}>
              <GradientBtn text="Sign IN" action={this.login.bind(this)} />
            </View>
            <View style={styles.registerTextContainer}>
              <Text style={styles.forgetText}>Have No Account</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Button
                dark
                full
                style={{
                  borderRadius: 25,
                  borderWidth: 0.8,
                  borderColor: "rgba(3, 3, 3, 0.2)",
                  backgroundColor: "transparent"
                }}
                onPress={() => {
                  this.props.navigation.navigate("RegisterScreen");
                }}
              >
                <Text style={{ color: "#1550d6" }}>Register</Text>
              </Button>
            </View>
            {loadingSpinner}
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loginContainer: {
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
