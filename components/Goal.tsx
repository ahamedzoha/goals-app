import { View, Text, Button, StyleSheet, Pressable } from "react-native"
import { FC } from "react"

export interface GoalType {
  text: string
  key: string
}
interface GoalProps {
  goal: GoalType
  deleteGoal: (goal: GoalType) => void
}
const Goal: FC<GoalProps> = ({ goal, deleteGoal }) => {
  return (
    <View key={goal.key} style={styles.listContainer}>
      <Pressable
        onPress={() => deleteGoal(goal)}
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{goal.text}</Text>
      </Pressable>
    </View>
  )
}

export default Goal

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "#aaffaa",
    marginVertical: 10,
    marginRight: 5,
    borderRadius: 5,
  },

  pressedItem: {
    opacity: 0.5,
  },

  goalItemText: {
    padding: 8,
    fontSize: 16,
  },
})
