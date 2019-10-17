import React, { Component } from "react";
import {connect} from "react-redux";
import {Dispatch,bindActionCreators} from "redux";
import {State,SendFeedback} from "../../state"

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
  Text,
  Spinner
} from "native-base";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Images from "../../../assets/images";

 class FeedBackContainer extends Component {
  constructor() {
    super();
    this.state={
      message:''
    };
  }

  
  static mapStatetToProps(state: State) {
    return {
       isSumbit:state.setting.isSubmit,
       error:state.setting.errorMessage,
       loading: state.ui.loading,
    };
  }

  
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ SendFeedback }, dispatch);
  }

   props:{
    error:String,
    isSumbit:Boolean,
    loading:Boolean;
    SendFeedback:(feedback:String)=>void
  };


  render() {
    const { height: screenHeight, width: screenWidth } = Dimensions.get(
      "window"
    );
    const loadingSpinner = this.props.loading ? (
      <Spinner color="#ef9c05" />
    ) : (
      <Text bold red margin20>
        {this.props.error}
      </Text>
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
                  onChangeText={(text)=>{
                   this.setState({message:text})
                  }}
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
                    this.props.SendFeedback(this.state);
                  }}
                >
                  <Text style={{ color: "#FFFFFF" }}>Send</Text>
                </Button>
              </View>
            </View>
            <View style={{flex:1}}>
             {loadingSpinner}
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

export const FeedBackScreen=connect(
  FeedBackContainer.mapStatetToProps,
  FeedBackContainer.mapDispatchToProps
)(FeedBackContainer);
