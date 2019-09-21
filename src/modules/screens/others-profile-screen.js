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
import { getOtherUserAnswers, state } from "../../state";

// import { NavigationContext } from "./application-container";
class OtherProfileContainer extends Component {
  constructor() {
    super();
  }
  props: {
    otherUserAnswers: any,
    getOtherUserAnswers: () => any,
    navigation: any,
    userId:any
  };
  componentWillMount() {
    debugger;
    const { navigation } = this.props;
    const userId = navigation.getParam('userId');
    this.props.getOtherUserAnswers( userId);
  }
  componentDidMount() {
    console.log("seksek",this.props.otherUserAnswers);
    debugger;
  }
  static mapStatetToProps(state: State) {
    return {
        otherUserAnswers: state.profileDataCompleting.otherUserAnswers
    };
  }
  // static contextType = NavigationContext;
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ getOtherUserAnswers }, dispatch);
  }
  render() {
    // let _nav = this.context;
    return (
      <Container>
        <Header style={{ backgroundColor: "#60b4c2" }}>
            <Button
              hasText
              transparent
              light
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Text>Back</Text>
            </Button>
          <Title style={{ paddingTop: 35, fontSize: 15 }}>Profile</Title>
     
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
                answers={this.props.otherUserAnswers.filter(
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
              <ProductService
                answers={this.props.otherUserAnswers.filter(
                  item => item.Question.QuestionTab == 1
                )}
              ></ProductService>
            </Tab>
            <Tab
              heading="Personal"
              tabStyle={styles.tabStyle}
              textStyle={styles.textStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
            >
              <ProductService
                answers={this.props.otherUserAnswers.filter(
                  item => item.Question.QuestionTab == 2
                )}
              ></ProductService>
            </Tab>
            <Tab
              heading="Connections"
              tabStyle={styles.tabStyle}
              textStyle={styles.textStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
            >
              <ProductService
                answers={this.props.otherUserAnswers.filter(
                  item => item.Question.QuestionTab == 3
                )}
              ></ProductService>
            </Tab>
            <Tab
              heading="Community Support"
              tabStyle={styles.tabStyle}
              textStyle={styles.textStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
            >
              <ProductService
                answers={this.props.otherUserAnswers.filter(
                  item => item.Question.QuestionTab == 4
                )}
              ></ProductService>
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

export default OthersProfileScreen = connect(
    OtherProfileContainer.mapStatetToProps,
    OtherProfileContainer.mapDispatchToProps
)(OtherProfileContainer);

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
