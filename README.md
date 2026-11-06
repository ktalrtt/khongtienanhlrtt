# Website kỷ yếu – khongtienanhlrtt

## Đưa website lên GitHub Pages
1. Giải nén thư mục này.
2. Trên GitHub, tạo repository mới tên `khongtienanhlrtt` (để URL có dạng `https://TEN-USERNAME.github.io/khongtienanhlrtt/`).
3. Upload toàn bộ file và thư mục trong thư mục này lên repository (đừng upload nguyên thư mục lồng bên ngoài).
4. Vào **Settings → Pages**.
5. Ở **Build and deployment**, chọn **Deploy from a branch**, branch `main`, folder `/ (root)`, rồi Save.
6. Đợi GitHub Pages triển khai xong. Địa chỉ sẽ là `https://TEN-USERNAME.github.io/khongtienanhlrtt/`.

> Lưu ý: GitHub Pages không cung cấp tài khoản quản trị riêng cho website tĩnh. Vì vậy khách chỉ xem; chủ website chỉnh sửa nội dung/ảnh/nền bằng cách sửa file trong repository GitHub. Chỉ cấp quyền collaborator cho người thật sự được phép sửa.

## Chỉnh sửa nội dung
Mở `config.js` trên GitHub và bấm biểu tượng bút chì để sửa:
- `gateTitle`, `gateCopy`: nội dung trang nhập tên.
- `mainTitle`, `mainMessage`: lời mời.
- `eventDate`, `eventPlace`: thời gian và địa điểm.
- `rsvpEmail`: email nhận phản hồi.
- `coverImage`, `gallery`: ảnh bìa và ảnh thư viện.

## Thay ảnh
Upload ảnh vào `assets/`, sau đó cập nhật đường dẫn trong `config.js`.
Ví dụ: `coverImage: "assets/anh-lop.jpg"`.

## Thay ảnh nền
Mở `style.css`, tìm `url("assets/login-bg.svg")` trong `.gate` để thay nền trang đầu. Muốn thay nền trang chính, thêm `background-image` cho `.invitation` hoặc `.hero`.
