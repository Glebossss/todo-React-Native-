import { TouchableOpacity, Text, StyleSheet } from "react-native"

function List({el, deleteHandler}) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(el.key)} style={styles.container}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center'
    },

    text: {
        padding: 20,
        textAlign: 'center',
        backgroundColor: '#DDEBF3',
        marginTop: 20,
        width: '50%'
    }
})

export default List
