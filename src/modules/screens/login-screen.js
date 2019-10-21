import React, { Component } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Text,
  Button,
  Item,
  Input,
  Form,
  Label,
  View,
  Thumbnail
} from "native-base";

import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";

import { LoginForm, Logo } from "../components";

import { State, tryLogin } from "../../state";

import { UserLoginModel } from "../../proxy/models";
import Images from "../../../assets/images";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
class loginContainer extends Component {
  constructor() {
    super();
    this.state = {
      isMounted: false
    };
  }
  static navigationOptions = {
    header: null
  };
  static navigatorStyle = { navBarHidden: true };
  static mapStatetToProps(state: State) {
    return {
      loginError: state.authorization.errorMessage,
      loading: state.ui.loading,
      isLoggedIn: state.authorization.isLoggedIn,
      token: state.authorization.token
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryLogin }, dispatch);
  }

  props: {
    loginError: string,
    loading: boolean,
    isLoggedIn: boolean,
    tryLogin: (userModel: UserLoginModel) => void
  };

  componentWillMount() {
    if (this.props.isLoggedIn == true) {
      this.props.navigation.navigate("HomeScreen");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn === true) {
      debugger;
      if (nextProps.token.isRegisterd === "True") {
        this.props.navigation.navigate("HomeScreen");
      } else {
        this.props.navigation.navigate("ProfileDataCompletingScreen");
      }
    }

    // console.log('will orders')
    this.setState({ isMounted: !this.state.isMounted });
  }
  render() {
    // console.log("from login screen", i18next.t("key"));
    return (
      <KeyboardAwareScrollView
        extraScrollHeight={100}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
      >
        <ImageBackground
          source={Images.loginBackground}
          style={styles.backgroundImage}
          imageStyle={{ resizeMode: "cover" }}
        >
          <Container style={{ padding: 10 }}>
            <Logo />
            <LoginForm
              loading={this.props.loading}
              tryLogin={this.props.tryLogin}
              errorMessage={this.props.loginError}
              isLoggedIn={this.props.isLoggedIn}
              navigation={this.props.navigation}
            />
          </Container>
          {/* <Loader modalVisible={this.props.loading} animationType="fade" /> */}
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  }
}
export const LoginScreen = connect(
  loginContainer.mapStatetToProps,
  loginContainer.mapDispatchToProps
)(loginContainer);

var styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  }
});
