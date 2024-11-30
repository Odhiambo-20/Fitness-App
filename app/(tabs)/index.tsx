import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart, PieChart } from "react-native-chart-kit";
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  const colorScheme = useColorScheme() || 'light';
  const currentColors = Colors[colorScheme];

  // Weekly activity data
  const activityData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        // Workout hours
        data: [1.5, 0, 2, 1, 2.5, 1, 0.5],
        color: () => currentColors.chart.blue,
      },
      {
        // Sleep hours
        data: [7, 6.5, 8, 7.5, 6, 8.5, 7],
        color: () => currentColors.chart.yellow,
      }
    ]
  };

  // Activity distribution
  const activityDistribution = [
    {
      name: "Cardio",
      percentage: 45,
      color: currentColors.chart.blue,
    },
    {
      name: "Strength",
      percentage: 35,
      color: currentColors.chart.yellow,
    },
    {
      name: "Flexibility",
      percentage: 20,
      color: currentColors.chart.orange,
    }
  ];

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: currentColors.text }]}>Activity Overview</Text>
        <Text style={[styles.subtitle, { color: currentColors.text }]}>Week</Text>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsContainer}>
        <View style={[styles.statCard, { backgroundColor: currentColors.cardBackground }]}>
          <Text style={[styles.statValue, { color: currentColors.text }]}>8,547</Text>
          <Text style={[styles.statLabel, { color: currentColors.icon }]}>Steps Today</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: currentColors.cardBackground }]}>
          <Text style={[styles.statValue, { color: currentColors.text }]}>7.2</Text>
          <Text style={[styles.statLabel, { color: currentColors.icon }]}>Hours Sleep</Text>
        </View>
      </View>

      {/* Activity Chart */}
      <View style={[styles.card, { backgroundColor: currentColors.cardBackground }]}>
        <Text style={[styles.cardTitle, { color: currentColors.text }]}>Weekly Activity</Text>
        <LineChart
          data={activityData}
          width={Dimensions.get("window").width - 40}
          height={220}
          chartConfig={{
            backgroundColor: currentColors.cardBackground,
            backgroundGradientFrom: currentColors.cardBackground,
            backgroundGradientTo: currentColors.cardBackground,
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
              r: "4",
              strokeWidth: "2",
            }
          }}
          bezier
          style={styles.chart}
        />
        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: currentColors.chart.blue }]} />
            <Text style={[styles.legendText, { color: currentColors.text }]}>Workout Hours</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: currentColors.chart.yellow }]} />
            <Text style={[styles.legendText, { color: currentColors.text }]}>Sleep Hours</Text>
          </View>
        </View>
      </View>

      {/* Workout Distribution */}
      <View style={[styles.card, { backgroundColor: currentColors.cardBackground }]}>
        <Text style={[styles.cardTitle, { color: currentColors.text }]}>Workout Distribution</Text>
        <PieChart
          data={activityDistribution}
          width={Dimensions.get("window").width - 40}
          height={200}
          chartConfig={{
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          accessor="percentage"
          backgroundColor="transparent"
          paddingLeft="15"
          center={[0, 0]}
        />
      </View>
    </View>
  );
}

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
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    width: '48%',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  chart: {
    borderRadius: 16,
    marginVertical: 8,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  legendText: {
    fontSize: 12,
  }
});
