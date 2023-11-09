import { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import Header from "./Components/header";
import List from "./Components/list"
import Form from "./Components/form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text: 'Купить...', key: '1'},
    {text: 'Помыть...', key: '2'},
    {text: 'Сделать...', key: '3'},
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7)}, ...list,
      ]
    })
  } 

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key)
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Form addHandler={addHandler} />
        <View>
          <FlatList  data={listOfItems} renderItem={({item}) => <List el={item} deleteHandler={deleteHandler}/>} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  header: {
    width: "100%",
  },
  
});
