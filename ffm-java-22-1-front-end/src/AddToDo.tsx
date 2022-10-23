import React, {ChangeEvent, useState} from 'react';
import axios from "axios";


type AddToDoProps = {
    refreshPage: () => void
}
function AddToDo(props: AddToDoProps) {

    const addToDo = (text: string) => {
        axios.post("/api/todo", {description: text, status: "OPEN"})
            .catch((error) => console.log("posterror " + error))
            .then(props.refreshPage)// calls getTodoList() from App.tsx
            .catch((error) => console.log("geterror " + error))

    }

    const[text, setText] = useState("")
    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    return (
        <div>
            <input type='text'
                   onChange={ onTextChange} value={text}/>
                <button onClick = {()=> addToDo(text)}>Add ToDo</button>
        </div>

    );
}

export default AddToDo;