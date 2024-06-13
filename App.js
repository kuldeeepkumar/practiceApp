import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let a ="aashi";
  var b ="b or ball";
  const c=a+b;
  console.log("My console is here",);
  const x =23;
  const y =12;
  console.log("sum is here",x+y);
  console.log("subtraction is here",x-y);
  console.log("multiply is here",x*y);
  console.log("divison is here",x/y);
  console.log("module is here",x%y);
  console.log(x==y);
  console.log(x>y);
  console.log(x<y);
  console.log(x>=y);
  console.log(x<=y);
  return (
    <View style={styles.container}>
      <Text>aashi ,raman,nav</Text>
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
