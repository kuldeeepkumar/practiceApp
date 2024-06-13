import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exercise1 from './src/exercises/Exercise1';

export default function App() {
  let b = "manisha";
   console.log("my name is manisha:",b)
   let x=34;
   let y=12;
   let z=56;
   console.log("here is sum:",x+y);
   console.log("here is subtraction:",z-y);
   console.log("here is modules:",x%z);
   console.log("here is multi:",x*z);
  return (
<>
<View style={styles.container}>
      <Text>manisha raju!</Text>
      <StatusBar style="auto" />
    </View>
    <Exercise1/>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
