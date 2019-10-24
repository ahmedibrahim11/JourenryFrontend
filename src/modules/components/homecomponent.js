import React, { Component } from "react";
import { StatusBar, StyleSheet } from "react-native";

import {
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Alert
} from "react-native";
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

import * as _ from "lodash";
import { white } from "ansi-colors";

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
    let leftButton =
      this.props.applyFilter == false ? (
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
      ) : (
        <Button
          hasText
          transparent
          light
          onPress={() => {
            this.props.removeFilter();
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text>Remove </Text>
            <Text>Filter</Text>
          </View>
        </Button>
      );

    return (
      <Container>
        <Header
          style={{
            marginTop: StatusBar.currentHeight,
            backgroundColor: "#60b4c2"
          }}
          span
          searchBar
          rounded
          autoCorrect={false}
        >
          <Body style={{ flexDirection: "column" }}>
            <Title style={{ margin: 15, fontSize: 32 }}>Explore</Title>
            <View style={{ flexDirection: "row" }}>
              <Item
                rounded
                style={{ alignSelf: "center", width: "80%", height: "50%" }}
              >
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

              {leftButton}
            </View>
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
                  <Body style={{ flexDirection: "column" }}>
                    <Text>{item.Name}</Text>
                    <Text style={{ color: "#60b4c2" }}>{item.Email}</Text>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                      
                       {_.map(item.Hobbies.split(","), (_item,id) => {
                         if(_item=="")
                         return;
                        return (
                          <View id={id} style={{ margin: 2 }}>
                            <TouchableOpacity
                              style={{
                                borderRadius: 25,
                                borderWidth: 0.8,
                                height: 30,
                                backgroundColor: "#60b4c2",
                                borderStyle: "solid",
                                borderColor: "#60b4c2"
                              }}
                            >
                              <Text style={{ color: "#ffffff", margin: 5 }}>
                                {_item}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        );
                      })} 
                    </View>
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
