import { Stack, usePreventZoomTransitionDismissal } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';

// The hook and <Stack.Screen options> in the same component: opening this screen throws
// "Maximum update depth exceeded".
export default function Loop() {
  usePreventZoomTransitionDismissal({ unstable_dismissalBoundsRect: { maxX: 44 } });

  return (
    <>
      <Stack.Screen options={{ title: 'Loop' }} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.content}>
        <Text>If you can read this, the screen did not loop.</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16 },
});
