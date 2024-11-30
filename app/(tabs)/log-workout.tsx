import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
  TextInput,
  useColorScheme,
} from 'react-native';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LogWorkoutScreen() {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Run 5K', target: '25min', progress: 70 },
    { id: 2, title: 'Weekly Workouts', target: '4 sessions', progress: 50 },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newGoal, setNewGoal] = useState({ title: '', target: '' });
  
  const colorScheme = useColorScheme() || 'light';
  const currentColors = Colors[colorScheme];

  const suggestions = [
    {
      title: 'HIIT Cardio',
      duration: '30 min',
      difficulty: 'High',
      calories: '300-400',
      icon: 'fitness-outline' as const,
    },
    {
      title: 'Strength Training',
      duration: '45 min',
      difficulty: 'Medium',
      calories: '200-300',
      icon: 'barbell-outline' as const,
    },
  ];

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Goals Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Goals</Text>
          <Pressable 
            style={styles.addButton}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="add" size={24} color={currentColors.text} />
          </Pressable>
        </View>

        {goals.map((goal) => (
          <View key={goal.id} style={styles.goalCard}>
            <Text style={[styles.goalTitle, { color: currentColors.text }]}>{goal.title}</Text>
            <Text style={styles.goalTarget}>Target: {goal.target}</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: `${goal.progress}%`, backgroundColor: currentColors.tint }]} />
            </View>
          </View>
        ))}
      </View>

      {/* Workout Suggestions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Suggested Workouts</Text>
        {suggestions.map((workout, index) => (
          <Pressable 
            key={index}
            style={styles.suggestionCard}
          >
            <Ionicons name={workout.icon} size={24} color={currentColors.tint} />
            <View style={styles.suggestionInfo}>
              <Text style={[styles.workoutTitle, { color: currentColors.text }]}>{workout.title}</Text>
              <Text style={styles.workoutDetails}>
                {workout.duration} • {workout.difficulty} • {workout.calories} cal
              </Text>
            </View>
          </Pressable>
        ))}
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        {/* Modal content */}
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  addButton: {
    padding: 8,
    borderRadius: 20,
  },
  goalCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  goalTarget: {
    fontSize: 14,
    marginBottom: 8,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E0E0E0',
    marginTop: 8,
  },
  progress: {
    height: '100%',
    borderRadius: 3,
  },
  suggestionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  suggestionInfo: {
    marginLeft: 12,
    flex: 1,
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  workoutDetails: {
    fontSize: 14,
    opacity: 0.7,
  },
});
