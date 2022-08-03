import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Color from "../../constants/Color";
import ImagePath from "../../constants/ImagePath";
import { Responsive } from "../../constants/ResponsiveFunc";
import { StatusBar } from 'react-native';
import { Icon } from "@rneui/themed";
import FontNames from "../../constants/FontNames";
import Animated,
{
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler
} from 'react-native-reanimated';
import {GestureHandlerRootView, PanGestureHandler} from 'react-native-gesture-handler';

const GetStartedScreen = props =>{
    const translateX = useSharedValue(0);
    const gestureEvent = useAnimatedGestureHandler({
        onStart: (event,context) =>{
             context.translateX = translateX.value;
        },
        onActive: (event,context) => {
            // console.log('context.translationX ', context.translateX);
            translateX.value = event.translationX + context.translateX;
            //else translateX.value = context.translateX;
        }

    })
    const animatedCircle = useAnimatedStyle(() => {
        return {
            transform: [{translateX: translateX.value}]
        }
    })
    return(
    <View style={styles.mainContainer} >
    <StatusBar
        animated={true}
        backgroundColor={Color.appBackgroundColor}
        //showHideTransition={statusBarTransition}
        hidden={false} 

    />
        <View style={styles.flexBox1} >

        <View style={{flexDirection:'row'}} >
        <Text style={styles.titleText1} >Book</Text>
        <Text style={styles.titleText2} >Now</Text>
        </View>
            <Image source={ImagePath.illustration1} style={styles.imageStyle} />
            <Text style={styles.headingText2} >Quick & Easy to Travel anywhere & anytime</Text>
        </View>

        <View style={styles.flexBox2} >
            <View style={styles.slidingButtonView} >
            <PanGestureHandler onGestureEvent={gestureEvent} >
              <Animated.View style={[styles.CircleButton,animatedCircle]} >
                    <Icon type="antdesign" name="doubleright" color={Color.appBackgroundColor} size={Responsive(25)} />
              </Animated.View>
            </PanGestureHandler>
            <Text style={{
                marginLeft:Responsive(20),
                fontFamily: FontNames.MontserratSemiBold,
                }} >Slide to Start</Text>
            </View>
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: Color.appBackgroundColor
    },
    flexBox1:{
        flex:8.5,
        alignItems: 'center',
        backgroundColor: Color.appBackgroundColor,
        marginTop: Responsive(40)
    },
    flexBox2:{
        flex: 1.5,
        alignItems: 'center',
        backgroundColor: Color.naviBlue,
        borderTopRightRadius: Responsive(30),
        justifyContent: 'center'
    },
    imageStyle:{
        height: Responsive(300),
        width:  Responsive(300),
        marginTop: Responsive(20),
        marginBottom: Responsive(20)
    },
    headingText1:{

    },
    headingText2:{
        width: "80%",
        color: Color.naviBlue,
        fontSize: Responsive(35),
        textAlign: 'center',
        fontFamily: FontNames.MontserratSemiBold
    },
    slidingButtonView:{
       width: '60%',
       height: Responsive(50),
       borderRadius: Responsive(40),
       alignItems: 'center',
       backgroundColor: Color.appBackgroundColor,
       flexDirection: 'row'
    },
    titleText1:{
        color: Color.lightGreen,
        fontSize: Responsive(35),
        fontFamily: FontNames.MontserratBold
    },
    titleText2:{
        color: Color.naviBlue,
        fontSize: Responsive(35),
        fontFamily: FontNames.MontserratBold
    },
    CircleButton:{
        borderRadius: Responsive(25),
        height: Responsive(50),
        width: Responsive(50),
        backgroundColor: Color.lightGreen,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default GetStartedScreen;