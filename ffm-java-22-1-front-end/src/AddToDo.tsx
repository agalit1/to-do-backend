import React, {ChangeEvent, FormEvent, useState} from 'react';
import axios from "axios";


type AddToDoProps = {
    refreshPage: () => void
}
function AddToDo(props: AddToDoProps) {

    const addToDo = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(text.trim()) {
            axios.post("/api/todo", {description: text, status: "OPEN"})
                .catch((error) => console.log("posterror " + error))
                .then(props.refreshPage)// calls getTodoList() from App.tsx
                .catch((error) => console.log("geterror " + error))
                .then(() => setText(""))
        }
        else {
            alert("Please specify the title of the new todo.")
        }
    }

    const[text, setText] = useState("")
    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    return (
        <div className={"input-area"}>
            <form onSubmit ={addToDo}>
            <input type='text'
                   onChange={ onTextChange} value={text}/>
                <button>Add ToDo</button>
            </form>
        </div>
    );
}

export default AddToDo;