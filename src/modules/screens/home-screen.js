import React, { Component } from "react";
import { Container } from "native-base";
import images from "../../../assets/images";

import { connect } from "react-redux";

import { Dispatch, bindActionCreators } from "redux";
import { State } from "../../state";
import {
  loadConnections,
  removeFilter
} from "../../state/connections/action-creator";
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
      connections: state.connection.connections,
      advancedFilter: state.connection.advancedFilter,
      applyFilter: state.connection.applyFilter
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ loadConnections, removeFilter }, dispatch);
  }

  render() {
    return (
      <Container>
        <HomeComponent
          connections={this.props.connections}
          screenProps={this.props.screenProps}
          advancedFilter={this.props.advancedFilter}
          navigation={this.props.navigation}
          applyFilter={this.props.applyFilter}
          removeFilter={this.props.removeFilter}
        />
      </Container>
    );
  }
}
export default HomeScreen = connect(
  HomeContainer.mapStatetToProps,
  HomeContainer.mapDispatchToProps
)(HomeContainer);
