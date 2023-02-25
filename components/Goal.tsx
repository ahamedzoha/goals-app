import { View, Text, Button, StyleSheet } from "react-native"
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
      <Text style={styles.goalItemText}>{goal.text}</Text>
      <Button title="Delete" onPress={() => deleteGoal(goal)} />
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
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalItemText: {
    fontSize: 16,
  },
})
