import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [input, setInput] = useState(0);
  const [input1, setInput1] = useState(0);
  const [result, setResult] = useState(0);
  const [operand, setOperand] = useState(null);
  const [history, setHistory] = useState([]);

  sum = () => {
    let summa = parseFloat(input) + parseFloat(input1);
    setHistory(prevHistory => [...prevHistory, `${input} + ${input1} = ${summa}`]);
    setResult(summa);
  }

  subtract = () => {
    let minus = parseFloat(input) - parseFloat(input1);
    setHistory(prevHistory => [...prevHistory, `${input} - ${input1} = ${minus}`]);
    setResult(minus)
  }

  function handleInputChange(syote) {
    setInput(syote);
  }
  function handleInputChange1(syote1) {
    setInput1(syote1);
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        placeholder="enter first value"
        numeric
        keyboardType={'numeric'}
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        value={input}
        onChangeText={text => handleInputChange(text)}
      />
      <TextInput
        placeholder="enter second value"
        numeric
        keyboardType={'numeric'}
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        value={input1}
        onChangeText={text => handleInputChange1(text)}
      />
      <View style={{ flexDirection: "row" }}>
        <Button title=" + " onPress={sum} />
        <Button title=" - " onPress={subtract} />
      </View>
      <View>
        {history.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
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

