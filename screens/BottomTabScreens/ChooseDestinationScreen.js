import React, {useState} from "react";
import {View,StyleSheet,Text, StatusBar, SafeAreaView, TouchableOpacity,Image} from 'react-native';
import Color from "../../constants/Color";
import FontNames from "../../constants/FontNames";
import { Icon } from "@rneui/base/dist/Icon";
import FirstBaseScreenComp from "../../component/FirstBaseScreenComp";
import SecondBaseScreenComp from "../../component/SecondBaseScreenComp";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Responsive } from "../../constants/ResponsiveFunc";
import HeaderComp from "../../component/HeaderComp";
import ImagePath from "../../constants/ImagePath";

const TabButtonData = [
    { iconType: "ionicon",iconName: "bus",iconSize: 25,inactiveColor: Color.black, activeColor: Color.lightGreen},
    { iconType: "material-community",iconName: "car",iconSize: 25,inactiveColor: Color.black, activeColor: Color.lightGreen},
    { iconType: "material-community",iconName: "train",iconSize: 25,inactiveColor: Color.black, activeColor: Color.lightGreen},
    { iconType: "material-community",iconName: "airplane",iconSize: 25,inactiveColor: Color.black, activeColor: Color.lightGreen},
    { iconType: "material-community",iconName: "sail-boat",iconSize: 25,inactiveColor: Color.black, activeColor: Color.lightGreen}
]


const Ticket = props =>{
    return(
        <View style={styles.mainTicketContainer} >
            {/* <View style={styles.ticketFlexBox1} >

            </View>

            <View style={styles.ticketFlexBox2} >
                
            </View> */}
            <View style={{flex:1}} >
            <View style={{
                height: Responsive(30), 
                width: Responsive(30), 
                backgroundColor: Color.ashColor,
                borderRadius: Responsive(15),
                //position: 'absolute',
                marginTop: Responsive(-15),
                alignSelf: 'center',
                left: Responsive(40),
                }} 
            />
            </View>

            <View style={{flex:8}} >

            </View>

            <View style={{flex:1,backgroundColor:Color.appBackgroundColor}} >
            <View style={{
                height: Responsive(30), 
                width: Responsive(30), 
                backgroundColor: Color.ashColor,
                borderRadius: Responsive(15),
                //position: 'absolute',
                alignSelf: 'center',
                left: Responsive(40),
                }} 
            />
            </View>
        </View>
    )
}

const ChooseDestinationScreen = (props) =>{
    const initialState = {
        bus: false,
        car: false,
        train: false,
        airplane: false,
        "sail-boat": false
    }
    const [active,setActive] = useState({...initialState});
    const TopTabButton = props => {
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
               onPress = {() => setActive({...initialState,[props.iconName]: true}) }
               key={props.index}
            >
                <Icon 
                  type={props.iconType} 
                  name={props.iconName} 
                  size={props.iconSize} 
                  color={active[props.iconName] ? props.activeColor : props.inactiveColor} 
                />
            </TouchableOpacity>
        )
    }
    
    return(
        <SafeAreaView style={styles.mainContainer} >
        <StatusBar animated={true} backgroundColor={Color.naviBlue} />
        <FirstBaseScreenComp flexBox1 = {styles.flexBox1} >
            <HeaderComp 
                backIconType = "octicon"
                backIconName = "arrow-left"
                backIconSize = {25}
                backIconColor = {Color.appBackgroundColor}
                leftCityName = "Dhaka"
                rightCityName = "Cumilla"
                middleIconType = "octicon"
                middleIconName = "arrow-switch"
                middleIconSize = {20}
                middleIconColor = {Color.appBackgroundColor}
            />
        </FirstBaseScreenComp>
        <SecondBaseScreenComp flexBox2 = {styles.flexBox2}>
          <View style={styles.topTabView} >
             {
                TabButtonData.map((item,index) => {
                    return(
                        <TopTabButton 
                            iconType= {item.iconType}
                            iconName= {item.iconName}
                            iconSize= {item.iconSize}
                            index = {index}
                            activeColor = {item.activeColor}
                            inactiveColor = {item.inactiveColor}
                        />
                    )
                })
             }
          </View>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false} 
            keyboardShouldPersistTaps="handled" 
            enableAutomaticScroll={true}
            enableOnAndroid={true} 
            keyboardOpeningTime={0}
            contentContainerStyle={{
                backgroundColor: Color.ashColor,
                flex: 1,
                alignItems: 'center'
                }}
          >
            <Ticket />
          </KeyboardAwareScrollView>
        </SecondBaseScreenComp>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
    },
    flexBox1: {
        flex: 1.2
    },
    flexBox2: {
        backgroundColor: Color.naviBlue,
    },
    topTabView:{
        flex: 0.2, 
        backgroundColor: Color.ashColor,
        borderTopLeftRadius: Responsive(30),
        borderTopRightRadius: Responsive(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
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
    mainTicketContainer:{
        backgroundColor: Color.appBackgroundColor,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width:0, height:2},
        shadowRadius: 8,
        elevation: 5,
        height: Responsive(150),
        width: Responsive(300),
        borderRadius: Responsive(5),
        //overflow: 'hidden'
    },
    ticketFlexBox1:{

    },
    ticketFlexBox2:{

    }
})

export default ChooseDestinationScreen;
