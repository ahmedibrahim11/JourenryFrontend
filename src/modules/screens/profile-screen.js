import React, { Component } from "react";
import { Image } from "react-native";
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
  ScrollableTab
} from "native-base";
import images from "../../../assets/images.js";
export class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={images.logo} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Tabs renderTabBar={() => <ScrollableTab />}>
            <Tab heading="Product/Service">
              <List>
                <ListItem itemHeader first>
                  <Text>Main info</Text>
                </ListItem>
                <ListItem>
                  <Text>Startup Name</Text>
                </ListItem>
                <ListItem last>
                  <Text>Description</Text>
                </ListItem>
                <ListItem itemHeader>
                  <Text>ACTION</Text>
                </ListItem>
                <ListItem>
                  <Text>Terminator Genesis</Text>
                </ListItem>
              </List>
            </Tab>
            <Tab heading="Organization">{/* <Tab2 /> */}</Tab>
            <Tab heading="Personal">{/* <Tab3 /> */}</Tab>
            <Tab heading="Connections">{/* <Tab4 /> */}</Tab>
            <Tab heading="Community Support">{/* <Tab5 /> */}</Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}
