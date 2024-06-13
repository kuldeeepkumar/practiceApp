import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exercise1 from './scr/exercises/Exercise1';

export default function App() {

  //  we have tried comparision operater
let a = 10;
let b=5;
//equal to
  console.log("value:",a==b); 
  // not equalto
  console.log("value:",a!=b);
  //greater then equl to
  console.log("value:",a>b);
  //less then 
  console.log("value:",a<b);
  //less then equal to
  console.log("value:",a<=b);
  return (
    <>
    <View style={styles.container}>
      <Text>ki hall chal hai dosto!</Text>
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
