import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground } from "react-native";
import { Container, Content, Text, List, ListItem, View } from "native-base";
const routes = ["Home", "Chat", "Profile"];
import Images from "../../../assets/images";
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            square
            style={{ height: 80, width: 70 }}
            source={Images.logo}
          />

          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <View>
                    <Text>{data}</Text>
                  </View>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
