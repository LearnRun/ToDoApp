import React from 'react';
import {
  SafeAreaView, 
  StyleSheet, 
  TextInput,
  View,
  Text,
  ScrollView,
} from 'react-native';
import TodoInsert from './components/TodoInsert';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello TodoList</Text>
      <View style={styles.card}>
        <TodoInsert />
        <ScrollView>
          <View>
           <Text>TodoList</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>  
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to to provide rounded coners
    borderBottomRightRadius: 10, // to to provide rounded coners
    borderBottomLeftRadius: 10, // to to provide rounded coners
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
    marginRight: 20,
  },
});
export default App;