import { Stack, useLocalSearchParams, usePreventZoomTransitionDismissal } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../index';

export default function Card() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const index = Number(id);

  return (
    <>
      <EdgeOnlyDismissal />
      <Stack.Screen
        options={{
          title: `Card ${index + 1}`,
          headerRight: () => <Text style={styles.headerItem}>Map · Add · Alerts</Text>,
        }}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.content}>
        <View style={[styles.hero, { backgroundColor: COLORS[index % COLORS.length] }]} />
        <Text style={styles.body}>{'Swipe right from the middle of the screen. '.repeat(40)}</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: { gap: 16, padding: 16 },
  hero: { borderRadius: 24, height: 400 },
  body: { fontSize: 16, lineHeight: 22 },
  headerItem: { fontSize: 18, paddingHorizontal: 8 },
});

// Only a swipe that starts within 44pt of the left edge should begin the zoom back. Called from
// a component of its own: in the screen component itself, next to <Stack.Screen options>, the
// hook loops (see app/loop/[id].tsx).
function EdgeOnlyDismissal() {
  usePreventZoomTransitionDismissal({ unstable_dismissalBoundsRect: { maxX: 44 } });

  return null;
}
