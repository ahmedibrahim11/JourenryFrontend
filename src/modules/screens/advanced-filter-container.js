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

import { Dispatch, bindActionCreators } from "redux";
import AdvancedFilterComponent from "../components/AdvancedFilter/advanced-filter-component";
class AdvancedFilterContainer extends Component {
  static mapStatetToProps(state: State) {
    return {};
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({}, dispatch);
  }

  render() {
    return (
      <Container>
        <AdvancedFilterComponent></AdvancedFilterComponent>
      </Container>
    );
  }
}
export default AdvancedFilterScreen = connect(
  AdvancedFilterContainer.mapStatetToProps,
  AdvancedFilterContainer.mapDispatchToProps
)(AdvancedFilterContainer);
