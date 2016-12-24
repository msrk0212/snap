import React from 'react';
import { View, TextInput,TouchableHighlight } from 'react-native';
export class AccessForm extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }
   render()
    {
        return(
           <View>
               <TextInput
                   style={{height: 40, width:200,borderColor: 'gray', borderWidth: 1}}
                   onChangeText={(text) => this.setState({text})}
                   value={this.state.text}
               />
               <TouchableHighlight/>
           </View>
        );
    }
}

