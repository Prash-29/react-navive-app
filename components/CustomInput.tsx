import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

interface Iprops{
  customStyle : any,
  value : string,
  placeholder : string,
  onFieldChange : any,
  isNumeric ?: boolean
}


const TextInputCustom = (props:Iprops) => {
    const {value,placeholder,onFieldChange,customStyle,isNumeric} = props;
    console.log('props',props)
    return (
            <TextInput
              style={customStyle}
              onChangeText={(text:any) =>
                { 
                  const filterValue = isNumeric ? text.replace(/[^0-9]/g, "") : text;
                  props.onFieldChange(filterValue)
                }
                }
              keyboardType={isNumeric ? "numeric" : "default"}
              value={String(value)}
              placeholder={placeholder}
            />
    );
};

export default TextInputCustom;