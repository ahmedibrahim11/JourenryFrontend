import React, { Component } from "react";
import * as rcs from "./product-service-styles";
import { Modal, TouchableHighlight, View, Alert, Button } from "react-native";
import images from "../../../../../assets/images";
import {
  Container,
  Text,
  List,
  ListItem,
  Right,
  Image,
  Icon,
  Content,
  Col,
  Grid,
  Row
} from "native-base";
import QuestionAnswersType from "../../Question/question-answers-type";
import { ScrollView } from "react-native-gesture-handler";
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
    console.log("SEKSEK", this.props.answers);
    debugger;
  }
  componentWillMount() {
    console.log(this.props.answers);
    debugger;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
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
                    currentAnswer={this.state.currentQuestionData.Value}
                  />
                  <Button
                    rounded
                    title="Cancel"
                    color="#EF9C05"
                    style={rcs.cancelButton}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                      this.setState({ currentQuestionData: {} });
                    }}
                  ></Button>
                  <Button
                    title="edit"
                    color="#ef9c05"
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
                  ></Button>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          </Modal>
        </View>
        
          <List style={{ flex: 1 }}>
            {this.props.answers.map((Item, index) => {
              debugger;

              return (
                <ListItem
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flexWrap:'wrap'
                  }}
                  key={index}
                >
                  {/* {viewData} */}
                  <Text style={{ color: "#666e68" }}>
                    {Item.Question.Metadata}
                  </Text>
                  
                  <Text>{Item.Value}</Text>
                  
                  {this.props.editingMode === true ? (
                    <View style={{ flex: 1, marginLeft: 20 }}>
                      <TouchableHighlight
                        onPress={() => {
                          debugger;
                          this.setState({ currentQuestionData: Item });

                          this.setModalVisible(true);
                        }}
                      >
                        <View>
                          <Icon
                            type="FontAwesome"
                            name="edit"
                            style={{ color: "#EF9C05" }}
                          />
                        </View>
                      </TouchableHighlight>
                    </View>
                  ) : (
                    <Text></Text>
                  )}
                </ListItem>
              );
            })}
          </List>
        </View>
     
    );
  }
}
