import React, { Component } from "react";
import { ImageBackground, Dimensions } from "react-native";
import QuestionAnswersType from "../Question/question-answers-type";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  Container,
  Header,
  Text,
  Button,
  Icon,
  Right,
  Left,
  Body,
  Grid,
  Col,
  Row,
  View,
  TabHeading,
  Content,
  Thumbnail
} from "native-base";
import * as _ from "lodash";
import { UserAnswer, AnswersDto } from "../../../proxy/models/classes";
export default class ProfileDataCompletingComponent extends Component {
  constructor() {
    super();
    this.state = {
      answers: [],
      questionNumber: 0,
      currentAnswer: "",
      userId: 1,
      SelectedYes: false,
      selectedNo: false,
      textareaClear: () => {}
    };
    this.addUserQuestionAnswer = this.addUserQuestionAnswer.bind(this);
    this.getCurrentAnswer = this.getCurrentAnswer.bind(this);
  }
  props: {
    questions: any,
    getQuestions: () => any,
    saveAnswer: (answers: AnswersDto) => void,
    SelectedYes: false,
    selectedNo: false
  };

  CheckMe = selectedCheckbox => {
    this.setState({ selectedCheckbox });
  };

  addUserQuestionAnswer() {
    debugger;
    console.log(
      "QuetionName",
      this.props.questions[this.state.questionNumber].Name
    );
    if (this.props.questions[this.state.questionNumber + 1] === undefined) {
      var _answers = this.state.answers;
      _answers.push({
        answer: this.state.currentAnswer,
        questionId: this.props.questions[this.state.questionNumber].Id
      });
      this.setState({
        answers: _answers
      });
      this.props.saveAnswer(this.state.answers);
      this.props.navigation.navigate("HomeScreen");
    } else {
      debugger;
      var _answers = this.state.answers;
      _answers.push({
        answer: this.state.currentAnswer,
        questionId: this.props.questions[this.state.questionNumber].Id
      });
      this.state.textareaClear();
      this.setState({
        answers: _answers,
        questionNumber: this.state.questionNumber + 1,
        currentAnswer: "",
        SelectedYes: false,
        selectedNo: false
      });
      console.log("statt", this.state);
    }
  }

  getCurrentAnswer(answer: UserAnswer, callBack, questionType) {
    debugger;
    if (questionType == 2) {
      this.setState({ currentAnswer: answer, textareaClear: callBack });
    } else {
      this.setState({ currentAnswer: answer });
    }
  }

  render() {
    if (this.props.questions.length == 0) {
      return <Container></Container>;
    }
    const { height: screenHeight, width: screenWidth } = Dimensions.get(
      "window"
    );
    const isEnabled = this.state.currentAnswer.length > 0;
    debugger;
    const skip = this.props.questions[this.state.questionNumber].IsMandatory ? (
      <Button
        disabled={!isEnabled}
        dark
        full
        style={{
          borderRadius: 10,
          borderWidth: 0.2,
          width: 300,
          alignSelf: "center",
          backgroundColor: !isEnabled ? "#808080" : "#ef9c05"
        }}
        onPress={() => {
          this.addUserQuestionAnswer();
        }}
      >
        <Text>Next</Text>
      </Button>
    ) : (
      <Row>
        <Col size={50}>
          <Button
            disabled={!isEnabled}
            dark
            full
            style={{
              borderRadius: 10,
              borderWidth: 0.2,
              width: 100,
              marginLeft: 40,
              backgroundColor: !isEnabled ? "#808080" : "#ef9c05"
            }}
            onPress={() => {
              this.addUserQuestionAnswer();
            }}
          >
            <Text>Next</Text>
          </Button>
        </Col>
        <Col size={50}>
          <Button
            dark
            full
            style={{
              borderRadius: 10,
              borderWidth: 0.2,
              width: 100,
              backgroundColor: "#ef9c05"
            }}
            onPress={() => {
              this.setState({ currentAnswer: "" }, () => {
                this.addUserQuestionAnswer();
              });
            }}
          >
            <Text>Skip</Text>
          </Button>
        </Col>
      </Row>
    );
    return (
      <Container>
        <Header style={{ backgroundColor: "#60b4c2" }}></Header>
        <ImageBackground
          source={require("../../../../assets/login/login.png")}
          style={{ flex: 1, height: screenHeight, width: screenWidth }}
        >
          <Thumbnail
            source={require("../../../../assets/logo.png")}
            style={{ height: 70, width: 80, alignSelf: "center" }}
            square
          />

          <View style={{ flex: 1, marginTop: 15 }}>
            <KeyboardAwareScrollView enableOnAndroid>
              <View style={{ alignItems: "center" }}>
                <Text>
                  {this.props.questions[this.state.questionNumber].Name}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignSelf: "center",
                  width: 350
                }}
              >
                <QuestionAnswersType
                  question={this.props.questions[this.state.questionNumber]}
                  getCurrentAnswer={this.getCurrentAnswer}
                  saveAnswer={this.props.saveAnswer}
                />
              </View>

              <View
                style={{
                  marginTop: 50
                }}
              >
                {skip}
              </View>
            </KeyboardAwareScrollView>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}
