
import { useState } from 'react';
import './App.css';
import TodoListForm from './TodoList';
import TodoTable from './TodoTable';

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

  return (
    <>
      <div>
        <h1>Simple Todolist</h1>
        <div class="container2">
        </div>
        <div>
          <TodoListForm handleChange={handleChange} addTodo={addTodo} desc={desc} date={date} setDate={setDate} />
          <TodoTable todos={todos} handleDelete={handleDelete} />
        </div>
      </div >
    </>
  );
}

export default App;