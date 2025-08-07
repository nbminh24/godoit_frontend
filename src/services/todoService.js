import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 1. Lấy danh sách công việc
const getTasks = () => {
  return apiClient.get('/tasks');
};

// 2. Thêm công việc mới
const createTask = (taskData) => {
  return apiClient.post('/tasks', taskData);
};

// 3. Cập nhật trạng thái công việc
const updateTask = (id, taskData) => {
  return apiClient.put(`/tasks/${id}`, taskData);
};

// 4. Xóa một công việc
const deleteTask = (id) => {
  return apiClient.delete(`/tasks/${id}`);
};

const todoService = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};

export default todoService;
