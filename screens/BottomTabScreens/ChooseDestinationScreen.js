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
import TopTabButton from "../../component/TopTabButton";

const TabButtonData = [
    { iconType: "ionicon",iconName: "bus",iconSize: 25,inactiveColor: Color.black, activeColor: Color.lightGreen},
    { iconType: "material-community",iconName: "car",iconSize: 25,inactiveColor: Color.black, activeColor: Color.lightGreen},
    { iconType: "material-community",iconName: "train",iconSize: 25,inactiveColor: Color.black, activeColor: Color.lightGreen},
    { iconType: "material-community",iconName: "airplane",iconSize: 25,inactiveColor: Color.black, activeColor: Color.lightGreen},
    { iconType: "material-community",iconName: "sail-boat",iconSize: 25,inactiveColor: Color.black, activeColor: Color.lightGreen}
]


const Ticket = props =>{
    return(
        <View style={{...styles.mainTicketContainer,...props.mainTicketContainer}} >
            <View style={{flex:1}} >
            <View style={{...styles.circleStyle,...props.circleStyle}} />
            </View>

            <View style={{...styles.ticketMidViewStyle,...props.ticketMidViewStyle}} >
                <View style={{flex:1}} >
                    <Text style={{color:Color.black,fontFamily:FontNames.MontserratBold,fontSize: 14}} >Ansett Pioneer</Text>
                    <View style={{}} >
                        <View style={{flexDirection:'row',alignItems:'center',marginTop: Responsive(20)}}>
                            <View style={{
                                backgroundColor: '#4BCB9E',
                                height:Responsive(25),
                                width:Responsive(25),
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: Responsive(5)
                                }} >
                            <Icon size={12} type="feather" name="send" color={Color.black} />
                            </View>
                            <View style={{paddingLeft: Responsive(10)}} >
                               <Text style={{color:Color.black,fontFamily:FontNames.MontserratSemiBold,fontSize: 12}} >Dhaka</Text>
                               <Text style={{color:Color.black,fontFamily:FontNames.MontserratRegular,fontSize: 8}} >13-Dec-2022</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop: Responsive(20)}} >
                            <View style={{
                                backgroundColor: '#DA7657',
                                height:Responsive(25),
                                width:Responsive(25),
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: Responsive(5)
                                }} >
                            <Icon size={12} type="ionicon" name="location-outline" color={Color.black} />
                            </View>
                            <View style={{paddingLeft: Responsive(10)}} >
                               <Text style={{color:Color.black,fontFamily:FontNames.MontserratSemiBold,fontSize: 12}} >Cumilla</Text>
                               <Text style={{color:Color.black,fontFamily:FontNames.MontserratRegular,fontSize: 8}} >13-Dec-2022</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1,alignItems:'flex-end'}} >
                     <Text style={{color:Color.black,fontFamily:FontNames.MontserratBold,fontSize: 15}} >9:00 AM</Text>
                     <View style={{height: 20,width: 80,backgroundColor:Color.lightGreen,alignItems:'center',justifyContent:'center',borderRadius:3,marginTop:25}} >
                        <Text style={{color:Color.appBackgroundColor,fontFamily:FontNames.MontserratBold,fontSize: 10}} >Buy Ticket</Text>
                     </View>
                     <View style={{flexDirection: 'row',alignItems:'center',marginTop:25}} >
                     <Text style={{color:Color.black,fontFamily:FontNames.MontserratSemiBold,fontSize: 10}} >Price: </Text>
                     <Text style={{color:"red",fontFamily:FontNames.MontserratSemiBold,fontSize: 15}} >$20</Text>
                     </View>
                </View>
            </View>

            <View style={{flex:1}} >
            <View style={{...styles.circleStyle, marginTop: -3,...props.circle2Style}} />
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

    const topTabButtonPressHandler = (btnInfo) =>{
        setActive({...initialState,[btnInfo.iconName]: true})
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
                            key={index}
                            item = {item}
                            buttonPressHandler = {topTabButtonPressHandler.bind(this,{iconName: item.iconName})}
                            active = {active}
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
    circleStyle:{
        height: Responsive(30), 
        width: Responsive(30), 
        backgroundColor: Color.ashColor,
        borderRadius: Responsive(15),
        //position: 'absolute',
        marginTop: Responsive(-15),
        alignSelf: 'center',
        left: Responsive(40),
    },
    ticketMidViewStyle:{
        flex: 8,
        flexDirection: 'row',
        padding: Responsive(10)
    }
})

export default ChooseDestinationScreen;
