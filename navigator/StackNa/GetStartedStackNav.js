import {createStackNavigator} from '@react-navigation/stack';
import GetStartedScreen from '../../screens/GetStartedScreens/GetStartedScreen'

const GetStartedStackNav = props =>{
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='GetStartedScreen'
                component={GetStartedScreen}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}

export default GetStartedStackNav