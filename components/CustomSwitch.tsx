import React from 'react';
import {Switch,Text,View} from 'react-native';

import { Colors } from '@/constants/Colors';


interface Iprops{
    labelText : string,
    customStyle : any,
    toggleState : boolean,
    callback : (value : boolean) => void
}


const CustomSwitch = (props:Iprops) => {
    const {labelText,customStyle,toggleState,callback} = props;
    console.log('props',props)
    return (
        <View style={customStyle}>
            <Text>{labelText}</Text>
            <Switch
            trackColor={{false: Colors.light.trackColorFalse, true: Colors.light.trackColorTrue}}
            thumbColor={toggleState ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={callback}
            value={toggleState}
            />
        </View>
            
    );
};

export default CustomSwitch;

