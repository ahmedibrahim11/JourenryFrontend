import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Input,
  Icon,
  Text,
  ListItem,
  List,
  Thumbnail,
  Left,
  Right,
  Item,
  Body,
  Title
} from "native-base";
import images from "../../../assets/images";

export default class HomeScreen extends Component {
  _onChangeSearchText(text) {
    //do something
  }
  render() {
    return (
      <Container>
        <Header
          style={{ backgroundColor: "#60b4c2" }}
          span
          searchBar
          rounded
          autoCorrect={false}
        >
          <Body style={{ marginLeft: 10 }}>
            <Title style={{ marginTop: 30 }}>Explore</Title>
            <Item rounded>
              <Icon style={{ color: "white" }} name="ios-search" />
              <Input
                placeholderTextColor="white"
                onChangeText={this._onChangeSearchText.bind(this)} // <-- Here
                placeholder="Search El-Re7la Alumni"
              />
            </Item>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={images.logo} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
