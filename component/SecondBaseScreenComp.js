import React from "react";
import {View,StyleSheet,Text, StatusBar} from 'react-native';
import Color from "../constants/Color";

const SecondBaseScreenComp = (props) =>{
    return(

        <View style={{...styles.flexBox2, ...props.flexBox2}} >
          {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    flexBox2:{
        flex: 8,
    }
})

export default SecondBaseScreenComp;
