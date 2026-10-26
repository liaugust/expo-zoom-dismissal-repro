import { Link, Stack } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

export const COLORS = ['#ff2d55', '#007aff', '#ff9500', '#34c759', '#af52de', '#5ac8fa'];

export default function Cards() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Cards',
          headerLeft: () => <Text style={styles.headerItem}>Settings</Text>,
          headerRight: () => <Text style={styles.headerItem}>Search · Map</Text>,
        }}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.list}>
        <Link href="/loop/1" style={styles.loopLink}>
          Open a screen that calls the hook next to its Stack.Screen options
        </Link>
        {COLORS.concat(COLORS).map((color, index) => (
          <Link key={index} href={`/card/${index}`} asChild>
            <Link.Trigger withAppleZoom>
              <Pressable style={StyleSheet.flatten([styles.card, { backgroundColor: color }])}>
                <Text style={styles.cardTitle}>Card {index + 1}</Text>
              </Pressable>
            </Link.Trigger>
          </Link>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  list: { gap: 16, padding: 16 },
  card: { borderRadius: 20, height: 160, padding: 16 },
  cardTitle: { color: 'white', fontSize: 28, fontWeight: '800' },
  headerItem: { fontSize: 18, paddingHorizontal: 8 },
  loopLink: { color: '#007aff', fontSize: 16 },
});
