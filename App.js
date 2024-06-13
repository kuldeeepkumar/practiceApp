import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exercise1 from './scr/exercises/Exercise1';

export default function App() {

  //  we have tried uniary operat
let a = 10;
  let c= a--;
  let d=a++;
  console.log("value:",c);
  console.log("value:",d);
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
