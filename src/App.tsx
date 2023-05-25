import React, {useState} from 'react';
import AddTaskForm from "./components/AddTaskForm";
import Task from "./components/Task";
import { nanoid } from 'nanoid';

import './App.css';

const App = () => {
  const [todo, setTodo] = useState([
    {todoText: 'some sleep', id: '1dsf', todoStatus: false},
    {todoText: 'some eat', id: '2dssaff', todoStatus: true},
    {todoText: 'some drink', id: '3dewtaff', todoStatus: false}
  ]);

  const [currentTask, setCurrentTask] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setCurrentTask(event.target.value);

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const todoCopy = [...todo];
    const newTodo = {
      todoText: currentTask,
      id: nanoid(),
      todoStatus: false
    };
    todoCopy.push(newTodo);
    setTodo(todoCopy);
    setCurrentTask('');
  };

  const deleteTodo = (id: string) => {
    const todoCopy = [...todo];
    const index = todoCopy.findIndex(todo => todo.id === id);
    todoCopy.splice(index, 1);

    setTodo(todoCopy);
  };

  const onMarkTask = (id: string) => {
    const todoCopy = todo.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          todoStatus: !todo.todoStatus
        };
      }
      return todo;
    });

    setTodo(todoCopy);
  };

  return (
      <div className="App">
        <AddTaskForm onAddTodo={addTodo} onChangeValue={handleInputChange} value={currentTask} />
        {todo.map(todo => (
            <Task key={todo.id} className={todo.todoStatus ? 'mark' : ''} todoText={todo.todoText} onDeleteTodo={() => deleteTodo(todo.id)} markTask={() => onMarkTask(todo.id)} status={todo.todoStatus} />
        ))}
      </div>
  );
};

export default App;
