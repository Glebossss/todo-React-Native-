import { useState } from "react"
import { StyleSheet, Text, TextInput, Button, View } from "react-native"

function Form({addHandler}) {
    const [text, setText] = useState('')

    const onChange = (text) => {
        setText(text)
    }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={onChange} placeholder='Введите задачу...' />
      <Button color='#001E31'
      onPress={() => addHandler(text)}
      title='Добавить задачу'
      style={styles.button} />
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        width: '50%',
        margin: 'auto',
    },

    input: {
        marginTop: '5%',
        marginBottom: '3%',
        borderWidth: 1,
        padding: 20,
        fontSize: 20
    },
})

export default Form
