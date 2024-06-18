import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Exercise3 = () => {
    let fruits = ["apple", "mango", "oranges"];
    const numbers = [1,2,3,4,4,5];
    const color  = ["red","pink","blue", "purple", "white"];
    console.log("is here numbers",numbers);
    console.log("array length", color);
    //push method is here
    numbers.push[5];
    console.log("is here color",numbers);
    //unshift method is here
    color.unshift("pink");
    console.log("My array is here",color);
    fruits.unshift("aaple");
     console.log("is here",fruits);
    //adding element is speflic position
    color.splice(2, 3 , "yellow");
    console.log("is here", color);

    //removing elements from the end
    fruits.pop("mango");
    console.log("is here", fruits);

    //removing elements at the specific positions
    color.splice(1, 2);
    console.log("is here", color);

    //updating an element
    fruits[1] = "kiwi";
    console.log("fruits");

    for (let i = 0; i < fruits. length; i++){
      console.log(fruits[1]);
    }

    //using forEach
    fruits.forEach(fruit  => {
      console.log(fruit);
})

    //using for...of loop:

    for (const fruit of fruits) {
      console.log(fruit);
    }

  return (
    <View>
      <Text>Exercise3</Text>
    </View>
  )
}

export default Exercise3

const styles = StyleSheet.create({})