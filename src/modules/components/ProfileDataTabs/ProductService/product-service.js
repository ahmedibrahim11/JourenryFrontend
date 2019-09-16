import React, { Component } from "react";
import * as rcs from "./product-service-styles";
import { Modal, TouchableHighlight, View, Alert } from "react-native";
import images from "../../../../../assets/images";
import {
  Container,
  Text,
  List,
  ListItem,
  Right,
  Button,
  Image,
  Icon
} from "native-base";
import QuestionAnswersType from "../../Question/question-answers-type";
export class ProductService extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      currentQuestionData: {},
      currentUpdatedAnswer: {}
    };
    this.getCurrentAnswer = this.getCurrentAnswer.bind(this);
  }
  getCurrentAnswer(answer) {
    debugger;
    var currentQuestionId = this.state.currentQuestionData.Question.Id;
    this.setState({
      currentUpdatedAnswer: { questionId: currentQuestionId, Value: answer }
    });
    console.log({ questionId: currentQuestionId, Value: answer });
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  componentDidMount() {
    console.log(this.props.answers);
  }

  render() {
    return (
      <Container>
        <View style={{ marginTop: 22 }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {}}
          >
            <View style={{ marginTop: 22 }}>
              {this.state.currentQuestionData.Question ? (
                <View>
                  <Text>{this.state.currentQuestionData.Question.Name}</Text>
                  <QuestionAnswersType
                    question={this.state.currentQuestionData.Question}
                    getCurrentAnswer={this.getCurrentAnswer}
                  />
                  <Button
                    rounded
                    style={rcs.cancelButton}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                      this.setState({ currentQuestionData: {} });
                    }}
                  >
                    <Text style={{ color: "#EF9C05" }}>Cancel</Text>
                  </Button>
                  <Button
                    rounded
                    style={rcs.acceptButton}
                    onPress={() => {
                      this.props.updateAnwsers(this.state.currentUpdatedAnswer);
                      this.setModalVisible(!this.state.modalVisible);
                      this.setState({
                        currentUpdatedAnswer: {},
                        currentQuestionData: {}
                      });
                    }}
                  >
                    <Text style={{ color: "#ffffff" }}>edit</Text>
                  </Button>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          </Modal>
        </View>
        <List
          dataArray={this.props.answers}
          renderRow={Item => (
            <ListItem>
              <Text style={{ color: "#666e68" }}>{Item.Question.Metadata}</Text>

              <Text>{Item.Value}</Text>
              {this.props.editingMode === true ? (
                <Button
                  transparent
                  onPress={() => {
                    this.setState({ currentQuestionData: Item });

                    this.setModalVisible(true);
                  }}
                >
                  <Icon
                    type="FontAwesome"
                    name="edit"
                    style={{ color: "#EF9C05" }}
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
