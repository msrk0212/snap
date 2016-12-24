import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'

export  class TextDel extends Component {
    constructor() {
        super()
        this.state = {
            myText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
    }
    }
    deleteText = () => {
        this.setState({myText: ''})
    }
    render() {
        return (
            <View>
                <Text onPress = {this.deleteText}>
                    {this.state.myText}
                </Text>
            </View>
        );
    }
}