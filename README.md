# Do Cong Huy — Portfolio

Trang portfolio cá nhân tại `https://dchwy.github.io`

## Hướng dẫn deploy lên GitHub Pages

### Bước 1 — Tạo repo mới trên GitHub

1. Vào **github.com/new**
2. Đặt tên repo là: `dchwy.github.io`  
   (phải đúng format `<username>.github.io`)
3. Để **Public**
4. **KHÔNG** tick "Add a README" — để trống
5. Bấm **Create repository**

---

### Bước 2 — Thêm CV PDF (tuỳ chọn)

Đặt file CV vào thư mục `assets/`:

```
portfolio/
  index.html
  style.css
  script.js
  assets/
    Do_Cong_Huy_CV.pdf   ← đặt file CV vào đây
```

Nếu chưa có CV PDF, xoá hoặc comment dòng này trong `index.html`:
```html
<a href="/assets/Do_Cong_Huy_CV.pdf" class="btn btn-ghost" download>Tải CV (PDF)</a>
```

---

### Bước 3 — Upload file lên repo

Có 2 cách:

**Cách A — Dùng Git (khuyến nghị):**

```bash
# Di chuyển vào thư mục portfolio
cd đường-dẫn-đến-thư-mục-portfolio

# Khởi tạo git
git init
git add .
git commit -m "init: portfolio"

# Kết nối với repo GitHub vừa tạo
git remote add origin https://github.com/dchwy/dchwy.github.io.git
git branch -M main
git push -u origin main
```

**Cách B — Upload thủ công trên web:**

1. Vào repo `dchwy.github.io` trên GitHub
2. Bấm **Add file → Upload files**
3. Kéo thả 3 file: `index.html`, `style.css`, `script.js`
4. Nếu có folder `assets/`, phải tạo folder riêng: bấm **Create new file**, gõ `assets/Do_Cong_Huy_CV.pdf`, rồi upload
5. Bấm **Commit changes**

---

### Bước 4 — Bật GitHub Pages

1. Vào repo → tab **Settings**
2. Kéo xuống phần **Pages** (menu bên trái)
3. Trong **Source**, chọn **Deploy from a branch**
4. Chọn branch: `main`, folder: `/ (root)`
5. Bấm **Save**

---

### Bước 5 — Kiểm tra

Sau 1–2 phút, vào: **https://dchwy.github.io**

Nếu chưa thấy, đợi thêm 1–3 phút rồi reload.

---

## Tuỳ chỉnh sau khi deploy

| Muốn thay đổi | Chỉnh ở đâu |
|---|---|
| Thêm project mới | `index.html` → copy 1 `<article class="project">` |
| Đổi màu accent | `style.css` → `--accent: #1f7a4d` |
| Cập nhật số liệu metrics | `index.html` → phần `.hero-panel` và `script.js` → `targets[]` |
| Thêm link LinkedIn | `index.html` → phần `.hero-meta` |
| Đổi threshold điểm danh | `index.html` → project 03 stats |

---

## Cấu trúc file

```
portfolio/
├── index.html    # toàn bộ nội dung HTML
├── style.css     # thiết kế, màu sắc, layout
├── script.js     # animation, tương tác
└── assets/
    └── Do_Cong_Huy_CV.pdf
```
