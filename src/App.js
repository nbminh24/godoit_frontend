import React, { useState, useEffect } from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import todoService from './services/todoService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    todoService.getTasks()
      .then(response => {
        const formattedTodos = response.data.map(task => ({
          ...task,
          is_done: task.completed,
        }));
        setTodos(formattedTodos || []);
      })
      .catch(error => {
        console.error('Lỗi khi lấy danh sách công việc:', error);
        toast.error('Không thể tải danh sách công việc.', { autoClose: 2000, hideProgressBar: true });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const addTask = (title) => {
    setIsAdding(true);
    todoService.createTask({ title })
      .then(response => {
        const newTask = {
          id: response.data.id,
          title: title,
          is_done: false,
          description: ''
        };
        setTodos([newTask, ...todos]);
        toast.success('Thêm công việc thành công!', { autoClose: 2000, hideProgressBar: true });
      })
      .catch(error => {
        console.error('Lỗi khi thêm công việc:', error);
        toast.error('Thêm công việc thất bại!', { autoClose: 2000, hideProgressBar: true });
      })
      .finally(() => {
        setIsAdding(false);
      });
  };

  const toggleTask = (id) => {
    const task = todos.find(t => t.id === id);
    if (!task) return;

    const updatedTaskData = { completed: !task.is_done };

    todoService.updateTask(id, updatedTaskData)
      .then(response => {
        setTodos(todos.map(t =>
          t.id === id ? { ...t, is_done: response.data.completed } : t
        ));
        toast.success('Cập nhật trạng thái thành công!', { autoClose: 2000, hideProgressBar: true });
      })
      .catch(error => {
        console.error('Lỗi khi cập nhật công việc:', error);
        toast.error('Cập nhật trạng thái thất bại!', { autoClose: 2000, hideProgressBar: true });
      });
  };

  const removeTask = (id) => {
    todoService.deleteTask(id)
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
        toast.success('Xóa công việc thành công!', { autoClose: 2000, hideProgressBar: true });
      })
      .catch(error => {
        console.error('Lỗi khi xóa công việc:', error);
        toast.error('Xóa công việc thất bại!', { autoClose: 2000, hideProgressBar: true });
      });
  };

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1>Godoit</h1>
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <AddTodoForm onAddTask={addTask} isAdding={isAdding} />
          <TodoList
            todos={todos}
            onToggleTask={toggleTask}
            onRemoveTask={removeTask}
          />
        </>
      )}
    </div>
  );
}

export default App;


