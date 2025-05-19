import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to IEEE WIE App</Text>

      {/* شعار IEEE */}
      <Image source={require('../assets/images/imag.jpeg')} style={styles.logo} />

      <Pressable style={styles.button} onPress={() => router.push('/member')}>
        <Text style={styles.buttonText}>Register as Member</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/visitor')}>
        <Text style={styles.buttonText}>Continue as Visitor</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F3E5F5', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#6A1B9A' },
  logo: { width: 150, height: 150, marginBottom: 40, resizeMode: 'contain' },
  button: { backgroundColor: '#6A1B9A', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 10, marginBottom: 20, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
