import React, { Component } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { View, Thumbnail, Text } from "native-base";
import Images from "../../../assets/images";

export class Logo extends Component {
  props: {
    title: "",
    image: any
  };
  render() {
    const { title, image } = this.props;
    return (
      <View logo>
        <View>
          <Thumbnail
            large
            resizeMode="contain"
            circular
            style={styles.image}
            source={image || Images.logo}
          />
        </View>
        <View>
          <Thumbnail
            large
            resizeMode="contain"
            circular
            style={styles.imagelogo}
            source={image || Images.logoImage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    height: Dimensions.get("window").height * 0.25,
    width: Dimensions.get("window").width * 0.35,
    marginBottom: 20
  },
  imagelogo: {
    alignSelf: "center",
    marginBottom: 3,
    width: 252,
    height: 162
  },
  cornerImage: {
    width: 102,
    height: 100
  }
});
