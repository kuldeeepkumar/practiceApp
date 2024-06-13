import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exercise1 from './scr/exercises/Exercise1';

export default function App() {

  //  we have tried loop statement
  age=7;
  //if condition
  if(age>=18)
  {
    console.log("you are eligibale to give vote");
  }
  else{
  console.log("you are child")
  }
  return (
    <>
    <View style={styles.container}>
      <Text>mrr jau ga lekin teri pyri pyri 2 akiya prr dance nhi karu ga!</Text>
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
