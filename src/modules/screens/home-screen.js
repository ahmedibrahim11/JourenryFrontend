import React, { Component } from "react";
import { Container } from "native-base";
import images from "../../../assets/images";

import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";
import { State, tryLogin } from "../../state";
import { loadConnections } from "../../state/connections/action-creator";
import HomeComponent from "../components/homecomponent";

class HomeContainer extends Component {
  props: {
    connections: any,
    loadConnections: () => void
  };

  componentWillMount() {
    this.props.loadConnections();
    debugger;
  }
  static mapStatetToProps(state: State) {
    return {
      connections: state.connection.connections
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ loadConnections }, dispatch);
  }

  render() {
    return (
      <Container>
        <HomeComponent
          connections={this.props.connections}
          screenProps={this.props.screenProps}
        />
      </Container>
    );
  }
}
export default HomeScreen = connect(
  HomeContainer.mapStatetToProps,
  HomeContainer.mapDispatchToProps
)(HomeContainer);
