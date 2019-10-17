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
  Title,
  View,
  Button
} from "native-base";
import DropDownQuestionsData from "../Question/DropDownQuestionsData";
export default class AdvancedFilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        5: { value: "Any", metaData: "service or product" },
        6: { value: "Any", metaData: "Platform Type" },
        16: { value: "Any", metaData: "Industry" },
        17: { value: "Any", metaData: "Startup phase" },
        18: { value: "Any", metaData: "Year started" },
        20: { value: "Any", metaData: "Funding stage" },
        21: { value: "Any", metaData: "Business Model" },
        22: { value: "Any", metaData: "Business / Social" },
        38: { value: "Any", metaData: "Current City" },
        39: { value: "Any", metaData: "Home City" },
        71: { value: "Any", metaData: "Global Markets" },
        72: { value: "Any", metaData: "Local Markets" }
      }
    };
    this.filterCriteria = this.filterCriteria.bind(this);
  }
  componentDidMount() {}

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
          <Title style={{ alignContent: "center", fontSize: 15 }}>
            Advanced Filter
          </Title>
          <Button
            hasText
            transparent
            light
            onPress={() => {
              this.props.filterConnections(this.state.filter);
              this.props.navigation.navigate("HomeScreen");
            }}
          >
            <Text>Query</Text>
          </Button>
        </Header>
        <Content
          contentContainerStyle={{ justifyContent: "space-around" }}
          style={{ flexDirection: "column" }}
        >
          {options.map((item, index) => {
            return (
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    color: "#60b4c2",
                    fontSize: 17
                  }}
                >
                  {this.state.filter[item.questionId].metaData}
                </Text>
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
                  selectedValue={this.state.filter[item.questionId].value}
                  onValueChange={value => {
                    var _filter = this.state.filter;
                    _filter[item.questionId].value = value;
                    this.setState({ filter: _filter });
                    debugger;
                  }}
                >
                  <Picker.Item label={"Any"} key={"Any"} value={"Any"} />
                  {item.values.map((value, index) => {
                    return (
                      <Picker.Item label={value} key={index} value={value} />
                    );
                  })}
                </Picker>
              </View>
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
