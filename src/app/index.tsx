import { Activity, Bell, BookOpen, CalendarDays, Check, ChevronRight, ClipboardCheck, GraduationCap, MessageCircle, Users } from 'lucide-react-native'
import { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { overview, schedule, students, tasks } from '../constants/teacherData'

export default function DashboardScreen() {
  const [checkedTasks, setCheckedTasks] = useState<string[]>([])

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.brandLine}>
              <View style={styles.logo}><GraduationCap color="#fff" size={19} /></View>
              <Text style={styles.brand}>classroom<Text style={styles.brandMuted}>OS</Text></Text>
              <TouchableOpacity style={styles.bell} accessibilityLabel="Notifications"><Bell size={19} color="#666980" /><View style={styles.bellDot} /></TouchableOpacity>
            </View>
            <View style={styles.schoolRow}><View style={styles.schoolBadge}><Text style={styles.schoolLetter}>N</Text></View><Text style={styles.schoolName}>Northstar Academy</Text><ChevronRight size={15} color="#a0a2b0" /></View>
          </View>

          <>
            <View style={styles.greetingBlock}>
              <Text style={styles.eyebrow}>TEACHER WORKSPACE  ·  TODAY</Text>
              <Text style={styles.greeting}>Good morning, Jamie <Text style={styles.sparkle}>✦</Text></Text>
              <Text style={styles.subGreeting}>Here’s what’s happening with your classes.</Text>
            </View>

            <View style={styles.sectionHeading}><Text style={styles.sectionTitle}>Your overview</Text><Text style={styles.sectionCaption}>THIS MONTH</Text></View>
            <View style={styles.statsGrid}>{overview.map((item) => <View style={styles.statCard} key={item.label}>
              <View style={[styles.statIcon, { backgroundColor: item.tint }]}>{item.icon === 'users' ? <Users size={17} color={item.ink} /> : item.icon === 'book' ? <BookOpen size={17} color={item.ink} /> : item.icon === 'check' ? <ClipboardCheck size={17} color={item.ink} /> : <Activity size={17} color={item.ink} />}</View>
              <Text style={styles.statLabel}>{item.label}</Text><Text style={styles.statValue}>{item.value}</Text><Text style={[styles.statChange, { color: item.ink }]}>{item.change}</Text>
            </View>)}</View>

            <View style={styles.sectionHeading}><View><Text style={styles.sectionTitle}>Learning activity</Text><Text style={styles.sectionSub}>Student engagement this week</Text></View><TouchableOpacity style={styles.period}><Text style={styles.periodText}>This week</Text><ChevronRight size={13} color="#85879a" /></TouchableOpacity></View>
            <View style={styles.chartCard}><View style={styles.chartTop}><Text style={styles.chartNumber}>1,284</Text><View style={styles.chartPill}><Text style={styles.chartPillText}>↗ 8.2%</Text></View><Text style={styles.chartCompare}>vs last week</Text></View><View style={styles.chart}>
              {[28, 54, 41, 72, 57, 32, 48].map((height, i) => <View key={i} style={styles.chartColumn}><View style={styles.chartTrack}><View style={[styles.chartBar, { height: `${height}%`, opacity: i === 3 ? 1 : 0.58 }]} /></View><Text style={styles.chartDay}>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</Text></View>)}
            </View></View>

            <View style={styles.sectionHeading}><View><Text style={styles.sectionTitle}>Upcoming classes</Text><Text style={styles.sectionSub}>Your next teaching day</Text></View><TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity></View>
            <View style={styles.listCard}>{schedule.map((item, i) => <View key={item.title} style={[styles.classRow, i === schedule.length - 1 && styles.lastRow]}><View style={styles.timeBlock}><Text style={styles.classTime}>{item.time}</Text><Text style={styles.classPeriod}>{item.period}</Text></View><View style={[styles.classStripe, { backgroundColor: item.color }]} /><View style={styles.classInfo}><Text style={styles.classTitle}>{item.title}</Text><Text style={styles.classCaption}>{item.info}</Text></View><ChevronRight size={16} color="#b2b4c0" /></View>)}</View>

            <View style={styles.sectionHeading}><View><Text style={styles.sectionTitle}>Student progress</Text><Text style={styles.sectionSub}>A quick look at your students</Text></View><TouchableOpacity ><Text style={styles.seeAll}>All students</Text></TouchableOpacity></View>
            <View style={styles.listCard}>{students.slice(0, 3).map((student, i) => <View key={student.id} style={[styles.studentRow, i === 2 && styles.lastRow]}><View style={[styles.studentAvatar, { backgroundColor: student.tint }]}><Text style={[styles.studentInitials, { color: student.ink }]}>{student.initials}</Text></View><View style={styles.studentInfo}><Text style={styles.studentName}>{student.name}</Text><Text style={styles.studentClass}>{student.className}</Text></View><View style={styles.progressWrap}><Text style={styles.progressLabel}>{student.progress}%</Text><View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${student.progress}%` }]} /></View></View></View>)}</View>

            <View style={styles.sectionHeading}><View><Text style={styles.sectionTitle}>Needs your attention</Text><Text style={styles.sectionSub}>A few things to take care of</Text></View><View style={styles.taskCount}><Text style={styles.taskCountText}>3</Text></View></View>
            <View style={styles.listCard}>{tasks.map((task, i) => { const done = checkedTasks.includes(task.title); return <View key={task.title} style={[styles.taskRow, i === tasks.length - 1 && styles.lastRow]}><View style={[styles.taskIcon, { backgroundColor: task.tint }]}>{task.icon === 'check' ? <ClipboardCheck size={16} color={task.ink} /> : task.icon === 'calendar' ? <CalendarDays size={16} color={task.ink} /> : <MessageCircle size={16} color={task.ink} />}</View><View style={styles.taskInfo}><Text style={[styles.taskTitle, done && styles.taskDone]}>{task.title}</Text><Text style={styles.taskDetail}>{task.detail}</Text></View><View style={styles.taskEnd}><Text style={styles.taskDue}>{done ? 'Done' : task.due}</Text><TouchableOpacity style={[styles.checkButton, done && styles.checkButtonDone]} onPress={() => setCheckedTasks(done ? checkedTasks.filter((title) => title !== task.title) : [...checkedTasks, task.title])} accessibilityLabel={`${done ? 'Undo' : 'Complete'} ${task.title}`}><Check size={13} color={done ? '#fff' : 'transparent'} /></TouchableOpacity></View></View>})}</View>
            <View style={styles.footer}><Text style={styles.footerText}>Made for teachers, by teachers <Text style={styles.heart}>♥</Text></Text></View>
          </>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f6f7fb' }, screen: { flex: 1, backgroundColor: '#f6f7fb' }, scrollContent: { paddingHorizontal: 20, paddingBottom: 28 },
  header: { paddingTop: 8, paddingBottom: 18 }, brandLine: { flexDirection: 'row', alignItems: 'center', gap: 9 }, logo: { width: 31, height: 31, borderRadius: 10, backgroundColor: '#7665e4', alignItems: 'center', justifyContent: 'center' }, brand: { fontSize: 18, color: '#29283e', fontWeight: '800', letterSpacing: -0.7 }, brandMuted: { color: '#9b98bd', fontWeight: '500' }, bell: { marginLeft: 'auto', width: 36, height: 36, borderRadius: 12, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }, bellDot: { position: 'absolute', width: 7, height: 7, borderRadius: 4, backgroundColor: '#ed8f7f', right: 8, top: 7, borderWidth: 1.5, borderColor: '#fff' }, schoolRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 14 }, schoolBadge: { width: 25, height: 25, backgroundColor: '#eeeaff', borderRadius: 7, justifyContent: 'center', alignItems: 'center' }, schoolLetter: { color: '#6959d0', fontSize: 12, fontWeight: '800' }, schoolName: { fontSize: 11, color: '#686b80', fontWeight: '600' },
  greetingBlock: { marginTop: 4, marginBottom: 23 }, eyebrow: { color: '#9799aa', fontSize: 9, letterSpacing: 1, fontWeight: '700', marginBottom: 7 }, greeting: { fontSize: 23, color: '#27263d', fontWeight: '800', letterSpacing: -0.8 }, sparkle: { color: '#d5a24f' }, subGreeting: { color: '#9295a6', fontSize: 11, marginTop: 5 }, sectionHeading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 22, marginBottom: 11 }, sectionTitle: { fontSize: 14, color: '#2d2c43', fontWeight: '700', letterSpacing: -0.2 }, sectionSub: { fontSize: 9, color: '#999bab', marginTop: 3 }, sectionCaption: { fontSize: 8, letterSpacing: 0.7, color: '#a3a5b2', fontWeight: '700' },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 }, statCard: { width: '47%', minHeight: 119, backgroundColor: '#fff', borderRadius: 13, borderWidth: 1, borderColor: '#eceef4', padding: 12 }, statIcon: { width: 29, height: 29, borderRadius: 9, alignItems: 'center', justifyContent: 'center', marginBottom: 9 }, statLabel: { fontSize: 9, color: '#8d90a2' }, statValue: { fontSize: 22, color: '#29283e', fontWeight: '800', marginTop: 2 }, statChange: { fontSize: 8, marginTop: 2, fontWeight: '600' },
  period: { borderWidth: 1, borderColor: '#e8eaf1', backgroundColor: '#fff', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 7, flexDirection: 'row', alignItems: 'center', gap: 4 }, periodText: { color: '#77798b', fontSize: 9 }, chartCard: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#eceef4', borderRadius: 13, padding: 14 }, chartTop: { flexDirection: 'row', alignItems: 'center', gap: 7 }, chartNumber: { fontSize: 17, fontWeight: '800', color: '#333249' }, chartPill: { backgroundColor: '#e9f7f0', borderRadius: 12, paddingHorizontal: 6, paddingVertical: 3 }, chartPillText: { color: '#42a77f', fontSize: 8, fontWeight: '700' }, chartCompare: { color: '#9a9cac', fontSize: 8 }, chart: { height: 112, marginTop: 11, flexDirection: 'row', gap: 11, alignItems: 'flex-end', justifyContent: 'space-around' }, chartColumn: { flex: 1, height: '100%', alignItems: 'center', justifyContent: 'flex-end', gap: 5 }, chartTrack: { width: '100%', height: 89, justifyContent: 'flex-end', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#f0f1f5' }, chartBar: { width: 16, maxWidth: '70%', minHeight: 8, backgroundColor: '#7b6be5', borderTopLeftRadius: 5, borderTopRightRadius: 5 }, chartDay: { color: '#a2a4b1', fontSize: 8 },
  seeAll: { color: '#7060d8', fontSize: 9, fontWeight: '700' }, listCard: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#eceef4', borderRadius: 13, paddingHorizontal: 12 }, classRow: { minHeight: 62, flexDirection: 'row', alignItems: 'center', gap: 9, borderBottomWidth: 1, borderBottomColor: '#f0f1f5' }, lastRow: { borderBottomWidth: 0 }, timeBlock: { width: 41 }, classTime: { color: '#44445b', fontSize: 10, fontWeight: '700' }, classPeriod: { color: '#a0a2b0', fontSize: 8, marginTop: 2 }, classStripe: { width: 3, height: 34, borderRadius: 2 }, classInfo: { flex: 1 }, classTitle: { color: '#4a4a60', fontSize: 10, fontWeight: '600' }, classCaption: { color: '#999bab', fontSize: 8, marginTop: 4 }, studentRow: { minHeight: 63, flexDirection: 'row', alignItems: 'center', gap: 9, borderBottomWidth: 1, borderBottomColor: '#f0f1f5' }, studentAvatar: { width: 33, height: 33, borderRadius: 11, alignItems: 'center', justifyContent: 'center' }, studentInitials: { fontSize: 9, fontWeight: '700' }, studentInfo: { flex: 1 }, studentName: { color: '#46465c', fontSize: 10, fontWeight: '600' }, studentClass: { color: '#999bab', fontSize: 8, marginTop: 3 }, progressWrap: { width: 53, alignItems: 'flex-end', gap: 4 }, progressLabel: { color: '#696b80', fontSize: 8, fontWeight: '700' }, progressTrack: { width: 49, height: 4, backgroundColor: '#eff0f5', borderRadius: 4, overflow: 'hidden' }, progressFill: { height: '100%', backgroundColor: '#7869e5', borderRadius: 4 },
  taskCount: { width: 22, height: 22, borderRadius: 7, backgroundColor: '#eeeaff', alignItems: 'center', justifyContent: 'center' }, taskCountText: { color: '#6d5dd3', fontSize: 9, fontWeight: '700' }, taskRow: { minHeight: 62, flexDirection: 'row', alignItems: 'center', gap: 9, borderBottomWidth: 1, borderBottomColor: '#f0f1f5' }, taskIcon: { width: 30, height: 30, borderRadius: 9, justifyContent: 'center', alignItems: 'center' }, taskInfo: { flex: 1 }, taskTitle: { color: '#47475d', fontSize: 10, fontWeight: '600' }, taskDone: { textDecorationLine: 'line-through', color: '#9b9dac' }, taskDetail: { color: '#999bab', fontSize: 8, marginTop: 3 }, taskEnd: { flexDirection: 'row', alignItems: 'center', gap: 7 }, taskDue: { color: '#9a9cac', fontSize: 8 }, checkButton: { width: 19, height: 19, borderRadius: 6, borderWidth: 1, borderColor: '#dfe2ea', alignItems: 'center', justifyContent: 'center' }, checkButtonDone: { backgroundColor: '#51ad88', borderColor: '#51ad88' }, footer: { paddingVertical: 23, alignItems: 'center' }, footerText: { color: '#aaaab7', fontSize: 8 }, heart: { color: '#dd898d' },
})



