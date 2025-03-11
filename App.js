// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

const App = () => {

  const navigation = useNavigation();
  const handleLogin = () => {
    // Navigate to Home screen
    console.log('Login Pressed');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text> Login Form</Text>
      <TextInput placeholder="Login Name" style={styles.input}/> 
      <TextInput placeholder="Password" style={styles.input} secureTextEntry/>
      <TouchableOpacity 
      style={styles.button}
      onPress={handleLogin}> 
        <Text style={styles.buttonText}>Login</Text>
      
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  },
});

export default App;
