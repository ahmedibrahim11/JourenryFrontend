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
import { loadConnections,loadMyConnections } from "../../state/connections/action-creator";

import { MyTab } from "../tab-navigator";
import ProfileDataCompletingContainer from "./profile-data-completing-screen";

// export const NavigationContext = React.createContext("navigate");

class ApplicationContainer extends Component {
  props: {
        loadConnections: () => void,
  };
  static mapStatetToProps(state: State) {
    return {
      
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ loadConnections,loadMyConnections }, dispatch);
  }

  render() {
    return (
      <Container>
        {/* <NavigationContext.Provider value={this.props.navigation}> */}
        <MyTab
          onNavigationStateChange={(prevState, newState) => {
            if(newState.index==0)
            this.props.loadConnections();
            else if(newState.index==1)
            this.props.loadMyConnections();
            debugger;
          }}
          screenProps={this.props.navigation}
        />
        {/* </NavigationContext.Provider> */}
      </Container>
    );
  }
}
export default ApplicationScreen = connect(
  ApplicationContainer.mapStatetToProps,
  ApplicationContainer.mapDispatchToProps
)(ApplicationContainer);
