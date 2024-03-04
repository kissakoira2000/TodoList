
import React from "react";

export default function TodoListForm(props) {
    return (
        <div>
            <fieldset>
                <legend>Add todo:</legend>
                <p>Description:</p>
                <input placeholder="Description" onChange={props.handleChange} value={props.desc} />
                <p>Date:</p>
                <input type="text" value={props.date} onChange={e => props.setDate(e.target.value)} />
                <button onClick={props.addTodo}>Add</button>
            </fieldset>
        </div>
    )
}
