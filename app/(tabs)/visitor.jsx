import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

export default function VisitorScreen() {
  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/ieeeaquwiechapter?igsh=MWdqM3B6djlyZTR4eA==');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Visitor!</Text>
      <Pressable style={styles.button} onPress={openInstagram}>
        <Text style={styles.buttonText}>Visit our Instagram</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1BEE7',
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: '#4A148C',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#8E24AA',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
