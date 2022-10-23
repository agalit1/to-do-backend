import React from 'react';
import {TodoModel} from "./Model/TodoModel";
import "./Css/ToDo.css";
import axios from "axios";

type ToDoCardProps = {
    refreshPage: () => void,
    singleToDo:TodoModel
}

function ToDoCard(props: ToDoCardProps) {

    const updateTask = (id: string, description: string, status: string) => {
        let newStatus = status;

        switch (newStatus) {
            case "OPEN":
                newStatus = "IN_PROGRESS";
                break;
            case "IN_PROGRESS":
                newStatus = "DONE";
                break;
        }

        axios.put("/api/todo/"+id, {id:id, description: description, status: newStatus})
            .catch((error) => console.log("puterror " + error))
            .then(props.refreshPage)// calls getTodoList() from App.tsx
            .catch((error) => console.log("geterror " + error))
    }

    const deleteTask = (id: string) =>
        axios.delete("/api/todo/"+id)
            .catch((error) => console.log("puterror " + error))
            .then(props.refreshPage)// calls getTodoList() from App.tsx
            .catch((error) => console.log("geterror " + error))

    let advanceButtonText = "Advance";
    let advanceButtonClass = ""
    if(props.singleToDo.status === "DONE") {
        advanceButtonText = "Delete"
        advanceButtonClass = "delete"
    }

    return (
        <div className={"todo-card"}>
        <h3 className="description">{props.singleToDo.description}</h3>
        <p className="status">{props.singleToDo.status}</p>
        <p className="id">{props.singleToDo.id}</p>
        <div className={"button-row"}>
            <button>Details</button>
            <button>Edit</button>
            <button className={advanceButtonClass} onClick={() => {
                if(props.singleToDo.status === "DONE") {
                    deleteTask(props.singleToDo.id);
                }
                else{
                    updateTask(
                        props.singleToDo.id,
                        props.singleToDo.description,
                        props.singleToDo.status);
                }
            }
            }
            >{advanceButtonText}</button>

        </div>
        </div>
    );
}

export default ToDoCard;