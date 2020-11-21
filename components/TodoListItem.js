// components/TodoListItem.js
import React from 'react';
import 
{ View,
  Text,
  StyleSheet,
  TouchableOpacity,  
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoListItem = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.completeCircle}>
                    <Icon name="downcircleo" size={30} color="#3143e8" />
                </View>
            </TouchableOpacity> 
            <Text style={[styles.text, styles.strikeText]}>
                Items will be shown here
            </Text>
            <TouchableOpacity>
                <Text style={styles.buttonContainer}>
                    <Icon name="delete" size={30} color="#e33057" />
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20,
        width: 100,
    },
    completeCircle: {
        marginRight: 20,
        marginLeft: 20,
    },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#29323c',   
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 25,
    },
});

export default TodoListItem; 