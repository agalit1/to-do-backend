import React, {useEffect, useState} from 'react';
import './css/App.css';
import Header from "./Header";
import axios from "axios";
import {TodoModel} from "./model/TodoModel";
import TodoGallery from "./TodoGallery";
import AddToDo from "./AddToDo";

function App() {

    const [todoList, setTodoList] = useState<TodoModel[]>([])

    useEffect(() => {
        getTodoList()
    }, [])


    const getTodoList = () => {
        axios.get("/api/todo")
            .then((response) => {
                return response.data
            })
            .catch((error) => console.log("Endpoint not available " + error))
            .then((data) => setTodoList(data))
    }

    return (

        <div className="App">
            <Header/>
            <AddToDo refreshPage={getTodoList}/>
            <TodoGallery todoList={todoList} refreshPage={getTodoList}/>

        </div>
    );
}

export default App;
