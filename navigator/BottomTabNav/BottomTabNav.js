import React,{useEffect} from "react";
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChooseDestinationScreen from "../../screens/BottomTabScreens/ChooseDestinationScreen";
import ImagePath from "../../constants/ImagePath";
import Color from "../../constants/Color";
import { Responsive } from "../../constants/ResponsiveFunc";
import { Icon } from "@rneui/themed/dist/Icon";
import FontNames from "../../constants/FontNames";
import TicketScreen from "./TicketScreen";


const TabElement = [
    { 
        name: 'Explore', 
        label: 'Explore', 
        component: ChooseDestinationScreen, 
        iconName: "compass-outline",
        iconType: "material-community",
        iconSize: 25, 
        iconColor: Color.appBackgroundColor,
        notFocusedColor: 'gray' 
   },
   { 
    name: 'Ticket', 
    label: 'Ticket', 
    component: TicketScreen, 
    iconName: "ticket-outline",
    iconType: "material-community",
    iconSize: 25, 
    iconColor: Color.appBackgroundColor,
    notFocusedColor: 'gray' 
  }
]

const TabButtonComp = props =>{
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;

    return (
        <TouchableOpacity 
        activeOpacity={1} 
        style={focused ? styles.focusedButtonMainView : styles.notFocusedButtonMainView} 
        onPress={onPress}
        >
        <Icon 
        type={props.item.iconType}
        name={props.item.iconName} 
        color={focused ? props.item.iconColor : props.item.notFocusedColor} 
        size={props.item.iconSize} 
        />
        {focused && <Text style={styles.ButtonTextStyle} >{props.item.label}</Text>}
        </TouchableOpacity>
    )
    
}

const BottomTabNav = props =>{
    const Tab = createBottomTabNavigator();
    return(
       <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBarStyle
        }}
       >
        {
            TabElement.map((item,index) => {
                return(
                <Tab.Screen
                 key={index}
                 name={item.name}
                 component={item.component}
                 options = {{
                    tabBarShowLabel: false,
                    tabBarButton: (props) => <TabButtonComp  {...props} item={item} />
                 }}
                 />
                )
            })
        }
       </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBarStyle:{
        flexDirection: 'row',
        height: Responsive(60),
        position: 'absolute',
        bottom: Responsive(16),
        right: Responsive(16),
        left: Responsive(16),
        borderRadius: Responsive(15),
        borderTopColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width:0,height:2},
        shadowRadius: 8,
        backgroundColor: 'white',
        elevation: 5,
    },
    focusedButtonMainView:{
        height: Responsive(40),
        width: "30%",
        backgroundColor: Color.lightGreen,
        borderRadius:Responsive(25),
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginLeft: Responsive(70)

    },
    ButtonTextStyle:{
        fontSize: 14,
        fontFamily: FontNames.MontserratBold,
        color: Color.appBackgroundColor
    },
    notFocusedButtonMainView:{
        marginLeft: Responsive(70),
        justifyContent: 'center',
    }

})

export default BottomTabNav;