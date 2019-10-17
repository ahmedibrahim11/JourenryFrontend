import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Root, Text } from "native-base";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { Application } from "./src/application";
import { Navigator } from "./src/routing";
import { PersistGate } from "redux-persist/integration/react";
import { Notifications } from "expo";
import { NotificationManager } from "./src/services/pushNotification";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Application.run();
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
    Notifications.addListener(notification => {
      NotificationManager.handleNotification(notification);
      debugger;
    });
  }

  // _handleAppStateChange = async nextAppState => {
  //   debugger;
  //   if (
  //     this.state.appState.match(/inactive|background/) &&
  //     nextAppState === "active"
  //   ) {
  //     debugger;
  //     await Application.onClose();
  //   }
  //   // this.setState({appState: nextAppState});
  // };

  async componentWillUnmount() {
    debugger;
    console.log("ummount");
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
