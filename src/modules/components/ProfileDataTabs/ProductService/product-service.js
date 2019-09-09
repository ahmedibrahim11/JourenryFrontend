import React, { Component } from "react";
import { Container, Text, List, ListItem } from "native-base";
export class ProductService extends Component {
  render() {
    return (
      <Container>
        <List>
          <ListItem style={{ backgroundColor: "#FAFAFA" }} itemHeader first>
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
      </Container>
    );
  }
}
