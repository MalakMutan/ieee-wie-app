import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'صفحة غير موجودة' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">عذرًا، هذه الصفحة غير موجودة.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">العودة إلى الصفحة الرئيسية</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F3E5F5',  // ممكن تضيف خلفية لطيفة متناسقة مع مشروعك
  },
  link: {
    marginTop: 20,
    paddingVertical: 15,
  },
});
