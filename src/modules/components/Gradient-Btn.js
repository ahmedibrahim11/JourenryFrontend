import React, { Component } from "react";
import { LinearGradient } from "expo";

import { StyleSheet, Platform, TouchableOpacity } from "react-native";
import { View, Text } from "native-base";
import Images from "../../../assets/images";

export class GradientBtn extends Component {
  props: {
    text: "",
    action: any
  };
  render() {
    const { text, action } = this.props;
    return (
      <TouchableOpacity style={styles.touchButton} onPress={action}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          colors={["#09225a", "#164fd4"]}
          style={styles.gradientBtn}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                flex: 1,
                backgroundColor: "transparent",
                fontSize: 20,
                color: "#fff"
              }}
            >
              {text}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchButton: {
    flex: 1,
    borderRadius: 25,
    paddingTop: 5,
    shadowRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        // shadowOffset: { width: 1, height: 13 },
        shadowOpacity: 0.2
      },
      android: {
        elevation: 6
      }
    })
  },
  gradientBtn: {
    padding: 15,
    alignItems: "center",
    borderRadius: 25
  }
});
