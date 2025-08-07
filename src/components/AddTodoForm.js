import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './AddTodoForm.module.css';

const AddTodoForm = ({ onAddTask, isAdding }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.warn('Vui lòng nhập nội dung công việc!', {
        autoClose: 2000,
        hideProgressBar: true,
      });
      return;
    }
    onAddTask(title);
    setTitle('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className={styles.button} disabled={isAdding}>
        {isAdding ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  );
};

export default AddTodoForm;
