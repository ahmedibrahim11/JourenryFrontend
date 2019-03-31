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
  Body
} from "native-base";
import images from "../../../assets/images";

export default class HomeScreen extends Component {
  _onChangeSearchText(text) {
    //do something
  }
  render() {
    return (
      <Container>
        <Header searchBar rounded autoCorrect={false}>
          <Item>
            <Icon name="ios-search" />
            <Input
              onChangeText={this._onChangeSearchText.bind(this)} // <-- Here
              placeholder="Search"
            />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
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
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
