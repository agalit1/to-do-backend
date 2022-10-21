import React from 'react';
import {TodoModel} from "./Model/TodoModel";

function ToDoCard(props: {singleToDo:TodoModel}) {
    return (
        <article>
        <div>{props.singleToDo.description}</div>
        <div>{props.singleToDo.status}</div>
        <div>{props.singleToDo.id}</div>

        </article>
    );
}

export default ToDoCard;