import { createStackNavigator, createAppContainer } from "react-navigation";

import { RegisterScreen, LoginScreen } from "./modules/screens";

import ApplicationScreen from "./modules/screens/application-container";

import ProfileDataCompletingScreen from "./modules/screens/profile-data-completing-screen";
import OthersProfileScreen from  "./modules/screens/others-profile-screen";
import EditProfileScreen from "./modules/screens/edit-profile-screen";
export const navigator = createStackNavigator(
  {
    RegisterScreen: {
      screen: RegisterScreen
    },
    LoginScreen: {
      screen: LoginScreen
    },
    HomeScreen: {
      screen: ApplicationScreen
    },
    ProfileDataCompletingScreen: {
      screen: ProfileDataCompletingScreen
    },
    EditProfileScreen: {
      screen: EditProfileScreen
    },
    OthersProfileScreen:{
      screen:OthersProfileScreen
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
