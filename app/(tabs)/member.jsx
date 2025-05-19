import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function MemberScreen() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [members, setMembers] = useState([]);
  const router = useRouter();

  const handleRegister = () => {
    if (name && id) {
      setMembers([...members, { name, id }]);
      setName('');
      setId('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Register as IEEE Member</Text>

        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter IEEE ID"
          value={id}
          onChangeText={setId}
          style={styles.input}
        />

        <View style={styles.buttonRow}>
          <Pressable style={[styles.button, { flex: 1, marginRight: 5 }]} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>

          <Pressable
            style={[styles.button, { backgroundColor: '#AB47BC', flex: 1, marginLeft: 5 }]}
            onPress={() =>
              router.push({
                pathname: '/allMembers',
                params: { members: JSON.stringify(members) },
              })
            }
          >
            <Text style={styles.buttonText}>View All Members</Text>
          </Pressable>
        </View>

        <Text style={styles.subTitle}>Registered Members: {members.length}</Text>
        {members.map((member, index) => (
          <View key={index} style={styles.memberCard}>
            <Text style={styles.memberText}>👤 {member.name}</Text>
            <Text style={styles.memberText}>🆔 {member.id}</Text>
          </View>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F3E5F5',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#6A1B9A',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    width: '100%',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6A1B9A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    marginVertical: 10,
    color: '#333',
  },
  memberCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    marginBottom: 10,
  },
  memberText: {
    fontSize: 16,
    color: '#212121',
  },
});
