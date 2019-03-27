// @Flow
import { Alert } from "react-native";

import { Permissions, Notifications } from "expo";
import NavigatorService from "./navigator";
import { loadRequests } from "../state";
import { Application } from "../application";
type PushData = {
  code: string,
  nav?: string,
  id?: number,
  title?: string,
  body?: string
};

type PushMessage = {
  to: string,
  data?: PushData,
  title?: string,
  body?: string,
  origin: string
};
const VEN_NEW_REQ = "VEN_NEW_REQ";
const CUS_NEW_BID = "CUS_NEW_BID";
const VEN_BID_ACC = "VEN_BID_ACC";
export class NotificationManager {
  static async registerForPushNotifications() {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== "granted") {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== "granted") {
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    return token;
  }

  static handleNotification(notification: PushMessage) {
    if (notification.origin === "received") {
      Alert.alert(notification.data.title, notification.data.body, [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => handleRouting(notification) }
      ]);
    } else {
      handleRouting(notification);
    }
  }
}
function handleRouting(notification) {
  var currentRoutObj = NavigatorService.getCurrentRoute();
  switch (notification.data.code) {
    case VEN_NEW_REQ: {
      if (currentRoutObj.routeName !== "RequestScreen")
        NavigatorService.navigate("RequestScreen");
      else Application.current.store.dispatch(loadRequests());
      break;
    }
    case VEN_BID_ACC: {
      NavigatorService.navigate("OrderDetails", {
        id: notification.data.id
      });
      break;
    }
    default:
  }
}
