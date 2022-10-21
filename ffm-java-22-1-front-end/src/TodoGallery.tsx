import React from 'react';
import {TodoModel} from "./Model/TodoModel";

type GalleryProps = {
    todoList: TodoModel[]
}

function TodoGallery(props: GalleryProps) {
    return (
        <div className={"todo-gallery"}>
            {/*ToDo: implement Todo-card*/}
            {props.todoList.map((current) => {
                return current.id
            })}
        </div>
    );
}

export default TodoGallery;