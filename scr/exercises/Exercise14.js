import { Button, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { containerStyle } from "../styles";

const Exercise14 = () => {
  // ------------------>>>>>>>>>>>>>>>>>>> Hooks and Lifecycle <<<<<<<<<<<<<<<<<<--------------------------

  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  useEffect(() => {
    alert("Component  or count updated");
    return () => {
      alert("Component will unmount or count will update");
    };
  }, [count]);

  return (
    <View style={containerStyle.container}>
      <Text> hello my name is 👍👌 {name}</Text>
      <Text>Count: {count}</Text>
      <Button
        title="Increment"
        onPress={() => {
          {
            setCount(count + 1), setName("khandu don💩🤖💩💩");
          }
        }}
      />
    </View>
  );
};

export default Exercise14;