import React, { Component } from "react";

import {connect} from "react-redux";

import {Dispatch,bindActionCreators} from "redux";

import {State,tryChangePassword} from "../../state";

import { ChangePasswordModel } from "../../proxy/models";


import { ImageBackground, StyleSheet, StatusBar } from "react-native";

import { Thumbnail, Container, Header, Button, Text } from "native-base";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Images from "../../../assets/images";
import { ChangePasswordForm } from "../components/change-password-form";

 class ChangePassword extends Component {
  constructor() {
    super();
    this.state = {
      isMounted: false
    };
  }

  static mapStatetToProps(state:State){
    return{
     chanePasswordError:state.authorization.errorMessage,
     loading:state.ui.loading,
     isChange:state.authorization.isChange
    };
  }
  static mapDispatchToProps(dispatch:Dispatch){
    return bindActionCreators({tryChangePassword},dispatch);
  }

  props:{
    chanePasswordError:String,
    loading:Boolean,
    isChange:Boolean,
    tryChangePassword: (changePasswordModel:ChangePasswordModel ) => void
  }

  render() {
    return (
      <Container style={{ padding: 1 }}>
        <Header
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: StatusBar.currentHeight,
            backgroundColor: "#60b4c2"
          }}
        >
          <Button
            hasText
            transparent
            light
            onPress={() => {
              this.props.navigation.navigate("HomeScreen");
            }}
          >
            <Text>Back</Text>
          </Button>
        </Header>
        <ImageBackground
          source={Images.loginBackground}
          style={styles.backgroundImage}
          imageStyle={{ resizeMode: "cover" }}
        >
          <KeyboardAwareScrollView
            extraScrollHeight={100}
            enableOnAndroid={true}
            keyboardShouldPersistTaps="handled"
          >
            <Thumbnail
              source={require("../../../assets/changepassword.png")}
              style={{ height: 200, width: 300, alignSelf: "center" }}
              square
            />
            <ChangePasswordForm
             loading={this.props.loading}
             tryChangePassword={this.props.tryChangePassword}
             chanePasswordError={this.props.errorMessage}
             isChanged={this.props.isChanged}
             navigation={this.props.navigation}
            />
            </KeyboardAwareScrollView>
        </ImageBackground>
      </Container>
    );
  }
}

export default ChangePasswordScreen = connect(
  ChangePassword.mapStatetToProps,
  ChangePassword.mapDispatchToProps
)(ChangePassword);


var styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  }
});
