import React, {Component} from 'react';
import {view, text } from 'react-native';

 export default class Mycomponent extends Component
{
    constructor(props){
        console.log(props.text);
        super(props);
    }
    render(){
        return(
            <view>
                <Text>
                    {this.props.text}
                </Text>
            </view>
        );
    }

}