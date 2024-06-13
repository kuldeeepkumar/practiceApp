import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exercise1 from './src/exercises/exercise1';

export default function App() {
  let b = "mehaku";
   console.log("my besti name:",b)
let  x=20;
let y=30;
let a=6;
console.log("here is sum:",x+y);
console.log("here is subtraction:",x-y);
console.log("here is multiplication:",x*y);
console.log("here is divison:",x/y);
console.log("here is modules:",x%y);
console.log("greater than:",x>y);
console.log("less than:",x<y);
console.log("equal to:",x==y);
console.log("not equal to:",x!=y);
console.log("here is unary plus:",+a);
console.log("here is unary minus:",-a);
console.log("here is increment:",++a);
console.log("here is:decremant",--a);
let datevar=new Date();
console.log(datevar);
let objectvar={name:"pinky",frnd:"ashu"};
console.log(objectvar);
let arrayvar=[1,2,3,4];
console.log(arrayvar);
let numbervar=234566;
let stringvar="akshu";
let booleanvar=true;
let nullvar=null ;
console.log(numbervar);
console.log(stringvar);
console.log(booleanvar);
console.log(nullvar);
let p=10;
console.log(p+=5);
console.log(p-=5);
console.log(p*=1);
console.log(p/=4);
let k=true;
let l=false;
console.log(k&&l);
console.log(k||l);
console.log(!k);

return (
<>
<View style={styles.container}>
      <Text>jass</Text>
      <Text>pinko</Text>
      <Text>ashuu</Text>
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
