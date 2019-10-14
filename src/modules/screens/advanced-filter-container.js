import React, { Component } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem
} from "native-base";

import { connect } from "react-redux";
import { filterConnections } from "../../state"
import { Dispatch, bindActionCreators } from "redux";
import AdvancedFilterComponent from "../components/AdvancedFilter/advanced-filter-component";
class AdvancedFilterContainer extends Component {
  static mapStatetToProps(state: State) {
    return {
      advancedFilter:state.connection.advancedFilter
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({filterConnections}, dispatch);
  }

  render() {
    return (
      <Container>
        <AdvancedFilterComponent navigation={this.props.navigation} filterConnections={this.props.filterConnections} advancedFilter={this.props.advancedFilter} ></AdvancedFilterComponent>
      </Container>
    );
  }
}
export default AdvancedFilterScreen = connect(
  AdvancedFilterContainer.mapStatetToProps,
  AdvancedFilterContainer.mapDispatchToProps
)(AdvancedFilterContainer);
