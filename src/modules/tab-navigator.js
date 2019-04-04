import {
  StackNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import HomeSceen from "./components/home";
import { ProfileScreen, SettingScreen } from "../modules/screens";

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeSceen,
    Connections: ProfileScreen,
    MyProfile: ProfileScreen,
    Settings: SettingScreen
  },
  { color: "#60b4c2" }
);

export default (MyTab = createAppContainer(TabNavigator));
