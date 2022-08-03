import React from "react";
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from "@rneui/base/dist/Icon";
import FontNames from "../constants/FontNames";
import Color from "../constants/Color";
import { Responsive } from "../constants/ResponsiveFunc";

const HeaderComp = props =>{
    /* 
    required props ->
    backIconType
    backIconName
    backIconSize
    backIconColor
    leftCityName
    rightCityName
    middleIconType
    middleIconName
    middleIconSize
    middleIconColor
    navigation function to go back
    */
    return(
        <View style={{...styles.headerMainContainer,...props.headerMainContainer}} >
           <TouchableOpacity 
           style={{...styles.backIconView,...props.backIconView}} 
           activeOpacity = {0.4}
           onPress = {() => {console.log('Back button pressed')}}
           >
              <Icon 
              type={props.backIconType} 
              name={props.backIconName} 
              size={props.backIconSize} 
              color={props.backIconColor} 
              />
           </TouchableOpacity>

           <View style={{...styles.cityNameContainer,...props.cityNameContainer}} >
             <Text style={{...styles.cityNameTextStyle,...props.cityNameTextStyle}} >{props.leftCityName}</Text>
             <Icon type={props.middleIconType} name={props.middleIconName} size={props.middleIconSize} color={props.middleIconColor} />
             <Text style={{...styles.cityNameTextStyle,...props.cityNameTextStyle}} >{props.rightCityName}</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerMainContainer:{
        flexDirection: 'row',
        //alignItems: 'center'
        marginTop: Responsive(30)
    },
    backIconView:{
        flex: 0.5,
        // borderWidth: 1,
        // borderColor: 'red',
        alignItems: 'flex-start',
        paddingLeft: Responsive(20),
        justifyContent: 'center'
    },
    cityNameContainer:{
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        // borderWidth: 1,
        // borderColor: 'green',
        alignItems: 'center'
    },
    cityNameTextStyle:{
        fontFamily: FontNames.MontserratBold,
        fontSize: 18,
        //fontWeight: 'bold',
        color: 'white'
    },
})

export default HeaderComp;