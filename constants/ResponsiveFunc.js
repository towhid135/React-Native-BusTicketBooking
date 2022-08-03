import {Dimensions} from 'react-native';
const {height,width} = Dimensions.get('window');

export const Responsive = (value) =>{
    return width * (value/width);
}

