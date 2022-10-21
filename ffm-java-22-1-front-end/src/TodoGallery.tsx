import React from 'react';
import {TodoModel} from "./Model/TodoModel";
import ToDoCard from "./ToDoCard";

type GalleryProps = {
    todoList: TodoModel[]
}

function TodoGallery(props: GalleryProps) {
    return (
        <div className={"todo-gallery"}>
            {/*ToDo: implement Todo-card*/}
            {props.todoList.map((current) =>
                <ToDoCard singleToDo={current} key={current.id}/>
            )}
        </div>
    );
}
    export default TodoGallery;