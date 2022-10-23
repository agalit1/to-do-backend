import React from 'react';
import {TodoModel} from "./model/TodoModel";
import ToDoCard from "./ToDoCard";
import "./css/ToDoGallery.css"

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
                <div className={"todo-gallery-column-title"}>
                    <h2>Open</h2>
                    <p>(Items: {tasksOpen.length})</p>
                </div>


            {tasksOpen.map((current) =>
                <ToDoCard singleToDo={current} key={current.id} refreshPage={props.refreshPage}/>
            )}
            </div>
            <div className={"todo-gallery-column"}>
                <div className={"todo-gallery-column-title"}>
                    <h2>In progress</h2>
                    <p>(Items: {tasksInProgress.length})</p>
                </div>
                {tasksInProgress.map((current) =>
                    <ToDoCard singleToDo={current} key={current.id} refreshPage={props.refreshPage}/>
                )}
            </div>
            <div className={"todo-gallery-column"}>
                <div className={"todo-gallery-column-title"}>
                    <h2>Done</h2>
                    <p>(Items: {tasksDone.length})</p>
                </div>
                {tasksDone.map((current) =>
                    <ToDoCard singleToDo={current} key={current.id} refreshPage={props.refreshPage}/>
                )}
            </div>
        </div>
    );
}
    export default TodoGallery;