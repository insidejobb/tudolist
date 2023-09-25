import React, { useState } from 'react';
import TodoItem from '../Components/Todoitems';
import CompletedList from '../Components/CompletedList';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [completedItems, setCompletedItems] = useState([]); // New state for completed items
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, { text: inputText, completed: false }]);
      setInputText('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (oldText, newText) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === oldText);
    if (index !== -1) {
      newTodos[index].text = newText;
      setTodos(newTodos);
    }
  };

  const toggleComplete = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === text);
    if (index !== -1) {
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);

      // Move completed item to the CompletedList component
      if (newTodos[index].completed) {
        setCompletedItems([...completedItems, text]);
      } else {
        const newCompletedItems = [...completedItems];
        const completedIndex = newCompletedItems.indexOf(text);
        if (completedIndex !== -1) {
          newCompletedItems.splice(completedIndex, 1);
          setCompletedItems(newCompletedItems);
        }
      }
    }
  };

  return (
    <div className='todocontainer'>
      <h1 style={{color:'GrayText'}}>To-Do List</h1>
      <input className='inputstyle'
        type="text"
        placeholder="Add a new to-do"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button  className="add"onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li  className='lii'key={index}>
            <TodoItem
              text={todo.text}
              onDelete={() => removeTodo(index)}
              onEdit={editTodo}
              onComplete={toggleComplete}
            />
          </li>
        ))}
      </ul>
      <CompletedList completedItems={completedItems} />
    </div>
  );
}
