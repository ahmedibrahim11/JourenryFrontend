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
  TabHeading
} from "native-base";
import AcceptedConnectionComponent from "./AcceptedConnections/accepted-connection";
import RequestedConnectionComponent from "./RequestedConnections/requested-connection";
export default class ConnectionComponent extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#60b4c2" }}>
          <Title style={{ paddingTop: 35, fontSize: 15 }}>My Connections</Title>
        </Header>
        <Container>
          <Content>
            <Tabs
              tabBarUnderlineStyle={{
                backgroundColor: "white",
                borderBottomWidth: 2,
                borderBottomColor: "#EF9C05"
              }}
              renderTabBar={() => <ScrollableTab />}
            >
              <Tab
                heading="Connections"
                tabStyle={styles.tabStyle}
                textStyle={styles.textStyle}
                activeTabStyle={styles.activeTabStyle}
                activeTextStyle={styles.activeTextStyle}
              >
                <AcceptedConnectionComponent />
              </Tab>
              <Tab
                heading="New Requests"
                tabStyle={styles.tabStyle}
                textStyle={styles.textStyle}
                activeTabStyle={styles.activeTabStyle}
                activeTextStyle={styles.activeTextStyle}
              >
                <RequestedConnectionComponent />
              </Tab>
            </Tabs>
          </Content>
        </Container>
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
