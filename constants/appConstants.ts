export const InputType : Record<string ,string> ={
    USER_NAME : 'User Name',
    SERVER_URL : 'Server URL',
    DEVICE_IDENTIFIER : 'Device Identifier',
    LOCATION_UPDATE : 'Location Update',
    FREQUENCY : 'Frequency',
    DISTANCE : 'Distance',
    ANGLE : 'Angle',
}

export const configTitle = 'Enter your configuration details';

export const AccurayOptions : Array<Record <string,string>>= [
    {label: 'Low', value:'Low'},
    {label: 'Medium', value:'Medium'},
    {label: 'High', value:'High'},
]