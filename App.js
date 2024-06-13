import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exetcises1 from './src/Exercises/Exetcises1';

export defaulta function App() {
  let a="navi";
  var b="a or aman";
  console.log("my brother name:",a)
  const x=30;
  const y=40;
  const z=10;
  console.log("here is sum:",x+y);
  console.log("here is subtrsction:",x-y);
  console.log("here is multiplication:",x*y);
  console.log("here is divison:",x/y);
  console.log("here is modules:",x%y);
  console.log("here is:",x>y);
  console.log("here is:",x<y);
  console.log("here is:",+z);
  console.log("here is:",-z);
  let datevar=new Date();
  console.log(dataver);
  let objectvar={name="aman",frnd:"nav"};
console.log(objectvar);
let arrayvar=[1,2,3,4]  
  return (
   <> <View style={styles.container}>
   <Text>open up app.js</Text>
   <StatusBar style="auto" />
 </View>Exetcises1
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
