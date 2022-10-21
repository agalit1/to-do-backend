import React, {ChangeEvent, useEffect, useState} from 'react';
import {TodoModel} from "./Model/TodoModel";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

function AddToDo() {

    //input feld
    //axios post = useEffect wenn todo sich ändert
    //input mit button => oncklick dann setTodo
    //


    const [todo, setToDo] = useState<TodoModel>()
    useEffect(() => {
        axios.post("/api/todo", todo)
            .then(e => console.log(e.status))
            .catch((error) => console.log(error))
    }, [todo])

    const addToDo = (description:string) => {
        let toDoNew : TodoModel ={description:description,status:"OPEN", id:"5"}
        setToDo(toDoNew);

    }

/*    const handleSubmit = (f) => {
    f.preventDefault();
    }*/

    const[text, setText] = useState("")
    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }


    return (
        // <form onSubmit={handleSubmit}>
        <div>
            <input type='text'
                   onChange={ onTextChange} value={text}/>
                <button onClick = {()=> addToDo(text)}>Add ToDo</button>
        </div>
        // </form>


        // <div>
        //     <form onSubmit={event => console.log(event.target) }>
        //         <input
        //             type="text"
        //             value="lala"
        //             //onSubmit={(e)=>console.log("gaga")}
        //             />
        //         <input
        //             type="submit"
        //             value="add"
        //             //onSubmit={(e)=>console.log(e.target)}
        //            // onChange={(e) => console.log(e.target.value)}
        //         />Add ToDo
        //
        //     </form>
        // </div>
    );
}

export default AddToDo;