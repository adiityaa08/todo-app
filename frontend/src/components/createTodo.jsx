import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    return <div>
        <input style={{
            padding:"10px",
            margin:"10px"
        }}
        type="text" placeholder="title" onChange={function(e){
            const value=e.target.value;
            setTitle(value);
        }}></input><br></br>


        <input style={{
            padding:"10px",
            margin:"10px"
        }} type="text" placeholder="description" onChange={function(e) {
            const value = e.target.value;
            setDescription(e.target.value)
        }}></input><br></br>


        <button style={{
            padding:"10px",
            margin:"10px"
        }}
        onClick={() => {
            // axios
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo added");
                })
        }}>Add a Todo</button>

    </div>
}