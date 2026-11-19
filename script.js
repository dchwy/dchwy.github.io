/* ============================================
   PORTFOLIO SCRIPT — Do Cong Huy
   ============================================ */

'use strict';

// ── Theme toggle (Light / Dark) ──────────────
const themeToggle = document.getElementById('themeToggle');
const preferences = {
  get(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch { /* Storage may be disabled. */ }
  }
};
const savedTheme = preferences.get('dchwy_theme');
if (savedTheme === 'dark' || savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', savedTheme);
}

if (themeToggle) {
  themeToggle.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark'));
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    preferences.set('dchwy_theme', next);
    themeToggle.setAttribute('aria-pressed', String(next === 'dark'));
  });
}

// ── Bilingual EN / VI Dictionary ─────────────
const i18n = {
  en: {
    skip: 'Skip to projects',
    details: 'Technical details',
    panel_kicker: 'FROM DATA TO DECISIONS',
    panel_projects: 'Projects',
    pipeline_data: 'Data',
    pipeline_model: 'Model',
    pipeline_output: 'Output',
    filter_all: 'All (4)',
    filter_mlops: 'MLOps & FinTech',
    filter_cv: 'Computer Vision',
    filter_analytics: 'Forecasting & LTV',
    nav_projects: 'projects',
    nav_skills: 'skills',
    nav_about: 'education & about',
    nav_contact: 'contact',
    hero_status: 'Open to AI / ML internships',
    hero_sub: 'Machine learning & data science',
    hero_desc: 'Final-year Data Science in Economics & Business (DSEB) student at National Economics University (GPA 3.82/4.0). Focused on end-to-end machine learning pipelines, computer vision for face recognition, and risk/fraud modeling.',
    hero_btn_projects: 'Explore Projects',
    hero_btn_cv: 'View CV (PDF)',
    proj_heading: 'Featured Projects',
    proj_sub: 'End-to-end systems spanning production MLOps, Computer Vision (eKYC face recognition), and probabilistic behavior & time-series modeling.',
    p1_desc: 'End-to-end fraud detection pipeline covering data preprocessing, behavioral feature engineering, SMOTE class balancing, multi-model benchmarking, Optuna tuning, threshold-based inference, and Dockerized MLflow experiment tracking.',
    p2_desc: 'Face recognition modeling and relational database design for an automated classroom attendance system using SCRFD, ArcFace (ResNet-50 ONNX), OpenCV, and MySQL.',
    p4_desc: 'Probabilistic seller behavior modeling framework to forecast 60-day Seller Lifetime Value (LTV), rank churn/activity risk, and segment 2,248 marketplace sellers for targeted retention strategies.',
    p5_desc: 'Multi-horizon daily & hourly temperature forecasting system deployed on Hugging Face Spaces, alongside econometric volatility forecasting on Vietnam\'s VN30 equity index (2015–2026).',
    skills_heading: 'Skills & Toolkit',
    skills_sub: 'Core competencies across Machine Learning, Deep Learning/Computer Vision, MLOps infrastructure, and quantitative analysis.',
    about_p1: 'I am a final-year student majoring in <strong>Data Science in Economics and Business (DSEB)</strong> at the <strong>National Economics University (NEU)</strong>, Ha Noi, maintaining a <strong>3.82 / 4.00 GPA</strong> and earning the university\'s Academic Excellence Scholarship in both my 2nd and 5th semesters.',
    about_p2: 'My work bridges rigorous mathematical foundations (Probability & Statistics, Linear Algebra, Optimization) with software engineering discipline — taking models beyond Jupyter notebooks into Dockerized FastAPI services with automated testing and drift monitoring.',
    contact_title: 'Seeking AI / ML Engineer<br>& Data Science Internship',
    contact_desc: 'Open to internship opportunities in AI/ML engineering and data science. Feel free to reach out to discuss a role or project.'
  },
  vi: {
    skip: 'Bỏ qua đến phần dự án',
    details: 'Chi tiết kỹ thuật',
    panel_kicker: 'TỪ DỮ LIỆU ĐẾN QUYẾT ĐỊNH',
    panel_projects: 'Dự án',
    pipeline_data: 'Dữ liệu',
    pipeline_model: 'Mô hình',
    pipeline_output: 'Kết quả',
    filter_all: 'Tất cả (4)',
    filter_mlops: 'MLOps & FinTech',
    filter_cv: 'Thị giác máy tính',
    filter_analytics: 'Dự báo & LTV',
    nav_projects: 'dự án',
    nav_skills: 'kỹ năng',
    nav_about: 'học vấn & giới thiệu',
    nav_contact: 'liên hệ',
    hero_status: 'Tìm cơ hội thực tập AI / ML',
    hero_sub: 'Học máy & khoa học dữ liệu',
    hero_desc: 'Sinh viên năm cuối ngành Khoa học Dữ liệu trong Kinh tế & Kinh doanh (DSEB) tại Đại học Kinh tế Quốc dân (GPA 3.82/4.0). Tập trung vào pipeline ML end-to-end, thị giác máy tính (nhận diện khuôn mặt) và mô hình rủi ro/gian lận tài chính.',
    hero_btn_projects: 'Xem Dự Án',
    hero_btn_cv: 'Xem CV (PDF)',
    proj_heading: 'Dự Án Nổi Bật',
    proj_sub: 'Các hệ thống hoàn chỉnh từ MLOps phát hiện gian lận tài chính, Computer Vision (nhận diện khuôn mặt eKYC) đến dự báo hành vi & chuỗi thời gian.',
    p1_desc: 'Hệ thống phát hiện gian lận tài chính: xử lý dữ liệu & đặc trưng hành vi trên pipeline DVC, cân bằng mẫu bằng SMOTE, so sánh đa mô hình, tối ưu tham số bằng Optuna, suy luận theo ngưỡng (threshold-based) và theo dõi quá trình huấn luyện với MLflow + Docker.',
    p2_desc: 'Tham gia xây dựng mô hình nhận diện khuôn mặt và thiết kế cơ sở dữ liệu cho hệ thống điểm danh lớp học dùng SCRFD, ArcFace (ResNet-50 ONNX), OpenCV và MySQL 7 bảng.',
    p4_desc: 'Mô hình xác suất dự báo hành vi người bán trên sàn TMĐT Olist: ước lượng 60-day LTV bằng BG/NBD & Gamma-Gamma, xếp hạng mức độ hoạt động và phân khúc 2.248 sellers bằng K-Means + Power BI.',
    p5_desc: 'Hệ thống dự báo nhiệt độ đa khung thời gian tại Hà Nội triển khai trực tiếp trên Hugging Face Spaces (XGBoost + Gradio), kết hợp mô hình hóa biến động chỉ số VN30 bằng họ mô hình GARCH (2015–2026).',
    skills_heading: 'Kỹ Năng & Công Cụ',
    skills_sub: 'Năng lực cốt lõi trải rộng từ Học máy, Thị giác máy tính (PyTorch/ONNX), hạ tầng MLOps đến phân tích định lượng.',
    about_p1: 'Mình là sinh viên năm cuối chuyên ngành <strong>Khoa học Dữ liệu trong Kinh tế và Kinh doanh (DSEB)</strong> tại <strong>Đại học Kinh tế Quốc dân (NEU)</strong> với <strong>GPA 3.82 / 4.00</strong> và 2 kỳ đạt Học bổng Khuyến khích học tập (kỳ 2 và kỳ 5).',
    about_p2: 'Mình hướng tới việc kết hợp nền tảng Toán – Thống kê vững chắc với kỹ thuật phần mềm hiện đại: đưa mô hình ra khỏi Jupyter Notebook thành các dịch vụ API đóng gói Docker, có kiểm thử tự động và giám sát chất lượng.',
    contact_title: 'Tìm Kiếm Cơ Hội Thực Tập<br>AI / ML Engineer & Data Science',
    contact_desc: 'Mình đang tìm cơ hội thực tập về AI/ML và khoa học dữ liệu. Rất mong được trao đổi về các vị trí hoặc dự án phù hợp!'
  }
};

let currentLang = preferences.get('dchwy_lang') || 'en';
const langToggle = document.getElementById('langToggle');

const applyLang = (lang) => {
  const dict = i18n[lang] || i18n.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });
  if (langToggle) langToggle.textContent = lang.toUpperCase();
  preferences.set('dchwy_lang', lang);
};

if (currentLang !== 'en') applyLang(currentLang);
if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'vi' : 'en';
    applyLang(currentLang);
  });
}


const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    projects.forEach(project => {
      project.hidden = filter !== 'all' && project.dataset.cat !== filter;
    });
  });
});

const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

function setMenu(open) {
  navMobile.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

navToggle.addEventListener('click', () => {
  setMenu(navToggle.getAttribute('aria-expanded') === 'false');
});
navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    setMenu(false);
    document.querySelector(link.hash)?.focus({ preventScroll: true });
  });
});
document.getElementById('nav').addEventListener('keydown', event => {
  if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    navToggle.focus();
  }
});
