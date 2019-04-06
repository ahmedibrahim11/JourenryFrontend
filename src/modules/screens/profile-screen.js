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
import images from "../../../assets/images.js";
export class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#60b4c2" }}>
          <Title style={{ margin: 15, fontSize: 15 }}>My Connections</Title>
        </Header>
        <Container>
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
                <List>
                  <ListItem
                    style={{ backgroundColor: "#FAFAFA" }}
                    itemHeader
                    first
                  >
                    <Text>Main info</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Startup Name</Text>
                  </ListItem>
                  <ListItem last>
                    <Text>Description</Text>
                  </ListItem>
                  <ListItem itemHeader style={{ backgroundColor: "#FAFAFA" }}>
                    <Text>ACTION</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Terminator Genesis</Text>
                  </ListItem>
                </List>
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
      </Container>
    );
  }
}
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
