import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";

// import { AnswersDto } from "../../../proxy";
import {
  Container,
  Content,
  Textarea,
  Form,
  ListItem,
  CheckBox,
  Text,
  Picker,
  Body,
  Icon,
  List,
  Header,
  Title
} from "native-base";
import * as _ from "lodash";
import DropDownQuestionsData from "./DropDownQuestionsData";
import { TextInput } from "react-native-gesture-handler";
export default class QuestionAnswersType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedYes: false,
      selectedNo: false,
      selectedOption: undefined,
      answer: ""
    };
  }
  props: {
    question: any,
    getCurrentAnswer: () => void
  };

  onValueChange(value) {
    this.setState({
      selectedOption: value
    });
    this.props.getCurrentAnswer(value);
    debugger;
  }
  componentWillMount() {
    console.log("currentAnswer", this.props.currentAnswer);
  }

  textarea() {
    this.setState({ answer: "" });
  }

  render() {
    const dropDownChoices = DropDownQuestionsData;
    switch (this.props.question.QuestionType) {
      case 0: {
        return (
          <Form>
            <Picker note mode="dropdown" style={{ width: 120 }}></Picker>
          </Form>
        );
      }
      case 1: {
        let options = dropDownChoices.filter(
          s => s.questionId == this.props.question.Id
        );

        return (
          <Form>
            <Picker
              style={{ alignSelf: "center" }}
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your Answer"
              textStyle={{ color: "#ef9c05" }}
              itemStyle={{
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: "#ef9c05" }}
              style={{ width: undefined }}
              selectedValue={this.state.selectedOption}
              onValueChange={itemValue => {
                this.onValueChange(itemValue);
              }}
            >
              {options[0].values.map((item, index) => {
                return <Picker.Item label={item} key={index} value={item} />;
              })}
            </Picker>
          </Form>
        );
      }
      case 2: {
        const oldValue = this.props.currentAnswer
          ? this.props.currentAnswer
          : "";
        return (
          <Textarea
            defaultValue={this.state.answer}
            style={{
              width: 300,
              borderColor: "black",
              alignSelf: "center",
              marginTop: 2
            }}
            rowSpan={7}
            bordered
            placeholder="Your Answer"
            onChangeText={txt => {
              this.props.getCurrentAnswer(txt, this.textarea.bind(this), 2);
              this.setState({ answer: txt });
              //  txt = "";
            }}
            value={this.state.answer}
          />
        );
      }

      case 3: {
        return (
          <List>
            <ListItem style={{ marginTop: 5 }}>
              <CheckBox
                style={{ borderRadius: -3 }}
                color="#ef9c05"
                checked={this.state.selectedYes}
                onPress={() => {
                  this.setState({ selectedYes: true, selectedNo: false });
                  this.props.getCurrentAnswer("Yes");
                }}
              />
              <Text>Yes</Text>
            </ListItem>
            <ListItem>
              <CheckBox
                style={{ borderRadius: -3 }}
                color="#ef9c05"
                checked={this.state.selectedNo}
                onPress={() => {
                  this.setState({ selectedNo: true, selectedYes: false });
                  this.props.getCurrentAnswer("No");
                }}
              />
              <Text>No</Text>
            </ListItem>
          </List>
        );
      }

      case 3: {
        return <Container />;
      }
      default:
        return <Container />;
    }
  }
}
