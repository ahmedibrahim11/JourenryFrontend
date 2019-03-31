import React, { Component } from "react";
import { StyleSheet, ImageBackground } from "react-native";

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
  Label
} from "native-base";

import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { State } from "../../state";
import { tryRegister } from "../../state/authorization/action-creator";
import { UserRegisterModel } from "../../proxy/models";
import { RegisterForm, Logo } from "../components";
import Images from "../../../assets/images";

class RegisterContainer extends Component {
  static mapStateToProps(state: State) {
    return {
      registerError: state.authorization.errorMessage,
      loading: state.authorization.loading,
      isRegistered: state.authorization.isRegistered
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      {
        tryRegister
      },
      dispatch
    );
  }

  props: {
    registerError: string,
    loading: boolean,
    isRegistered: boolean,
    tryRegister: (user: UserRegisterModel) => void
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isRegistered) {
      nextProps.navigation.navigate("HomeScreen");
    }
  }

  render() {
    return (
      <ImageBackground
        source={Images.registerBackground}
        style={styles.backgroundImage}
        imageStyle={{ resizeMode: "cover" }}
      >
        <Container style={{ padding: 5 }}>
          <Logo title="SIGN UP" />
          <RegisterForm
            loading={this.props.loading}
            tryRegister={this.props.tryRegister}
            errorMessage={this.props.registerError}
            isRegistered={this.props.isRegistered}
            navigation={this.props.navigation}
          />
        </Container>
      </ImageBackground>
    );
  }
}
var styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  }
});
export const RegisterScreen = connect(
  RegisterContainer.mapStateToProps,
  RegisterContainer.mapDispatchToProps
)(RegisterContainer);
