import React, { Component } from "react";

import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";

import {
  Thumbnail,
  Container,
  Header,
  View,
  Form,
  Textarea,
  Button,
  Text
} from "native-base";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Images from "../../../assets/images";

export class FeedBackForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { height: screenHeight, width: screenWidth } = Dimensions.get(
      "window"
    );
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
            <View style={{ marginTop: 20 }}>
              <Thumbnail
                source={require("../../../assets/feedback.png")}
                style={{
                  height: 250,
                  width: 320,
                  alignSelf: "center"
                }}
                square
              />
            </View>

            <View
              style={{
                backgroundColor: "#fff",
                height: 200,
                width: 300,
                marginLeft: 30,
                marginTop: 10
              }}
            >
              <View>
                <Form>
                  <Textarea
                    rowSpan={3}
                    placeholder="Type your message here …"
                  />
                </Form>
              </View>
              <View style={{ alignSelf: "center" }}>
                <Button
                  dark
                  full
                  style={{
                    borderRadius: 25,
                    width: 250,
                    borderWidth: 0.8,
                    backgroundColor: "#ef9c05",
                    marginTop: 20
                  }}
                  onPress={() => {
                    this.props.tryLogin(this.state);
                  }}
                >
                  <Text style={{ color: "#FFFFFF" }}>Send</Text>
                </Button>
              </View>
            </View>
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
