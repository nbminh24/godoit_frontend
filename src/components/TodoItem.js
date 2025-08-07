import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, onToggleTask, onRemoveTask }) => {
  return (
    <div className={`${styles.card} ${todo.is_done ? styles.completed : ''}`}>
      <div className={styles.content}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.is_done}
          onChange={() => onToggleTask(todo.id)}
        />
        <div className={styles.textContainer}>
          <h3 className={styles.title}>{todo.title}</h3>
          {/* We can add description here if needed */}
        </div>
      </div>
      <button 
        className={styles.deleteButton} 
        onClick={() => onRemoveTask(todo.id)}
      >
        ×
      </button>
    </div>
  );
};

export default TodoItem;
