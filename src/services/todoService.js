import axios from 'axios';

const API_URL = 'https://godoit-backend.onrender.com/tasks';

// 1. Lấy danh sách công việc
const getTasks = () => {
  return axios.get(API_URL);
};

// 2. Thêm công việc mới
const createTask = (taskData) => {
  // Backend mong muốn có cả title và description, form hiện tại chỉ có title
  // Tạm thời gửi description là một chuỗi rỗng
  const newTask = {
    title: taskData.title,
    description: '',
  };
  return axios.post(API_URL, newTask);
};

// 3. Cập nhật trạng thái công việc
const updateTask = (id, taskData) => {
  return axios.put(`${API_URL}/${id}`, taskData);
};

// 4. Xóa một công việc
const deleteTask = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

const todoService = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};

export default todoService;
