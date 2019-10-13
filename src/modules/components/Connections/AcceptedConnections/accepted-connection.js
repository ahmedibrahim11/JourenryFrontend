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
  Body,
  Title,
  View,
  Item,
  InputGroup
} from "native-base";
import images from "../../../../../assets/images";
import * as _ from "lodash";

import { FlatList } from "react-native";

export default class AcceptedConnectionComponent extends Component {
  constructor() {
    super();
    this.state = {
      final: []
    };
  }
  _onChangeSearchText(text) {
    //   let _final = [];
    //   this.props.connections.forEach(function(item) {
    //     if (
    //       Object.values(item)
    //         .toString()
    //         .includes(text)
    //     )
    //       _final.push(item);
    //   });
    //   this.setState({ final: _final });
  }

  props: {
    acceptedConnections: any
  };

  render() {
    return (
      <Container style={{ backgroundColor: "#edeeef" }}>
        <Content>
          <View
            style={{
              marginLeft: 18,
              marginTop: 18,
              height: "20%",
              width: "90%"
            }}
          >
            <InputGroup
              style={{ borderRadius: 10, backgroundColor: "#d4d8dd" }}
            >
              <Icon style={{ color: "gray", fontSize: 14 }} name="ios-search" />
              <Input
                style={{ fontSize: 14 }}
                transparent
                placeholderTextColor="gray"
                onChangeText={this._onChangeSearchText.bind(this)} // <-- Here
                placeholder="Search Your Connections"
              />
            </InputGroup>
          </View>

          <List style={{ flex: 1 }}>
            {this.props.acceptedConnections.map((Item, index) => {
              debugger;

              return (
                <ListItem
                  style={{
                    width: "90%",
                    backgroundColor: "white",
                    marginBottom: 10
                  }}
                  thumbnail
                >
                  <Left style={{ marginLeft: 5 }}>
                    <Thumbnail large circular source={images.avtar} />
                  </Left>
                  <Body>
                    <Text style={{ marginBottom: 7, fontWeight: "bold" }}>
                      {Item.Name}
                    </Text>
                    <Text style={{ fontSize: 12, marginBottom: 4 }}>
                      {Item.Email}
                    </Text>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <Icon
                        style={{
                          color: "#60b4c2",
                          fontSize: 17,
                          marginRight: 4
                        }}
                        name="md-call"
                      />

                      <Text style={{ fontSize: 12 }}>+20 1143713532</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <Icon
                        style={{
                          color: "#60b4c2",
                          fontSize: 17,
                          marginRight: 4
                        }}
                        name="mail"
                      />

                      <Text style={{ fontSize: 12 }}>{Item.Email} </Text>
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
