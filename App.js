import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  let b = "mehaku";
  let c = "priyanka";

  console.log("my console is Here:",b,c)
const  x=10;
const y=20;
sum=x+y;
console.log("here is sum:",x+y);
console.log("here is subtraction:",x-y);
console.log("here is multiplication:",x*y);
console.log("here is divison:",x/y);
console.log("here is modules:",x%y);
console.log("here is:",x>y);
console.log("here is:",x<y);


  return (
    <View style={styles.container}>
      <Text>pinky Bhatia</Text>
      <Text>akshu</Text>
      <StatusBar style="auto" />
    </View>
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
