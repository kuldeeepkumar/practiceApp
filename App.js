import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const a=8;
  const b=7;
  const c=a+b;
  const d=a-b;
  const e=a*b;
  const f=a/b;
  console.log("the sum is:",c);
  console.log("the difference is:",d);
  console.log("the multiplication is:",e);
  console.log("the division is:",f);
  return (
    <View style={styles.container}>

      <Text>hello guys</Text>
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
