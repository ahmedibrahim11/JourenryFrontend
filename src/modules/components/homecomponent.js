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
  Title,
  View
} from "native-base";
import images from "../../../assets/images";

import * as _ from "lodash";

export default class HomeComponent extends Component {
  constructor() {
    super();
    this.state = {
      final: []
    };
  }
  UNSAFE_componentWillMount() {
    debugger;
    if (this.state.final.length === 0) {
      this.setState({ final: this.props.connections });
      console.log("finaaaa", this.state.final);
      debugger;
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props != nextProps && nextProps.applyFilter == true) {
      let _final = [];
      nextProps.connections.forEach(function(item) {
        if (nextProps.advancedFilter.includes(item.Id)) {
          _final.push(item);
        }
      });
      this.setState({ final: _final });
      debugger;
    } else if (this.props != nextProps) {
      this.setState({ final: nextProps.connections });
      debugger;
    }
  }

  _onChangeSearchText(text) {
    let _final = [];
    this.props.connections.forEach(function(item) {
      if (
        Object.values(item)
          .toString()
          .includes(text)
      )
        _final.push(item);
    });
    this.setState({ final: _final });
  }

  props: {
    connections: any
  };

  render() {
    return (
      <Container>
        <Header
          style={{ paddingTop: 35, backgroundColor: "#60b4c2" }}
          span
          searchBar
          rounded
          autoCorrect={false}
        >
          <Body style={{ marginLeft: 10 }}>
            <Title style={{ margin: 15, fontSize: 32 }}>Explore</Title>
            <Item rounded style={{ width: "95%", height: "30%" }}>
              <Icon
                style={{ color: "white", fontSize: 14 }}
                name="ios-search"
              />
              <Input
                style={{ fontSize: 14 }}
                transparent
                placeholderTextColor="#bbc9cc"
                onChangeText={this._onChangeSearchText.bind(this)} // <-- Here
                placeholder="Search El-Re7la Alumni"
              />
            </Item>
            <Button
              hasText
              transparent
              light
              onPress={() => {
                this.props.screenProps.navigate("AdvancedFilterScreen");
              }}
            >
              <Text>Filter</Text>
            </Button>
          </Body>
        </Header>
        <Content>
          <List>
            {_.map(this.state.final, (item, id) => {
              return (
                <ListItem
                  thumbnail
                  key={id}
                  onPress={() => {
                    this.props.screenProps.navigate("OthersProfileScreen", {
                      user: item
                    });
                  }}
                >
                  <Left>
                    <Thumbnail circular source={images.avtar} />
                  </Left>
                  <Body>
                    <Text>{item.Name}</Text>
                    <Text style={{ color: "#60b4c2" }}>{item.Email}</Text>
                    <Button
                      rounded
                      style={{
                        backgroundColor: "#60b4c2",
                        fontSize: 14,
                        color: "white",
                        height: 40,
                        margin: 5
                      }}
                    >
                      <Text>Telecom</Text>
                    </Button>
                    <Button
                      rounded
                      style={{
                        backgroundColor: "#60b4c2",
                        fontSize: 14,
                        color: "white",
                        height: 40,
                        margin: 5
                      }}
                    >
                      <Text>Business</Text>
                    </Button>
                  </Body>
                </ListItem>
              );
            })}
          </List>
        </Content>
      </Container>
    );
  }
}
