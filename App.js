import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const a=10;
  const b=5;
  const c=a+b;
  const d=a-b;
  const e=a*b;
  const f=a/b;
  const g=a%b;

  console.log("value:",c);
  console.log("value:",d);
  console.log("value:",e);
  console.log("value:",f);
  console.log("value:",g);
  return (
    <View style={styles.container}>
      <Text>ki hall chal hai dosto!</Text>
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
