
import { useState } from 'react';
import './App.css';
import TodoListForm from './TodoList';
import TodoTable from './TodoTable';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function App() {
  const [desc, setDesc] = useState('');
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState('');

  const handleChange = (event) => {
    setDesc(event.target.value);
  };

  const addTodo = () => {
    const newTodo = { desc, date };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  const columns = [
    { headerName: "Description", field: "desc", filter: true, sortable: true },
    { headerName: "Date", field: "date", filter: true, sortable: true }

  ]

  return (
    <>
      <div>
        <h1>Simple Todolist</h1>
        <div class="container2">
        </div>
        <div>
          <TodoListForm handleChange={handleChange} addTodo={addTodo} desc={desc} date={date} setDate={setDate} />
          <TodoTable todos={todos} handleDelete={handleDelete} columns={columns} />
        </div>
      </div >
    </>
  );
}

export default App;