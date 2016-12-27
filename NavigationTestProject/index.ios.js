import React,{ Component } from 'react';
import {
    View,
    TextInput,
    TouchableHighlight,
    Text,
    Image,
    NavigatorIOS,
    StyleSheet,
    AppRegistry

} from 'react-native';

import { LoginView } from './LoginView'


export class ReactProject extends Component{
    render()
    {
        return (
            <NavigatorIOS
                style={styles.navigationContainer}
                initialRoute={{
                title: "Navigator Example",
                component: LoginView,
            }} />
        );
    }
}



var styles = StyleSheet.create({
    navigationContainer: {
        flex: 1
    }
});

AppRegistry.registerComponent("NavigationTestProject", () => ReactProject);