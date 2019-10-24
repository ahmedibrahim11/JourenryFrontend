import React, { Component } from "react";
import { StatusBar, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  List,
  ListItem,
  Image,
  Tab,
  Tabs,
  ScrollableTab,
  Title,
  View,
  TabHeading,
  Right
} from "native-base";

import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";

import { ProductService } from "../components/ProfileDataTabs/ProductService/product-service";
import images from "../../../assets/images.js";
import { AnswersDto } from "../../proxy";

import { updateUserAnswers } from "../../state/profiledatacompleting/action-creator";
import { getUserAnswers, state } from "../../state";
class EditProfileContainer extends Component {
  constructor() {
    super();
    this.state = {
      updatedAnwsers: []
    };
    this.updateAnwsers = this.updateAnwsers.bind(this);
  }

  updateAnwsers(answer) {
    debugger;
    var _updatedAnwsers = this.state.updatedAnwsers;
    // var current = _updatedAnwsers[answer.questionId];
    // current.Value = answer.Value;
    _updatedAnwsers[answer.questionId - 1].Value = answer.Value;
    debugger;
    this.setState({ updatedAnwsers: _updatedAnwsers });
    debugger;
    console.log("updatedAnwsers", _updatedAnwsers);
  }
  saveUpdatedAnswers(newAnswers) {
    this.props.updateUserAnswers(this.state.updatedAnwsers);
    debugger;

    this.props.navigation.navigate("HomeScreen");
  }

  props: {
    answers: [],
    updateUserAnswers: (answers: AnswersDto) => void
  };

  static mapStatetToProps(state: State) {
    return { answers: state.profileDataCompleting.answers,
      token: state.authorization.token };
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ updateUserAnswers }, dispatch);
  }
  componentWillMount() {
    console.log("props", this.props.answers);
    debugger;
    this.setState({ updatedAnwsers: this.props.answers });
    console.log("UpdatedAnswers", this.state.updatedAnwsers);
  }

  render() {
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
            <Text>Cancel</Text>
          </Button>

          <Title style={{ justifyContent: "center", fontSize: 15 }}>
            My Profile
          </Title>

          <Button
            hasText
            transparent
            light
            onPress={() => {
              this.saveUpdatedAnswers(this.state.updatedAnwsers);
            }}
          >
            <Text>Save</Text>
          </Button>
        </Header>
        <Content>
          <Card
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <CardItem>
              <Thumbnail large source={images.logo} />
            </CardItem>
            <CardItem
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
                        <Text>{this.props.token.userName}</Text>
              <Text note>
                {
                  this.props.answers.filter(
                    item => item.QuestionId == 47
                  )[0].Value
                }
              </Text>
   
            </CardItem>
          </Card>

          <Tabs
            tabBarUnderlineStyle={{
              borderBottomWidth: 2,
              borderBottomColor: "#EF9C05"
            }}
            renderTabBar={() => <ScrollableTab />}
          >
            <Tab
              heading="Product/Service"
              tabStyle={styles.tabStyle}
              textStyle={styles.textStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
            >
              {this.props.answers ? (
                <ProductService
                  editingMode={true}
                  updateAnwsers={this.updateAnwsers}
                  answers={this.props.answers.filter(
                    item => item.Question.QuestionTab == 0
                  )}
                ></ProductService>
              ) : (
                <View></View>
              )}
            </Tab>
            <Tab
              heading="Organization"
              tabStyle={styles.tabStyle}
              textStyle={styles.textStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
            >
              {this.props.answers ? (
                <ProductService
                  editingMode={true}
                  updateAnwsers={this.updateAnwsers}
                  answers={this.props.answers.filter(
                    item => item.Question.QuestionTab == 1
                  )}
                ></ProductService>
              ) : (
                <View></View>
              )}
            </Tab>
            <Tab
              heading="Personal"
              tabStyle={styles.tabStyle}
              textStyle={styles.textStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
            >
              {this.props.answers ? (
                <ProductService
                  editingMode={true}
                  updateAnwsers={this.updateAnwsers}
                  answers={this.props.answers.filter(
                    item => item.Question.QuestionTab == 2
                  )}
                ></ProductService>
              ) : (
                <View></View>
              )}
            </Tab>
            <Tab
              heading="Connections"
              tabStyle={styles.tabStyle}
              textStyle={styles.textStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
            >
              {this.props.answers ? (
                <ProductService
                  editingMode={true}
                  updateAnwsers={this.updateAnwsers}
                  answers={this.props.answers.filter(
                    item => item.Question.QuestionTab == 3
                  )}
                ></ProductService>
              ) : (
                <View></View>
              )}
            </Tab>
            <Tab
              heading="Community Support"
              tabStyle={styles.tabStyle}
              textStyle={styles.textStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
            >
              {this.props.answers ? (
                <ProductService
                  editingMode={true}
                  updateAnwsers={this.updateAnwsers}
                  answers={this.props.answers.filter(
                    item => item.Question.QuestionTab == 5
                  )}
                ></ProductService>
              ) : (
                <View></View>
              )}
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}
export default EditProfileScreen = connect(
  EditProfileContainer.mapStatetToProps,
  EditProfileContainer.mapDispatchToProps
)(EditProfileContainer);

var styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: "white"
  },
  textStyle: {
    color: "gray"
  },
  activeTabStyle: {
    backgroundColor: "white"
  },
  activeTextStyle: {
    color: "#EF9C05"
  }
});
