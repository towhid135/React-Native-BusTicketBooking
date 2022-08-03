import React from "react";
import {View,StyleSheet,Text, StatusBar} from 'react-native';
import Color from "../constants/Color";
import FontNames from "../constants/FontNames";
import { Icon } from "@rneui/base/dist/Icon";

const FirstBaseScreenComp = (props) =>{
    return(
       
        <View style={{...styles.flexBox1,...props.flexBox1}} >
          {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    flexBox1:{
        flex: 2,
        backgroundColor: Color.naviBlue
    }
})

export default FirstBaseScreenComp;
