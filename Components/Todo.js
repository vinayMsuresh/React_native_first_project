import React, {useState} from 'react';
import { View,Text, FlatList,Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TodoItem from './TodoItem';
import styles from '../Styles/Styles';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import { addTask,deleteTask,updateTask } from '../store/taskAction';
import { useSelector, useDispatch } from 'react-redux';
export default function Todo() {
    const todo = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [isAdd, setAdd] = useState(true);
    const [val, setVal] = useState('');
    const [id, setId] = useState(0);
    const addTodo = (text) => {
        const data = {id: Math.random(), task:text}
        if(text.length > 3){
            dispatch(addTask(data));
            // setTodo(todo=>{
            //     return [
            //         ...todo, {id: Math.random(), task:text}
            //     ]
            // })
            Keyboard.dismiss();
        }
        else{
            Alert.alert('Todo name must be atleast of 3 characters')
        }
    }

    const deleteTodo = (id) => {
        dispatch(deleteTask(id));
        // setTodo(todo=>{
        //     return todo.filter(item => item.id != id)
        // })
    }

    const edit = (itm) => {
        setAdd(false);
        setVal(itm.task);
        setId(itm.id);
    }

    const editTodo = (text) => {
        if(text.length > 3){
            const data = {id, task:text};
            dispatch(updateTask(data, id))
            // let items = todo;
            // const newList = items.map((item) => {
            //     if (item.id === id) {
            //       const updatedItem = {
            //         ...item,
            //         task: text,
            //       };
          
            //       return updatedItem;
            //     }
          
            //     return item;
            //   });
          
            // setTodo(newList);
            setAdd(true);
            Keyboard.dismiss();
        }
        else{
            Alert.alert('Todo name must be atleast of 3 characters')
        }
    }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <View style={styles.content}>
                {isAdd ? <AddTodo addTodo={addTodo} /> : <EditTodo val={val} editTodo={editTodo} />}
                
                    <FlatList 
                        data={todo}
                        keyExtractor={(item)=>item.id}
                        renderItem={({item})=>(
                            <TodoItem item={item} deleteTodo={deleteTodo} edit = {edit} />
                        )}    
                    />         
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}
