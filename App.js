import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperLimit, setUpperLimit] = useState(null);

  const calculateHeartRateLimits = () => {
    const ageNumber = parseInt(age, 10);
    if (isNaN(ageNumber) || ageNumber <= 0) {
      alert('Please enter a valid age.');
      return;
    }

    const lower = (220 - ageNumber) * 0.65;
    const upper = (220 - ageNumber) * 0.85;

    setLowerLimit(lower.toFixed(0));
    setUpperLimit(upper.toFixed(0));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <Button 
        title="Calculate" 
        onPress={calculateHeartRateLimits} 
        color="#FFD700"
      />
      {lowerLimit !== null && upperLimit !== null && (
        <View style={styles.results}>
          <Text style={styles.resultText}>Lower Limit: {lowerLimit} bpm</Text>
          <Text style={styles.resultText}>Upper Limit: {upperLimit} bpm</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
  },
  input: {
    height: 55,
    borderColor: '#FFD700',
    borderWidth: 8,
    borderRadius: 5,
    paddingHorizontal: 12,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  results: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 25,
    color: '#FFD700', 
  },
});
