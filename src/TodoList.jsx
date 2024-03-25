import React from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function TodoListForm(props) {
    return (
        <Stack>
            <fieldset>
                <legend>Add todo:</legend>
                <p>Description:</p>
                <TextField placeholder="Description" onChange={props.handleChange} value={props.desc} />
                <p>Date:</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={props.date}
                        onChange={props.setDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <Button onClick={props.addTodo}>Add</Button>
            </fieldset>
        </Stack>
    )
}