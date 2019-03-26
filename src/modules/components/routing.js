import { StackNavigator, createStackNavigator } from "react-navigation";

import {
    RegisterScreen
} from "../screens";

export const Navigator = createStackNavigator(
    {
        RegisterScreen: {
            screen: RegisterScreen
        }
    },
    {
        initialRouteName: "RegisterScreen",
        headerMode: "none"
    }
);
