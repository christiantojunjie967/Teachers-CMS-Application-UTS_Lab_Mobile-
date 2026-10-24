import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function StudentsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Students</Text>
        <Text style={styles.description}>
          Student rosters and learning progress will appear here.
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f7fb', padding: 20 },
  title: { fontSize: 24, fontWeight: '700', color: '#29283e' },
  description: { marginTop: 8, color: '#85879a' },
})