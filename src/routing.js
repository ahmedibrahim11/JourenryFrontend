import { createStackNavigator, createAppContainer } from "react-navigation";

import { RegisterScreen, LoginScreen } from "./modules/screens";

import ApplicationContainer from "./modules/screens/application-container";

export const navigator = createStackNavigator(
  {
    RegisterScreen: {
      screen: RegisterScreen
    },
    LoginScreen: {
      screen: LoginScreen
    },
    HomeScreen: {
      screen: ApplicationContainer
    }
  },

  {
    initialRouteName: "HomeScreen",
    headerMode: "none"
  }
);

export const Navigator = createAppContainer(navigator);

// const TabNavigator = createBottomTabNavigator({
//   Profile: ProfileScreen,
//   Setting: SettingScreen
// });
// export default createAppContainer(TabNavigator);
