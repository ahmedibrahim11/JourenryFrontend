import React, { Component } from "react";
import * as rcs from "./product-service-styles";
import {
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Alert,
  Button
} from "react-native";
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
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      marginTop: 5
                    }}
                  >
                    <View>
                      <TouchableOpacity
                        style={{
                          borderRadius: 25,
                          borderWidth: 0.8,
                          backgroundColor: "#ef9c05",
                          width: 100,
                          height: 30,
                          borderStyle: "solid",
                          borderColor: "#ef9c05"
                        }}
                        onPress={() => {
                          this.props.updateAnwsers(
                            this.state.currentUpdatedAnswer
                          );
                          this.setModalVisible(!this.state.modalVisible);
                          this.setState({
                            currentUpdatedAnswer: {},
                            currentQuestionData: {}
                          });
                        }}
                      >
                        <Text style={{ color: "#FFFFFF", alignSelf: "center" }}>
                          Edit
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity
                        style={{
                          width: 100,
                          height: 30,
                          borderRadius: 10,
                          borderStyle: "solid",
                          borderColor: "#ef9c05"
                        }}
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                          this.setState({ currentQuestionData: {} });
                        }}
                      >
                        <Text style={{ color: "#ef9c05", alignSelf: "center" }}>
                          Cancel
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
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
                  flexWrap: "wrap"
                }}
                key={index}
              >
                {/* {viewData} */}
                <View>
                  <Grid>
                    <Row>
                      <Text style={{ color: "#9BC4DA" }}>
                        {Item.Question.Metadata}
                      </Text>
                    </Row>
                    <Row>
                      <Text>{Item.Value}</Text>
                    </Row>
                  </Grid>
                </View>
                {this.props.editingMode === true ? (
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
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
