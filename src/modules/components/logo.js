import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import {
    View,
    Thumbnail,
    Text
} from 'native-base';
import Images from '../../../assets/images';

export class Logo extends Component {
    props: {
        title: '',
        image: any
    }
    render() {
        const { title, image } = this.props
        return (
            <View logo>
                <Thumbnail
                    large
                    resizeMode="contain"
                    circular
                    style={styles.image}
                    source={image || Images.logo}
                />
                {/* <Text bold primarycolor font30>{title || 'LOGIN'}</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        height: Dimensions.get('window').height * 0.25,
        width: Dimensions.get('window').width * 0.45,
        marginBottom: 10
    }
});