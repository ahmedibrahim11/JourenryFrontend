import React, { Component } from "react";

import { ImageBackground, StyleSheet, StatusBar } from "react-native";

import { Thumbnail, Container, Header, Button, Text } from "native-base";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Images from "../../../assets/images";
import { ChangePasswordForm } from "../components/change-password-form";

export class ChangePassword extends Component {
  constructor() {
    super();
    this.state = {};
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
            <ChangePasswordForm></ChangePasswordForm>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </Container>
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
