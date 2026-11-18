/* ============================================
   PORTFOLIO SCRIPT — Do Cong Huy
   ============================================ */

'use strict';

// ── Theme toggle (Light / Dark) ──────────────
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('dchwy_theme');
if (savedTheme === 'dark' || savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', savedTheme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('dchwy_theme', next);
  });
}

// ── Bilingual EN / VI Dictionary ─────────────
const i18n = {
  en: {
    nav_projects: 'projects',
    nav_skills: 'skills',
    nav_about: 'education & about',
    nav_contact: 'contact',
    hero_status: 'status: open_to_ai_ml_internship',
    hero_sub: 'building reliable ML, Computer Vision & MLOps systems from notebook to production.',
    hero_desc: 'Third-year Data Science in Economics & Business (DSEB) student at National Economics University (GPA 3.82/4.0). Focused on end-to-end machine learning pipelines, deep learning for visual inspection & eKYC face recognition, and risk/fraud modeling.',
    hero_btn_projects: 'Explore Projects',
    hero_btn_cv: 'Download CV (MIT Format PDF)',
    proj_heading: 'Featured Projects',
    proj_sub: 'End-to-end systems spanning production MLOps, Computer Vision (eKYC & industrial anomaly detection), and probabilistic behavior modeling.',
    p1_desc: 'Production-grade fraud detection system covering behavioral feature engineering, multi-model benchmarking, automated hyperparameter tuning, containerized FastAPI serving, CI/CT/CD workflows on Kubernetes (GKE), and drift monitoring.',
    p2_desc: 'End-to-end multi-face detection, landmark alignment, and identity matching backend built with ONNX Runtime, SCRFD, ArcFace (ResNet-50), FastAPI, and MySQL — closely mirroring real-world eKYC verification pipelines.',
    p3_desc: 'Comparative study and PyTorch implementation of 5 unsupervised visual anomaly detection and localization paradigms on monocrystalline and polycrystalline solar cell imagery.',
    p4_desc: 'Probabilistic seller behavior modeling framework to forecast 60-day Seller Lifetime Value (LTV), rank churn/activity risk, and segment 2,248 marketplace sellers for targeted retention strategies.',
    p5_desc: 'Multi-horizon daily & hourly temperature forecasting system deployed on Hugging Face Spaces, alongside econometric volatility forecasting on Vietnam\'s VN30 equity index (2015–2026).',
    skills_heading: 'Skills & Toolkit',
    skills_sub: 'Core competencies across Machine Learning, Deep Learning/Computer Vision, MLOps infrastructure, and quantitative analysis.',
    about_p1: 'I am a third-year student majoring in <strong>Data Science in Economics and Business (DSEB)</strong> at the <strong>National Economics University (NEU)</strong>, Ha Noi, maintaining a <strong>3.82 / 4.00 GPA</strong> and earning the university\'s Academic Excellence Scholarship in both my 2nd and 5th semesters.',
    about_p2: 'My work bridges rigorous mathematical foundations (Probability & Statistics, Linear Algebra, Optimization) with software engineering discipline — taking models beyond Jupyter notebooks into Dockerized FastAPI services with automated testing and drift monitoring.',
    contact_title: 'Seeking AI / ML Engineer<br>& Data Science Internship',
    contact_desc: 'Available for full-time internship programs. Feel free to reach out regarding AI/ML engineering roles, research collaborations, or technical discussions.'
  },
  vi: {
    nav_projects: 'dự án',
    nav_skills: 'kỹ năng',
    nav_about: 'học vấn & giới thiệu',
    nav_contact: 'liên hệ',
    hero_status: 'status: sẵn_sàng_thực_tập_ai_ml',
    hero_sub: 'xây dựng hệ thống Machine Learning, Computer Vision & MLOps từ notebook ra thực tế.',
    hero_desc: 'Sinh viên năm 3 ngành Khoa học Dữ liệu trong Kinh tế & Kinh doanh (DSEB) tại Đại học Kinh tế Quốc dân (GPA 3.82/4.0). Tập trung vào pipeline ML end-to-end, thị giác máy tính (nhận diện khuôn mặt eKYC & phát hiện bất thường) và mô hình rủi ro/gian lận tài chính.',
    hero_btn_projects: 'Xem Dự Án',
    hero_btn_cv: 'Tải CV (Bản PDF chuẩn MIT)',
    proj_heading: 'Dự Án Nổi Bật',
    proj_sub: 'Các hệ thống hoàn chỉnh từ MLOps phát hiện gian lận tài chính, Computer Vision (nhận diện khuôn mặt & kiểm định lỗi công nghiệp) đến dự báo hành vi.',
    p1_desc: 'Hệ thống MLOps phát hiện gian lận tài chính: trích xuất đặc trưng hành vi giao dịch, huấn luyện & tối ưu LightGBM với Optuna, đóng gói FastAPI + Docker, tự động hóa CI/CT/CD lên Kubernetes (GKE) và giám sát drift thời gian thực.',
    p2_desc: 'Hệ thống backend nhận diện khuôn mặt điểm danh lớp học dùng SCRFD + ArcFace (ONNX Runtime), căn chỉnh 5 điểm mốc khuôn mặt, đối sánh vector 512 chiều bằng cosine similarity và quản lý qua FastAPI + MySQL.',
    p3_desc: 'Nghiên cứu và cài đặt bằng PyTorch 5 phương pháp phát hiện & khoanh vùng bất thường không giám sát (Autoencoder, GAN, PaDiM, SeMaKNN, PatchCore) trên ảnh pin mặt trời đơn tinh thể và đa tinh thể.',
    p4_desc: 'Mô hình xác suất dự báo hành vi người bán trên sàn TMĐT Olist: ước lượng 60-day LTV bằng BG/NBD & Gamma-Gamma, xếp hạng mức độ hoạt động và phân khúc 2.248 sellers bằng K-Means + Power BI.',
    p5_desc: 'Hệ thống dự báo nhiệt độ đa khung thời gian tại Hà Nội triển khai trực tiếp trên Hugging Face Spaces (XGBoost + Gradio), kết hợp mô hình hóa biến động chỉ số VN30 bằng họ mô hình GARCH (2015–2026).',
    skills_heading: 'Kỹ Năng & Công Cụ',
    skills_sub: 'Năng lực cốt lõi trải rộng từ Học máy, Thị giác máy tính (PyTorch/ONNX), hạ tầng MLOps đến phân tích định lượng.',
    about_p1: 'Mình là sinh viên năm 3 chuyên ngành <strong>Khoa học Dữ liệu trong Kinh tế và Kinh doanh (DSEB)</strong> tại <strong>Đại học Kinh tế Quốc dân (NEU)</strong> với <strong>GPA 3.82 / 4.00</strong> và 2 kỳ đạt Học bổng Khuyến khích học tập (kỳ 2 và kỳ 5).',
    about_p2: 'Mình hướng tới việc kết hợp nền tảng Toán – Thống kê vững chắc với kỹ thuật phần mềm hiện đại: đưa mô hình ra khỏi Jupyter Notebook thành các dịch vụ API đóng gói Docker, có kiểm thử tự động và giám sát chất lượng.',
    contact_title: 'Tìm Kiếm Cơ Hội Thực Tập<br>AI / ML Engineer & Data Science',
    contact_desc: 'Sẵn sàng tham gia thực tập toàn thời gian (full-time). Rất mong được kết nối và trao đổi cùng anh/chị tuyển dụng!'
  }
};

let currentLang = localStorage.getItem('dchwy_lang') || 'en';
const langToggle = document.getElementById('langToggle');

const applyLang = (lang) => {
  const dict = i18n[lang] || i18n.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });
  if (langToggle) langToggle.textContent = lang.toUpperCase();
  localStorage.setItem('dchwy_lang', lang);
};

if (currentLang !== 'en') applyLang(currentLang);
if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'vi' : 'en';
    applyLang(currentLang);
  });
}

// ── Project Category Filtering ───────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    projects.forEach(proj => {
      const cat = proj.getAttribute('data-cat');
      if (filter === 'all' || cat === filter) {
        proj.classList.remove('hidden');
      } else {
        proj.classList.add('hidden');
      }
    });
  });
});

// ── Nav scroll behavior ──────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)';
  } else {
    nav.style.boxShadow = 'none';
  }
}, { passive: true });

// ── Mobile nav toggle ────────────────────────
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    const open = navMobile.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });

  navMobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navMobile.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    });
  });
}

// ── Fade-in on scroll ────────────────────────
const fadeEls = document.querySelectorAll('.project, .skill-card, .about-stat');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, delay);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

fadeEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  el.dataset.delay = (i % 3) * 70;
  fadeObserver.observe(el);
});

// ── Active nav link highlight ─────────────────
const sections = document.querySelectorAll('section[id], header[id]');
const navLinksDesktop = document.querySelectorAll('.nav-links a');

const activateLink = (id) => {
  navLinksDesktop.forEach(a => {
    const href = a.getAttribute('href');
    if (href === `#${id}` && !a.classList.contains('nav-cta')) {
      a.style.color = 'var(--accent)';
    } else if (!a.classList.contains('nav-cta')) {
      a.style.color = '';
    }
  });
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activateLink(entry.target.id);
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(sec => sectionObserver.observe(sec));

// ── Panel row entrance animation ──────────────
const panelRowEls = document.querySelectorAll('.hero-panel .panel-row');
panelRowEls.forEach((row, i) => {
  row.style.opacity = '0';
  row.style.transform = 'translateX(8px)';
  row.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
  setTimeout(() => {
    row.style.opacity = '1';
    row.style.transform = 'translateX(0)';
  }, 80 + i * 55);
});
