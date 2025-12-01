import { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState('');
  const [listInputs, setListInputs] = useState({});

  const handleAddTodo = () => {
    if (headingInput.trim() !== '') {
      setTodos([...todos, { heading: headingInput, items: [] }]);
      setHeadingInput('');
    }
  };
  const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() !== '') {
      const newTodos = [...todos];
      newTodos[index].items.push(listInputs[index]);
      setTodos(newTodos);
      setListInputs({ ...listInputs, [index]: '' });
    }
  };
  const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value });
  }
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {setHeadingInput(e.target.value);}}  
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <div className="heading_todo">
              <h3 className="todo-heading">{todo.heading}</h3>
              <button className="delete-heading-button" onClick={() => handleDeleteTodo(index)}>Delete Heading</button>
          </div>
          <ul className="todo-items">
            {todo.items.map((item, itemIndex) => (
              <li key={itemIndex} className="todo_inside_list">
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <div className='add_list'>
            <input
              type="text"
              className="list-input"
              placeholder="Enter list item"
              value={listInputs[index] || ''}
              onChange={(e) => handleListInputChange(index, e.target.value)}/>
              <button className="add-list-button" onClick={() => handleAddList(index)}>Add List Item</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
