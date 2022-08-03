import React from "react";
import {View,StyleSheet,Text, StatusBar, SafeAreaView} from 'react-native';
import Color from "../../constants/Color";
import FontNames from "../../constants/FontNames";
import { Icon } from "@rneui/base/dist/Icon";
import FirstBaseScreenComp from "../../component/FirstBaseScreenComp";
import SecondBaseScreenComp from "../../component/SecondBaseScreenComp";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Responsive } from "../../constants/ResponsiveFunc";
import HeaderComp from "../../component/HeaderComp";

const TicketScreen = (props) =>{
    const text = [];
    for(i=0; i<50; i++){
        text.push(<Text key={i} >This is a dummy text</Text>)
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
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false} 
            keyboardShouldPersistTaps="handled" 
            enableAutomaticScroll={true}
            enableOnAndroid={true} 
            keyboardOpeningTime={0}
            contentContainerStyle={{
                backgroundColor: Color.ashColor,
                flex: 1,
                borderTopLeftRadius: Responsive(30),
                borderTopRightRadius: Responsive(30)
            }}
          >
             
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

    },
    flexBox2: {
        backgroundColor: Color.naviBlue
    }
})

export default TicketScreen;
