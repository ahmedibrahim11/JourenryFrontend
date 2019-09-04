import { createStackNavigator, createAppContainer } from "react-navigation";

import { RegisterScreen, LoginScreen } from "./modules/screens";

import ApplicationContainer from "./modules/screens/application-container";

import ProfileDataCompletingScreen from "./modules/screens/profile-data-completing-screen";

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
    },
    ProfileDataCompletingScreen: {
      screen: ProfileDataCompletingScreen
    }
  },

  {
    initialRouteName: "LoginScreen",
    headerMode: "none"
  }
);

export const Navigator = createAppContainer(navigator);

// const TabNavigator = createBottomTabNavigator({
//   Profile: ProfileScreen,
//   Setting: SettingScreen
// });
// export default createAppContainer(TabNavigator);
