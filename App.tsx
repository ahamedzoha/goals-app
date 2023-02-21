import { Button, StyleSheet, Text, View, TextInput } from "react-native"

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* Input element */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your course goal" style={styles.goalInput} />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of Goals</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: "center",
    // backgroundColor: "green",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalInput: {
    width: "70%",
    color: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",
    marginRight: 10,
    padding: 8,
    placeholderTextColor: "#fff",
  },
})
