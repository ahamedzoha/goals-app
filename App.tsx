import { useState } from "react"
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native"

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("")
  const [courseGoals, setCourseGoals] = useState<string[]>([])

  const goalSubmitHandler = () => {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal])
    setEnteredGoal("")
  }

  const deleteGoal = (goal: string) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goals) => goals !== goal)
    })
  }

  console.log(enteredGoal)
  return (
    <View style={styles.appContainer}>
      {/* Input element */}
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setEnteredGoal(text)}
          value={enteredGoal}
          placeholder="Your course goal"
          style={styles.goalInput}
          // on enter press
          onSubmitEditing={() => goalSubmitHandler()}
        />
        <Button onPress={() => goalSubmitHandler()} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        {/* List of goals */}
        <Text style={styles.containerHeading}>Goals</Text>

        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <View
              key={itemData.item + Math.random}
              style={styles.listContainer}
            >
              <Text style={styles.goalItemText}>{itemData.item}</Text>
              <Button
                title="Delete"
                onPress={() => deleteGoal(itemData.item)}
              />
            </View>
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
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  goalInput: {
    width: "70%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",
    marginRight: 10,
    padding: 8,
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
