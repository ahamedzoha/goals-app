import { useState } from "react"
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native"
import Goal, { GoalType } from "./components/Goal"
import GoalInput from "./components/GoalInput"

export default function App() {
  const [isAddMode, setIsAddMode] = useState<boolean>(false)
  const [enteredGoal, setEnteredGoal] = useState<string>("")
  const [courseGoals, setCourseGoals] = useState<GoalType[]>([])

  const goalSubmitHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, key: Math.random().toString() },
    ])
    setEnteredGoal("")
  }

  const deleteGoal = (goal: GoalType) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goals) => goals.key !== goal.key)
    })
  }

  // Might introduce a bug later
  const handleAddModeChange = () => {
    setEnteredGoal("")
    setIsAddMode((currentMode) => !currentMode)
  }

  console.log(enteredGoal)
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={() => handleAddModeChange()}
      />

      {/* Input element */}
      <GoalInput
        isVisible={isAddMode}
        handleAddModeChange={handleAddModeChange}
        handleOnChange={setEnteredGoal}
        goalSubmitHandler={goalSubmitHandler}
        value={enteredGoal}
      />

      <View style={styles.goalsContainer}>
        {/* List of goals */}
        <Text style={styles.containerHeading}>Goals</Text>

        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <Goal goal={itemData.item} deleteGoal={deleteGoal} />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    // backgroundColor: "green",
  },

  goalsContainer: {
    flex: 4,
    paddingTop: 30,
    width: "100%",
    overflow: "scroll",
  },
  containerHeading: {
    fontSize: 45,
    fontWeight: "bold",
  },
})
