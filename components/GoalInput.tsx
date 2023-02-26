import { FC } from "react"
import { View, TextInput, Button, StyleSheet, Modal, Text } from "react-native"

interface GoalInputProps {
  handleOnChange: (text: string) => void
  goalSubmitHandler: () => void
  value: string
  isVisible: boolean
  handleAddModeChange: () => void
}

const GoalInput: FC<GoalInputProps> = ({
  handleOnChange,
  goalSubmitHandler,
  value,
  isVisible,
  handleAddModeChange,
}) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      // transparent={true}
      onRequestClose={() => {
        handleAddModeChange()
      }}
      hardwareAccelerated={true}
      // presentationStyle=""
    >
      <View style={styles.modalView}>
        <View style={styles.inputContainer}>
          <Text style={styles.emoji}>🎯</Text>
          <Text style={styles.header}>What do you wish to accomplish?</Text>
          <TextInput
            onChangeText={(text) => handleOnChange(text)}
            value={value}
            placeholder="Your course goal"
            style={styles.goalInput}
            onSubmitEditing={() => {
              goalSubmitHandler()
              handleAddModeChange()
            }}
          />
          <View style={styles.buttonsGroup}>
            <Button
              onPress={() => {
                goalSubmitHandler()
                handleAddModeChange()
              }}
              title="Add Goal"
              color={"#5e0acc"}
            />
            <Button
              onPress={() => {
                handleAddModeChange()
              }}
              title="Cancel"
              color={"#ff0000"}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafaff",
    marginTop: 75,
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  emoji: {
    fontSize: 100,
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 32,
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  goalInput: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",
    padding: 8,
    marginBottom: 16,
  },
  buttonsGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
})
