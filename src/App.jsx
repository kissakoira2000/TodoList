
import { useState } from 'react';
import './App.css';
import TodoListForm from './TodoList';
import TodoTable from './TodoTable';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import dayjs from 'dayjs';

function App() {
  const [desc, setDesc] = useState('');
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState(dayjs());

  const handleChange = (event) => {
    setDesc(event.target.value);
  };

  const addTodo = () => {
    const newTodo = { desc, date: date.format('YYYY-MM-DD') };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  const columns = [
    { headerName: "Description", field: "desc", filter: true, sortable: true },
    { headerName: "Date", field: "date", filter: true, sortable: true },
  ]

  return (
    <>
      <div>
        <h1>Simple Todolist</h1>
        <div className="container2">
        </div>
        <div>
          <TodoListForm handleChange={handleChange} addTodo={addTodo} desc={desc} date={date} setDate={setDate} />
          <TodoTable todos={todos} columns={columns} handleDelete={handleDelete} />
        </div>
      </div >
    </>
  );
}

export default App;