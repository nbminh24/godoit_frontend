import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleTask, onRemoveTask }) => {
  if (todos.length === 0) {
    return <p style={{ textAlign: 'center', color: '#888', marginTop: '2rem' }}>Tuyệt vời! Không có công việc nào cần làm.</p>;
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggleTask={onToggleTask}
          onRemoveTask={onRemoveTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
