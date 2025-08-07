# Godoit - Ứng dụng Quản lý Công việc

🚀 **Live Demo:** [https://godoit.vercel.app/](https://godoit.vercel.app/) 🚀

Đây là một ứng dụng web hiện đại dùng để quản lý danh sách công việc (To-Do List). Giao diện được thiết kế theo phong cách tối giản, trực quan với backend API được xây dựng bằng Golang. Dự án này được phát triển như một phần của bài kiểm tra kỹ năng cho vị trí Intern Developer.

## Các tính năng chính

- **Quản lý công việc toàn diện (CRUD):**
    - **Thêm công việc:** Form nhập liệu cho phép người dùng nhanh chóng thêm công việc mới.
    - **Hiển thị danh sách:** Tất cả công việc được hiển thị rõ ràng trên giao diện chính.
    - **Cập nhật trạng thái:** Dễ dàng đánh dấu một công việc là đã hoàn thành hoặc chưa hoàn thành chỉ với một cú nhấp chuột.
    - **Xóa công việc:** Xóa các công việc không còn cần thiết.
- **Giao diện hiện đại và tương thích:**
    - **Thiết kế Responsive:** Giao diện tự động điều chỉnh để mang lại trải nghiệm tốt nhất trên cả máy tính và thiết bị di động.
    - **Dark Mode:** Giao diện tối giúp giảm mỏi mắt và tạo cảm giác hiện đại.
- **Trải nghiệm người dùng nâng cao (UX):**
    - **Thông báo tức thì (Toast Notification):** Phản hồi ngay lập tức cho người dùng sau mỗi hành động (thêm, xóa, cập nhật thành công hoặc khi có lỗi).
    - **Trạng thái tải (Loading State):** Hiển thị spinner trong khi chờ tải dữ liệu từ backend, giúp người dùng biết hệ thống đang xử lý.
    - **Xử lý trạng thái rỗng:** Hiển thị thông báo thân thiện khi không có công việc nào trong danh sách.
    - **Xác thực đầu vào (Validation):** Ngăn người dùng thêm công việc trống và hiển thị cảnh báo.

## Công nghệ và Công cụ

- **Framework:** ReactJS - Thư viện JavaScript phổ biến để xây dựng giao diện người dùng.
- **HTTP Client:** Axios - Được sử dụng để thực hiện các yêu cầu API đến backend một cách hiệu quả.
- **Styling:** CSS Modules - Giúp đóng gói CSS theo từng component, tránh xung đột và dễ dàng quản lý.
- **Notifications:** React Toastify - Thư viện chuyên dụng để tạo các thông báo toast đẹp mắt và linh hoạt.
- **Package Manager:** NPM - Trình quản lý gói mặc định của Node.js.
- **Backend:** Kết nối với API ngoài được xây dựng bằng Golang (Gin Framework) và deploy trên Render.

## Hướng dẫn sử dụng

### Cài đặt và Chạy dự án local

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/nbminh24/godoit_frontend.git
    cd godoit_frontend
    ```

2.  **Cấu hình biến môi trường:**
    Sao chép tệp `.env.example` để tạo tệp `.env.local` mới và điền URL của backend API.
    ```sh
    cp .env.example .env.local
    ```

    Nội dung tệp `.env.local`:
    ```
    REACT_APP_API_URL=https://godoit-backend.onrender.com
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

4.  **Run the development server:**
    Ứng dụng sẽ có sẵn tại `http://localhost:3000`.
    ```sh
    npm start
    ```

### Truy cập phiên bản đã deploy

Dự án đã được build và deploy lên Vercel. Bạn có thể truy cập và trải nghiệm phiên bản live của ứng dụng tại địa chỉ:

[https://godoit.vercel.app/](https://godoit.vercel.app/)
