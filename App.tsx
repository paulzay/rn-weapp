import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Weather</Text>
        <Text style={styles.temp}>Temperature: 6</Text>
        <Text>Feels like</Text>
        <Text>High/Low</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: 'orange',
    flex: 1,
    alignItems: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
});

export default App;
