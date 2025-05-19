import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AllMembersScreen() {
  const { members } = useLocalSearchParams();
  const parsedMembers = members ? JSON.parse(members) : [];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>All Registered Members</Text>
      {parsedMembers.length === 0 ? (
        <Text style={styles.noMembers}>No members registered yet.</Text>
      ) : (
        parsedMembers.map((member, index) => (
          <View key={index} style={styles.memberCard}>
            <Text style={styles.memberText}>👤 {member.name}</Text>
            <Text style={styles.memberText}>🆔 {member.id}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F3E5F5',
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#6A1B9A',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  noMembers: {
    fontSize: 18,
    color: '#757575',
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
