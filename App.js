import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let a ="aman";
  var b ="b or boy";
  const c ="c for cat";
  console.log("My console is here",);
  const t =true;
  const d =false;
  console.log("sum is here",t==d)
  return (

    <View style={styles.container}>
      <Text>aashi raman navdeep!</Text>
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





console 