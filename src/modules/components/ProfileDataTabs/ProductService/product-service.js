import React, { Component } from "react";
import images from "../../../../../assets/images";
import { Container, Text, List, ListItem, Right, Button } from "native-base";
export class ProductService extends Component {
  componentDidMount() {
    console.log(this.props.answers);
  }

  render() {
    return (
      <Container>
        <List
          dataArray={this.props.answers}
          renderRow={Item => (
            <ListItem>
              <Text style={{ color: "#666e68" }}>{Item.Question.Metadata}</Text>

              <Text>{Item.Value}</Text>
              {this.props.editingMode ? (
                <Button transparent>
                  <Image
                    source={images.editIcon}
                    style={{ width: 30, height: 30 }}
                  />
                </Button>
              ) : (
                <Text>""</Text>
              )}
            </ListItem>
          )}
        />
      </Container>
    );
  }
}
