import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import QuestionAnswersType from "../Question/question-answers-type";
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
  TabHeading
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
      selectedNo: false
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
      this.props.saveAnswer(this.state.answers);
    } else {
      var _answers = this.state.answers;
      _answers.push({
        answer: this.state.currentAnswer,
        questionId: this.props.questions[this.state.questionNumber].Id
      });
      this.setState({
        answers: _answers,
        questionNumber: this.state.questionNumber + 1
      });
      console.log("statt", this.state);
    }
  }

  getCurrentAnswer(answer: UserAnswer) {
    debugger;
    this.setState({ currentAnswer: answer });
  }

  render() {
    if (this.props.questions.length == 0) {
      return <Container></Container>;
    }
    // if (this.props.questions[this.state.questionNumber].Name == undefined) {
    //   debugger;
    //   this.props.saveAnswer(this.state);
    // }
    return (
      <Container style={{ paddingTop: 30 }}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
              <Text>Back</Text>
            </Button>
          </Left>
          <Text>questions</Text>
          <Right>
            <Button transparent>
              <Text>Skip</Text>
            </Button>
          </Right>
        </Header>
        <Body>
          <Grid>
            <Col size={30}>
              <Text> Question {this.state.questionNumber + 1}</Text>
            </Col>
            <Col size={70}>
              <Text>
                {this.props.questions[this.state.questionNumber].Name}
              </Text>
            </Col>
          </Grid>
          <QuestionAnswersType
            question={this.props.questions[this.state.questionNumber]}
            getCurrentAnswer={this.getCurrentAnswer}
            saveAnswer={this.props.saveAnswer}
          />

          <Button
            dark
            full
            style={{
              borderRadius: 25,
              borderWidth: 0.8,
              backgroundColor: "#ef9c05"
            }}
            onPress={() => {
              this.addUserQuestionAnswer();
            }}
          >
            <Text>Answer</Text>
          </Button>
        </Body>
      </Container>
    );
  }
}
