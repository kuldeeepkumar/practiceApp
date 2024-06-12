import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  let b = "mehaku";
   console.log("my besti name:",b)
const  x=20;
const y=30;
const a=6;
console.log("here is sum:",x+y);
console.log("here is subtraction:",x-y);
console.log("here is multiplication:",x*y);
console.log("here is divison:",x/y);
console.log("here is modules:",x%y);
console.log("here is:",x>y);
console.log("here is:",x<y);
console.log("here is:",+a);
console.log("here is:",-a);
let datevar=new Date();
console.log(datevar);
let objectvar={name:"pinky",frnd:"ashu"};
console.log(objectvar);
let arrayvar=[1,2,3,4];
console.log(arrayvar);


return (
    <View style={styles.container}>
      <Text>aman</Text>
      <Text>nav</Text>
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
