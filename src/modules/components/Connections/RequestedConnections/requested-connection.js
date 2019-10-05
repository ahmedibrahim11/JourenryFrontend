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
import * as rcs from "./requested-connection-styles";

export default class RequestedConnectionComponent extends Component {
  constructor() {
    super();
    this.state = {
      final: []
    };
  }

  props: {
    requestedConnections: any
  };

  render() {
    return (
      <Container style={{ backgroundColor: "#edeeef" }}>
        <Content>
          <View style={rcs.searchboxconatiner}>
            <Text style={{ color: "gray", fontSize: 15 }}>
              People requesting to share your contacts with them
            </Text>
          </View>

          <View>
            <List style={{ flex: 1 }}>
              {this.props.requestedConnections.map((Item, index) => {
                debugger;

                return (
                  <ListItem style={rcs.listItem} thumbnail rounded>
                    <View style={rcs.listItemThumbnailView}>
                      <Left>
                        <Thumbnail large source={images.logo} />
                      </Left>
                    </View>
                    <View style={rcs.listItemTextView}>
                      <Body>
                        <Text style={rcs.contactName}>{Item.Name}</Text>

                        <Text style={rcs.contactTitle}>
                          {Item.Email}
                        </Text>
                      </Body>
                    </View>

                    <View style={rcs.listItemButtonsView}>
                      <Button
                        onPress={() => {
                          this.props.onRejectingConnectionRequest(Item.ConnectionId);
                        }}
                        rounded
                        style={rcs.cancelButton}
                      >
                        <Text style={{ color: "#EF9C05" }}>Cancel</Text>
                      </Button>
                      <Button
                        onPress={() => {
                          this.props.acceptingConnectionRequest(Item.ConnectionId);
                        }}
                        rounded
                        style={rcs.acceptButton}
                      >
                        <Text style={{ color: "#ffffff" }}>Accept</Text>
                      </Button>
                    </View>
                  </ListItem>
                );
              })}
            </List>
          </View>
        </Content>
      </Container>
    );
  }
}
