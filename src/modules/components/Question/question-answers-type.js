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
  Body
} 
from "native-base";
import * as _ from "lodash";

export default QuestionAnswersType = ({ question, getCurrentAnswer }) => {
  this.state = {
    dropdownValue: "key1"
  };

onValueChange(value: string) {
  this.setState({
    dropdownValue: value
  });
}
  switch (question.QuestionType) {
    case 1: {
      return (
        <Container>
        <Content>
          <Form>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
        </Content>
      </Container>
      );
    }
    case 3: {
      return (
        <Container>
          <Content padder>
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Textarea"
              onChangeText={txt => {
                var answer = txt;
                getCurrentAnswer(answer);
              }}
            />
          </Content>
        </Container>
      );
    }

    case 4: {
      return (
        <Content>
          <ListItem>
            <CheckBox checked={true} />
            <Text>Daily Stand Up</Text>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />

            <Text>Discussion with Client</Text>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green" />

            <Text>Finish list Screen</Text>
          </ListItem>
        </Content>
      );
    }

    case 3: {
      return <Container />;
    }
    default:
      return <Container />;
  }
};
