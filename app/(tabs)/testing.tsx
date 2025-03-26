import { Image, StyleSheet, Platform, Button,Text,SafeAreaView} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useSelector , useDispatch} from 'react-redux';
import { increment,decrement } from '../redux/counterSlice';
import { setName } from '../redux/nameSlice';



interface Props {
    name: string;
}

const NameCounter = (props : Props ) =>{

    const count = useSelector((state : any) => state.counter.value);
    const name = useSelector((state : any) => state.namer.name);
    const dispatch = useDispatch()


    return (
        <>
           <Text>Name</Text>
           {/* <input type="text" defaultValue={props.name} placeholder='Name' /> */}
           <Text style={{ fontSize: 24 }}>Counter: {count}</Text>
           {/* <div style={{width : "10px" , display:"flex"}}> */}
            <Button title="Increment" onPress={() => dispatch(increment())} />
            <Button title="Decrement" onPress={() => dispatch(decrement())} />
            {/* </div> */}
        </>
    )
}



export default function TestingScreen() {
    return (
        <SafeAreaView>
        {/* <h1>Testing branch</h1> */}
        <NameCounter name='Prashanth' />
        </SafeAreaView>
    );
  }
  