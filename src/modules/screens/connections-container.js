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

import { loadConnections } from "../../state/connections/action-creator";

class ConnectionContainer extends Component {
  props: {
    connections: [],
    loadConnections: () => void,
    requestedConnections: [],
    onConnectionsLoaded: () => void,
    onAcceptingConnectionRequest: (senderId: Number) => void,
    onRejectingConnectionRequest: () => void,
    onSendConnectionRequest: () => void
  };

  componentWillMount() {
    debugger;
    this.props.loadConnections;
    debugger;
  }

  static mapStatetToProps(state: State) {
    return {
      connections: state.connections.connections,
      requestedConnections: state.connections.requestedConnections
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      {
        onConnectionsLoaded,
        onAcceptingConnectionRequest,
        onRejectingConnectionRequest,
        onSendConnectionRequest,
        loadConnections
      },
      dispatch
    );
  }

  render() {
    return (
      <Container>
        <ConnectionComponent
          connections={this.props.connections}
          requestedConnections={this.props.requestedConnections}
          onConnectionsLoaded={this.props.onConnectionsLoaded}
          onAcceptingConnectionRequest={this.props.onAcceptingConnectionRequest}
          onRejectingConnectionRequest={this.props.onRejectingConnectionRequest}
          onSendConnectionRequest={this.props.onSendConnectionRequest}
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
