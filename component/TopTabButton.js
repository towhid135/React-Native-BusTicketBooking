import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { Icon } from "@rneui/themed";
import { Responsive } from "../constants/ResponsiveFunc";
import Color from "../constants/Color";

const TopTabButton = props => {
    const {iconType,iconName,iconSize,inactiveColor,activeColor} = props.item;
    /* 
    required props:
    iconType
    iconName
    iconSize
    iconColor
    */
    return (
        <TouchableOpacity 
           style={{...styles.TopTabButtonMainView}}
           activeOpacity = {0.7}
           onPress = {props.buttonPressHandler}
        >
            <Icon 
              type={iconType} 
              name={iconName} 
              size={iconSize} 
              color={props.active[iconName] ? activeColor : inactiveColor} 
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    TopTabButtonMainView:{
        backgroundColor: Color.appBackgroundColor,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width:0,height:2},
        shadowRadius: 8,
        elevation: 5,
        height: Responsive(40),
        width: Responsive(40),
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
})

export default TopTabButton;