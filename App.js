import React, { Component } from "react";
import { Root, Text } from "native-base";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from 'redux-persist'

import { Application } from "./src/application";
import { Navigator } from "./src/modules/components";
import { PersistGate } from "redux-persist/integration/react";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Application.run();
    this.setState({ isReady: true });
  }
  async componentWillUnmount() {
    debugger;
    await Application.onClose();
  }
  _handleAppStateChange = async (nextAppState) => {
    debugger;
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      debugger;
      await Application.onClose();
    }
    // this.setState({appState: nextAppState});
  }
  render() {
    if (!this.state.isReady || !Application.current) {
      return <AppLoading />;
    }
    return (
      <Provider store={Application.current.store}>
        <PersistGate loading={null} persistor={Application.current.persistor}>
          <Root>
            <Navigator />
            <AppLoading />
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}
