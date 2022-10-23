import React from 'react';
import {TodoModel} from "./Model/TodoModel";
import ToDoCard from "./ToDoCard";
import "./Css/ToDoGallery.css"

type GalleryProps = {
    todoList: TodoModel[],
    refreshPage: () => void,
}

function TodoGallery(props: GalleryProps) {
    const tasksOpen = props.todoList.filter((current) => current.status === "OPEN")
    const tasksInProgress = props.todoList.filter((current) => current.status === "IN_PROGRESS")
    const tasksDone = props.todoList.filter((current) => current.status === "DONE")

    return (
        <div className={"todo-gallery"}>
            <div className={"todo-gallery-column"}>
                <h2>Open</h2>
            {tasksOpen.map((current) =>
                <ToDoCard singleToDo={current} key={current.id} refreshPage={props.refreshPage}/>
            )}
            </div>
            <div className={"todo-gallery-column"}>
                <h2>In Progress</h2>
                {tasksInProgress.map((current) =>
                    <ToDoCard singleToDo={current} key={current.id} refreshPage={props.refreshPage}/>
                )}
            </div>
            <div className={"todo-gallery-column"}>
                <h2>Done</h2>
                {tasksDone.map((current) =>
                    <ToDoCard singleToDo={current} key={current.id} refreshPage={props.refreshPage}/>
                )}
            </div>
        </div>
    );
}
    export default TodoGallery;