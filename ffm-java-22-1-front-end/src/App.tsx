import React, {useEffect, useState} from 'react';
import './Css/App.css';
import Header from "./Header";
import axios from "axios";
import {TodoModel} from "./Model/TodoModel";
import TodoGallery from "./TodoGallery";
import AddToDo from "./AddToDo";

function App() {

    const [todoList, setTodoList] = useState<TodoModel[]>([])

    useEffect(() => {axios.get("/api/todo")
        .then((response) => {
            return response.data})
        .catch((error) => console.log("Endpoint not available "+error))
        .then((data) => setTodoList(data))
        },[todoList])

    return (
        <div className="App">
            <Header/>
        <TodoGallery todoList={todoList}/>
            <AddToDo/>
    </div>
  );
}

export default App;
