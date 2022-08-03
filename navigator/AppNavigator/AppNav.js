import {NavigationContainer} from '@react-navigation/native';
import GetStartedStackNav from '../StackNa/GetStartedStackNav';
import ChooseDestinationScreen from '../../screens/BottomTabScreens/ChooseDestinationScreen';
import { StatusBar } from 'react-native';
import Color from '../../constants/Color';
import BottomTabNav from '../BottomTabNav/BottomTabNav';

const AppNav = props =>{
    return(
        <NavigationContainer>
              {/* <GetStartedStackNav /> */}
              {/* <ChooseDestinationScreen /> */}
              <BottomTabNav />
        </NavigationContainer>
    )
}

export default AppNav;