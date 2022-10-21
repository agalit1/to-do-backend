import React from 'react';
import {TodoModel} from "./Model/TodoModel";
import "./Css/Task.css";

function ToDoCard(props: {singleToDo:TodoModel}) {
    return (
        <article>
        <div className="description">{props.singleToDo.description}</div>
        <div className="status">{props.singleToDo.status}</div>
        <div className="id">{props.singleToDo.id}</div>
        </article>
    );
}

export default ToDoCard;