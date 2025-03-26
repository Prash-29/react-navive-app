import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Switch,
  View
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  InputType,
  configTitle,
  AccurayOptions,
} from "../../constants/appConstants";
import TextInputCustom from "../../components/CustomInput";
import * as configActions from "../redux/configSlice";
import { Colors } from "@/constants/Colors";
import CustomSwitch from "@/components/CustomSwitch";
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from 'react-native-dropdown-picker';

const inputFieldsArray = Object.keys(InputType);
const {
  updateAngle,
  updateFrequency,
  updateLocationAccuracy,
  updateOfflineBuffering,
  updateServerUrl,
  updateServiceStatus,
  updateUserName,
  updatedistance,
} = configActions;

export default function ConfigScreen() {

  const [open, setOpen] = React.useState(false);
  const {
    userName,
    serviceStatus,
    deviceIdentifier,
    serverUrl,
    locationAccuracy,
    frequency,
    distance,
    angle,
    offlineBuffering,
  } = useSelector((state: any) => state.configDetails);

  const field_Reducer_Map: Record<
    string,
    [string, (value: any) => any, boolean]
  > = {
    USER_NAME: [userName, updateUserName, false],
    SERVER_URL: [serverUrl, updateServerUrl, false],
    DEVICE_IDENTIFIER: [deviceIdentifier, updateLocationAccuracy, true],
    FREQUENCY: [frequency, updateFrequency, true],
    DISTANCE: [distance, updatedistance, true],
    ANGLE: [angle, updateAngle, true],
  };

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect is working fine");
  }, []);

  const handleServiceStatus = (value: boolean) => {
    dispatch(updateServiceStatus(value));
  };

  const handleBufferingStatus = (value: boolean) => {
    dispatch(updateOfflineBuffering(value));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.headerText}>{configTitle}</Text>

          <CustomSwitch
            labelText="Service Status"
            customStyle={styles.toggle}
            toggleState={serviceStatus}
            callback={handleServiceStatus}
          />

              {inputFieldsArray.map((inputField, key) => {
                const reducer = field_Reducer_Map[inputField];
                console.log(inputField, "reducer", reducer);
                if (!reducer) return null;
                return (
                  <TextInputCustom
                    key={key}
                    customStyle={styles.input}
                    value={reducer[0]}
                    placeholder={InputType[inputField]}
                    onFieldChange={(params: any) => dispatch(reducer[1](params))}
                    isNumeric={reducer[2]}
                  />
                );
              })}

              <CustomSwitch
                labelText="Offline Buffering"
                customStyle={styles.toggle}
                toggleState={offlineBuffering}
                callback={handleBufferingStatus}
              />
          
              <DropDownPicker
                  style={styles.picker}
                  open={open}
                  value={locationAccuracy}
                  items={AccurayOptions}
                  setValue={(callback) => {
                    const newValue = callback(locationAccuracy); 
                    dispatch(updateLocationAccuracy(newValue)); 
                  }}                  
                  placeholder="Select Accuarcy"
                  containerStyle={{ height: 40 }}
                  dropDownDirection="BOTTOM"
                  setOpen={setOpen}
                
              />

              
          
         
        </SafeAreaView>
      </SafeAreaProvider>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 5,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  toggle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingLeft: 12,
  },
  picker:{
    marginLeft:10,
    borderWidth: 1,
    width: 200,
    marginTop: 10,
  }
});
