import React, { Component } from 'react';
import { Styles } from '../styles/styles';
import { LoginPage } from './LoginPage';
import {
    Text,
    View,
    Image
} from 'react-native';

export class HomePage extends React.Component{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <View style={Styles.container}>
                <Image source={require('../img/favicon.png')} />
                <View style={Styles.subcontainer}>
                    <LoginPage/>
                </View>
            </View>
        );
    }
}