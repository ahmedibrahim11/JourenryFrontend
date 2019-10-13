import React, { Component } from "react";
import { StatusBar, StyleSheet } from "react-native";
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
import DropDownQuestionsData from "../Question/DropDownQuestionsData";
export default class AdvancedFilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: { 5: "", 6: "", 18: "" },
      selectedOption: undefined
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.filterCriteria = this.filterCriteria.bind(this);
  }
  componentDidMount() {}

  onValueChange(value) {
    this.setState({
      selectedOption: value
    });
    this.props.getCurrentAnswer(value);
  }
  filterCriteria(questionId) {
    return Object.keys(this.state.filter).some(
      criteria => criteria == questionId
    );
  }
  render() {
    let options = DropDownQuestionsData.filter(s =>
      this.filterCriteria(s.questionId)
    );
    debugger;
    return (
      <Container>
        <Header
          style={{
            marginTop: StatusBar.currentHeight,
            backgroundColor: "#60b4c2"
          }}
        >
          <Title style={{ alignContent: "center", fontSize: 15 }}>
            Advanced Filter
          </Title>
        </Header>
        <Content>
          {options.map((item, index) => {
            return (
              <Picker
                style={{ alignSelf: "center" }}
                key={index}
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
                selectedValue={this.state.filter[item.questionId]}
                onValueChange={value => {
                  var _filter = this.state.filter;
                  _filter[item.questionId] = value;
                  this.setState({ filter: _filter });
                }}
              >
                {item.values.map((value, index) => {
                  return (
                    <Picker.Item label={value} key={index} value={value} />
                  );
                })}
              </Picker>
            );
          })}
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: "white",
    width: "50%"
  },
  textStyle: {
    color: "gray"
  },
  activeTabStyle: {
    backgroundColor: "white",
    width: "50%"
  },
  activeTextStyle: {
    color: "#EF9C05"
  }
});
