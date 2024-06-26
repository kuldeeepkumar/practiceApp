import { Button, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { containerStyle } from "../styles/Index";

const Exercise14 = () => {
  // ------------------>>>>>>>>>>>>>>>>>>> Hooks and Lifecycle <<<<<<<<<<<<<<<<<<--------------------------

  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  console.log("name is here ", name);

  useEffect(() => {
    alert("Component mounted or count updated");
    return () => {
      alert("Component will unmount or count will update");
    };
  }, [count]);

  return (
    <View style={containerStyle.container}>
      <Text> Hi my name is {name}</Text>
      <Text>Count: {count}</Text>
      <Button
        title="Increment"
        onPress={() => {
          {
            setCount(count + 2), setName("Shivani");
          }
        }}
      />
    </View>
  );
};

export default Exercise14;
