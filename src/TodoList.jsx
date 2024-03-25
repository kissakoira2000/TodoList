import React from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';

export default function TodoListForm(props) {
    return (
        <div>
            <fieldset>
                <legend>Add todo:</legend>
                <p>Description:</p>
                <input placeholder="Description" onChange={props.handleChange} value={props.desc} />
                <p>Date:</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={props.date}
                        onChange={props.setDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <button onClick={props.addTodo}>Add</button>
            </fieldset>
        </div>
    )
}