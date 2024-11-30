import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProgressScreen() {
  const colorScheme = useColorScheme() || 'light';
  const currentColors = Colors[colorScheme];
  
  const [selectedDate, setSelectedDate] = useState('26 September');

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <View style={styles.header}>
        <Ionicons name="calendar" size={24} color={currentColors.text} />
        <Text style={[styles.dateText, { color: currentColors.text }]}>Saturday</Text>
        <Text style={[styles.dateText, { color: currentColors.text }]}>25 September</Text>
        <Image
          source={{ uri: 'https://example.com/path-to-your-profile-pic.jpg' }} // Replace with your image URL
          style={styles.profileImage}
        />
      </View>
      <View style={styles.dateSelector}>
        {['25', '26', '27', '29', '30'].map((date) => (
          <View
            key={date}
            style={[
              styles.dateBox,
              selectedDate === `${date} September` && styles.selectedDateBox,
            ]}
          >
            <Text style={styles.dateText}>{date}</Text>
            <Text style={styles.dayText}>{['Wed', 'Thu', 'Fri', 'Sat', 'Sun'][parseInt(date) - 25]}</Text>
          </View>
        ))}
      </View>

      {/* Activities Section */}
      <Text style={[styles.title, { color: currentColors.text }]}>Your activity</Text>
      <View style={styles.activityContainer}>
        <ActivityCard title="Walk" value="8104 Steps" icon="walk" />
        <ActivityCard title="Sleep" value="6 Hours" icon="moon" />
        <ActivityCard title="Water" value="3 Bottles" icon="water" />
        <ActivityCard title="Heart" value="95 bpm" icon="heart" />
      </View>
    </View>
  );
}

const ActivityCard = ({ title, value, icon }: { title: string; value: string; icon: string }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
      {/* Placeholder for progress indicator */}
      <View style={styles.progressIndicator}>
        {/* You can replace this with a real progress component */}
        <Text style={styles.progressText}>Progress Placeholder</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  dateSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateBox: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#2C2C2E',
  },
  selectedDateBox: {
    backgroundColor: '#0a7ea4',
  },
  dayText: {
    fontSize: 12,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  activityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%', // Adjust width for two cards per row
    backgroundColor: '#2C2C2E',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: '#ffffff',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a7ea4',
  },
  progressIndicator: {
    width: '100%',
    height: 10,
    backgroundColor: '#687076',
    borderRadius: 5,
    marginTop: 10,
  },
  progressText: {
    color: '#ffffff',
  },
});
