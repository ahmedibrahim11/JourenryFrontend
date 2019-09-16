import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
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
import { getUserAnswers, state } from "../../state";

// import { NavigationContext } from "./application-container";
class ProfileContainer extends Component {
  constructor() {
    super();
  }
  props: {
    answers: any,
    getUserAnswers: () => any,
    navigation: any
  };
  componentWillMount() {
    debugger;
    this.props.getUserAnswers();
  }
  static mapStatetToProps(state: State) {
    return {
      answers: state.profileDataCompleting.answers
    };
  }
  // static contextType = NavigationContext;
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ getUserAnswers }, dispatch);
  }
  render() {
    // let _nav = this.context;
    return (
      <Container>
        <Header style={{ backgroundColor: "#60b4c2" }}>
          <Title style={{ paddingTop: 35, fontSize: 15 }}>My Profile</Title>
          <Right>
            <Button
              hasText
              transparent
              light
              onPress={() => {
                this.props.screenProps.navigate("EditProfileScreen");
              }}
            >
              <Text>Edit</Text>
            </Button>
          </Right>
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
              <Text>Mohamed Emad</Text>
              <Text note>CEO - Giftia</Text>
              <Button
                rounded
                style={{ backgroundColor: "#EF9C05", shadowColor: "#f99c05" }}
              >
                <Text style={{ color: "#ffffff" }}>Request Contacts</Text>
              </Button>
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
              <ProductService
                answers={this.props.answers.filter(
                  item => item.Question.QuestionTab == 0
                )}
              ></ProductService>
            </Tab>
            <Tab
              heading="Organization"
              tabStyle={styles.tabStyle}
              textStyle={styles.textStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
            >
              <Text>tab content</Text>
            </Tab>
            <Tab
              heading="Personal"
              tabStyle={styles.tabStyle}
              textStyle={styles.textStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
            >
              <Text>tab content</Text>
            </Tab>
            <Tab
              heading="Connections"
              tabStyle={styles.tabStyle}
              textStyle={styles.textStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
            >
              <Text>tab content</Text>
            </Tab>
            <Tab
              heading="Community Support"
              tabStyle={styles.tabStyle}
              textStyle={styles.textStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
            >
              <Text>tab content</Text>
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

export default ProfileScreen = connect(
  ProfileContainer.mapStatetToProps,
  ProfileContainer.mapDispatchToProps
)(ProfileContainer);

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
