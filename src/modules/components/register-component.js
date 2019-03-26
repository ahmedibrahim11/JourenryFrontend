import React, { Component } from 'react';
import { LinearGradient } from 'expo';

import { Dimensions, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    View,
    Thumbnail,
    Text,
    Button,
    Spinner,
    Label
} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { UserRegisterModel } from '../../proxy/models';

export class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: '',
            email: ''
        };
    }

    props: {
        isRegistered: boolean,
        loading: boolean,
        errorMessage: string,
        navigation: any,
        tryRegister: UserRegisterModel=> void
    };
    componentWillReceiveProps(nextProps) {
        if (nextProps.isRegistered) {
            nextProps.navigation.navigate('Login');
        }
    }
    render() {
        const loadingSpinner = this.props.loading ? (<Spinner color="blue" />) :
            (
                <Text bold red margin20>
                    {this.props.errorMessage}
                </Text>
            );

        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                    paddingLeft: 30,
                    paddingRight: 30

                }}
            >
                <KeyboardAwareScrollView>
                    <View style={{ flex: 1 }}>

                        <Form>
                            <Item floatingLabel>
                                <Label>Full name </Label>
                                <Input

                                    onChangeText={txt => {
                                        this.setState({ fullName: txt });
                                    }}
                                />
                            </Item>


                            <Item floatingLabel>
                                <Label>Email </Label>
                                <Input
                                    onChangeText={txt => {
                                        this.setState({ email: txt });
                                    }}
                                />
                            </Item>


                            <Item floatingLabel>
                                <Label>Mobile no. </Label>
                                <Input
                                    onChangeText={txt => {
                                        this.setState({ mobile: txt });
                                    }}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Password </Label>
                                <Input
                                    secureTextEntry={true}
                                    onChangeText={txt => {
                                        this.setState({ password: txt });
                                    }}
                                />
                            </Item>
                            <View style={styles.loginContainer}>
                                <TouchableOpacity style={styles.button}
                                    onPress={() => {
                                        this.props.tryRegister(this.state);
                                    }}>
                                    <LinearGradient
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 1 }}
                                        colors={['#09225a', '#164fd4']}
                                        style={{ padding: 15, alignItems: 'center', borderRadius: 25 }}>

                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text
                                                style={{
                                                    flex: 1,
                                                    backgroundColor: 'transparent',
                                                    fontSize: 20,
                                                    color: '#fff'
                                                }}>
                                                Sign Up</Text>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>

                            </View>
                        </Form>
                    </View>

                    {loadingSpinner}

                </KeyboardAwareScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    loginContainer: {
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 },
        paddingTop: 20,
    },
    button: {
        flex: 1,
        borderRadius: 25,
        paddingTop: 5,
        borderRadius: 25,
        shadowRadius: 15,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 2, height: 2 },
                // shadowOffset: { width: 1, height: 13 },
                shadowOpacity: 0.2,
            },
            android: {
                elevation: 6,
            },
        }),
    }
});