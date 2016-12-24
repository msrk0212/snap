import React from 'react';
import { Styles } from '../styles/styles';
import { LoginView } from '../presentationalViews/LoginView';
import {
    View,
    TextInput,
    TouchableHighlight,
    Text,
    Image
} from 'react-native';

export class LoginPage extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
        email:'',
        password:''
        }
        this.userInfo = {
            email:'',
            password:''
        }
    }

    updatedEmail = (text) => (
        this.userInfo.email = text
    )
    updatedPassword = (text) => (
        this.userInfo.password = text
    )
    handleLogin = (email,password) => (
        alert('Email' + email +' Password ' + password),
         this.userInfo = {
             email:'',
             password:''
         },
        this.setState({email:this.userInfo.email,password:this.userInfo.password})

    )
    render()
    {
        return(
           <View>
               <TextInput style={Styles.bigText}
                          placeholder='Email'
                          onChangeText={this.updatedEmail}
               />
               <View style={Styles.space10}/>
               <TextInput style={Styles.bigText}
                          placeholder='Password'
                          onChangeText={this.updatedPassword}
               />
               <View style={Styles.space10}/>
               <TouchableHighlight style={Styles.bigButton}
                                   onPress={ () => this.handleLogin(this.userInfo.email,this.userInfo.password)}>
                   <Text style={Styles.text}>
                       Submit
                   </Text>
               </TouchableHighlight>
           </View>
        );
    }
}