export type Student = {
  id: string; name: string; initials: string; className: string; progress: number;
  lastActive: string; tint: string; ink: string;
}

export const overview = [
  { label: 'Students', value: '124', change: '+12%', icon: 'users', tint: '#eeeaff', ink: '#6d5dd3' },
  { label: 'Active classes', value: '8', change: '+2 this term', icon: 'book', tint: '#e8f3ff', ink: '#4c8dce' },
  { label: 'To review', value: '18', change: 'Needs attention', icon: 'check', tint: '#fff2df', ink: '#cf9141' },
  { label: 'Class progress', value: '76%', change: '+8% this month', icon: 'chart', tint: '#e5f6ef', ink: '#36a17a' },
]

export const students: Student[] = [
  { id: 'ST-1048', name: 'Ava Martinez', initials: 'AM', className: 'Frontend Foundations', progress: 86, lastActive: '12 min ago', tint: '#fff0e8', ink: '#bd7754' },
  { id: 'ST-1052', name: 'Noah Williams', initials: 'NW', className: 'Python for Beginners', progress: 72, lastActive: '38 min ago', tint: '#eaf3ff', ink: '#5487bf' },
  { id: 'ST-1061', name: 'Mia Chen', initials: 'MC', className: 'Frontend Foundations', progress: 64, lastActive: '1 hr ago', tint: '#f0edff', ink: '#7765d2' },
  { id: 'ST-1083', name: 'Ethan Johnson', initials: 'EJ', className: 'UI Design Basics', progress: 51, lastActive: '2 hrs ago', tint: '#e7f7f0', ink: '#43a37e' },
]

export const schedule = [
  { time: '09:30', period: 'AM', title: 'Frontend Foundations', info: 'Room 204 · 12 students', color: '#7969e8' },
  { time: '11:00', period: 'AM', title: 'Python for Beginners', info: 'Room 108 · 8 students', color: '#e8aa59' },
  { time: '02:15', period: 'PM', title: 'UI Design Basics', info: 'Studio 3 · 10 students', color: '#4ab18c' },
]

export const tasks = [
  { title: 'Review assignments', detail: '18 submissions waiting', due: 'Today', icon: 'check', tint: '#eeeaff', ink: '#6d5dd3' },
  { title: 'Mark attendance', detail: 'Frontend Foundations', due: '9:30 AM', icon: 'calendar', tint: '#fff2df', ink: '#cf9141' },
  { title: 'Send class update', detail: 'Python for Beginners', due: 'Tomorrow', icon: 'message', tint: '#e8f3ff', ink: '#4c8dce' },
]
