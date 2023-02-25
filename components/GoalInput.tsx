import { FC } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

interface GoalInputProps {
  handleOnChange: (text: string) => void
  goalSubmitHandler: () => void
  value: string
}

const GoalInput: FC<GoalInputProps> = ({
  handleOnChange,
  goalSubmitHandler,
  value,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={(text) => handleOnChange(text)}
        value={value}
        placeholder="Your course goal"
        style={styles.goalInput}
        onSubmitEditing={() => goalSubmitHandler()}
      />
      <Button onPress={() => goalSubmitHandler()} title="Add Goal" />
    </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
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
})
