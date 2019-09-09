import React, { Component } from "react";
import { Container, Thumbnail, View } from "native-base";
import images from "../../../assets/images";

import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";
import { State, tryLogin } from "../../state";
import { AnswersDto } from "../../proxy";
import {
  getQuestions,
  postAnswers
} from "../../state/profiledatacompleting/action-creator";
import ProfileDataCompletingComponent from "../components/ProfileDataCompleting/profile-data-completing";

class ProfileDataCompletingContainer extends Component {
  props: {
    questions: any,
    getQuestions: () => any,
    postAnswers: (answers: AnswersDto) => void
  };

  componentWillMount() {
    debugger;
    this.props.getQuestions();
    console.log("questionsssss", this.props.questions);
  }
  static mapStatetToProps(state: State) {
    return {
      questions: state.profileDataCompleting.questions
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ getQuestions, postAnswers }, dispatch);
  }

  render() {
    return (
      <Container>
        <ProfileDataCompletingComponent
          questions={this.props.questions}
          saveAnswer={this.props.postAnswers}
          navigation={this.props.navigation}
        />
      </Container>
    );
  }
}
export default ProfileDataCompletingScreen = connect(
  ProfileDataCompletingContainer.mapStatetToProps,
  ProfileDataCompletingContainer.mapDispatchToProps
)(ProfileDataCompletingContainer);
