import React, { Component } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Text,
  Button,
  Item,
  Input,
  Form,
  Label,
  View,
  Thumbnail
} from "native-base";

import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";
import ConnectionComponent from "../components/Connections/connections-component";

import { loadMyConnections,acceptingConnectionRequest,rejectingConnectionRequest } from "../../state/connections/action-creator";

class ConnectionContainer extends Component {
  props: {
    myConnections: [],
    loadMyConnections: () => void,
    acceptingConnectionRequest: (senderId: Number) => void,
    rejectingConnectionRequest: () => void,
  };

  componentWillMount() {
    debugger;
    this.props.loadConnections;
    debugger;
  }

  static mapStatetToProps(state: State) {
    return {
      myConnections: state.connection.myConnections,
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      {
        loadMyConnections,
        acceptingConnectionRequest,
        rejectingConnectionRequest
      },
      dispatch
    );
  }

  render() {
    return (
      <Container>
        <ConnectionComponent
          myConnections={this.props.myConnections}
          loadMyConnections={this.props.loadMyConnections}
          acceptingConnectionRequest={this.props.acceptingConnectionRequest}
          rejectingConnectionRequest={this.props.rejectingConnectionRequest}
        ></ConnectionComponent>
      </Container>
    );
  }
}
export default ConnectionScreen = connect(
  ConnectionContainer.mapStatetToProps,
  ConnectionContainer.mapDispatchToProps
)(ConnectionContainer);

var styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  }
});
