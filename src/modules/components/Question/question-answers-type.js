import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";

// import { AnswersDto } from "../../../proxy";
import {
  Container,
  Content,
  Textarea,
  Form,
  ListItem,
  CheckBox,
  Text,
  Picker,
  Body,
  Icon,
  List
} from "native-base";
import * as _ from "lodash";
export default class QuestionAnswersType extends Component {
  constructor() {
    super();
    this.state = {
      selectedYes: false,
      selectedNo: false,
      selectedOption: undefined
    };
  }
  props: {
    question: any,
    getCurrentAnswer: () => void
  };

  onValueChange(value) {
    this.setState({
      selectedOption: value
    });
    this.props.getCurrentAnswer(value);
  }
  componentWillMount() {
    console.log("currentAnswer", this.props.currentAnswer);
  }
  render() {
    const dropDownChoices = [
      {
        questionId: 5,
        values: ["Service", "Product"]
      },
      {
        questionId: 6,
        values: [
          "Tech Enabled",
          "Ecommerce",
          "Marketplace",
          "Community",
          "Event"
        ]
      }
    ];
    switch (this.props.question.QuestionType) {
      case 0: {
        return (
          <Form>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              // selectedValue={this.state.selected}
              // onValueChange={this.onValueChange.bind(this)}
            ></Picker>
          </Form>
        );
      }
      case 1: {
        let options = dropDownChoices.filter(
          s => s.questionId == this.props.question.Id
        );
        console.log("Optionsssssssssdfsdfdsfsdfsdfsdfsdfsd", options[0].values);
        return (
          <Form>
            <Picker
              style={{ alignSelf: "center" }}
              mode="dropdown"
              placeholder="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your Answer"
              textStyle={{ color: "#ef9c05" }}
              itemStyle={{
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: "#ef9c05" }}
              style={{ width: undefined }}
              selectedValue={this.state.selectedOption}
              onValueChange={this.onValueChange.bind(this)}
            >
              {options[0].values.map((item, index) => {
                return <Picker.Item label={item} key={index} value={item} />;
              })}
            </Picker>
          </Form>
        );
      }
      case 2: {
        const oldValue = this.props.currentAnswer
          ? this.props.currentAnswer
          : "";
        return (
          <Textarea
            defaultValue={oldValue}
            style={{
              width: 300,
              borderColor: "black",
              alignSelf: "center",
              marginTop: 20
            }}
            rowSpan={7}
            bordered
            placeholder="Your Answer"
            onChangeText={txt => {
              var answer = txt;
              this.props.getCurrentAnswer(answer);
            }}
          />
        );
      }

      case 3: {
        return (
          <List>
            <ListItem style={{ marginTop: 20 }}>
              <CheckBox
                style={{ borderRadius: -3 }}
                color="#ef9c05"
                checked={this.state.selectedYes}
                onPress={() => {
                  this.setState({ selectedYes: true, selectedNo: false });
                  this.props.getCurrentAnswer("Yes");
                }}
              />
              <Text>Yes</Text>
            </ListItem>
            <ListItem>
              <CheckBox
                style={{ borderRadius: -3 }}
                color="#ef9c05"
                checked={this.state.selectedNo}
                onPress={() => {
                  this.setState({ selectedNo: true, selectedYes: false });
                  this.props.getCurrentAnswer("No");
                }}
              />
              <Text>No</Text>
            </ListItem>
          </List>
        );
      }

      case 3: {
        return <Container />;
      }
      default:
        return <Container />;
    }
  }
}

// export default QuestionAnswersType = ({ question, getCurrentAnswer }) => {
//   switch (question.QuestionType) {
//     case 0: {
//       return (
//         <Container>
//           <Content>
//             <Form>
//               <Picker
//                 note
//                 mode="dropdown"
//                 style={{ width: 120 }}
//                 selectedValue={this.state.selected}
//                 onValueChange={this.onValueChange.bind(this)}
//               >
//                 <Picker.Item label="Wallet" value="key0" />
//                 <Picker.Item label="ATM Card" value="key1" />
//                 <Picker.Item label="Debit Card" value="key2" />
//                 <Picker.Item label="Credit Card" value="key3" />
//                 <Picker.Item label="Net Banking" value="key4" />
//               </Picker>
//             </Form>
//           </Content>
//         </Container>
//       );
//     }
//     case 1: {
//       return (
//         <Container>
//           <Content>
//             <Form>
//               <Picker
//                 note
//                 mode="dropdown"
//                 style={{ width: 120 }}
//                 // selectedValue={this.state.selected}
//                 // onValueChange={this.onValueChange.bind(this)}
//               >
//                 <Picker.Item label="Wallet" value="key0" />
//                 <Picker.Item label="ATM Card" value="key1" />
//                 <Picker.Item label="Debit Card" value="key2" />
//                 <Picker.Item label="Credit Card" value="key3" />
//                 <Picker.Item label="Net Banking" value="key4" />
//               </Picker>
//             </Form>
//           </Content>
//         </Container>
//       );
//     }
//     case 2: {
//       return (
//         <Container>
//           <Content padder>
//             <Textarea
//               style={{ width: 200 }}
//               rowSpan={5}
//               bordered
//               placeholder="Textarea"
//               onChangeText={txt => {
//                 var answer = txt;
//                 getCurrentAnswer(answer);
//               }}
//             />
//           </Content>
//         </Container>
//       );
//     }

//     case 3: {
//       return (
//         <Content>
//           <ListItem>
//             <CheckBox
//               checked={selectedYes}
//               onPress={() => {
//                 getCurrentAnswer("Yes");
//               }}
//             />
//             <Text>Yes</Text>
//           </ListItem>
//           <ListItem>
//             <CheckBox
//               checked={selectedNo}
//               onPress={() => {
//                 getCurrentAnswer("No");
//               }}
//             />
//             <Text>No</Text>
//           </ListItem>
//         </Content>
//       );
//     }

//     case 3: {
//       return <Container />;
//     }
//     default:
//       return <Container />;
//   }
// };
