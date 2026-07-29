const HEADER_HTML = `
  <div class="container header-inner">
    <a href="index.html" class="logo">
      <span class="logo-name">Sude Demirbaş</span>
      <span class="logo-tag">Diyetisyen</span>
    </a>
    <nav>
      <ul class="nav-list" id="nav-list">
        <li><a href="index.html" data-page="index">Anasayfa</a></li>
        <li><a href="hakkimda.html" data-page="hakkimda">Hakkımda</a></li>
        <li><a href="hizmetler.html" data-page="hizmetler">Hizmetler</a></li>
        <li><a href="blog.html" data-page="blog">Blog</a></li>
        <li><a href="iletisim.html" data-page="iletisim">İletişim</a></li>
      </ul>
    </nav>
    <div class="header-actions">
      <a href="iletisim.html" class="btn btn-primary">Randevu Al</a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Menüyü aç/kapat">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
`;

const FOOTER_HTML = `
  <div class="container footer-grid">
    <div class="footer-brand">
      <span class="logo-name">Sude Demirbaş</span>
      <p class="footer-desc">Bilimsel temelli, kişiye özel beslenme programlarıyla sağlıklı ve sürdürülebilir bir yaşama giden yolda yanınızdayım.</p>
      <div class="footer-social">
        <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
        <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.9c0-1.64-.03-3.75-2.29-3.75-2.3 0-2.65 1.8-2.65 3.63V23h-4V8z"/></svg></a>
        <a href="#" aria-label="Whatsapp"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.8 14.2c-.3.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5-.1.2-.1.3-.3.5l-.4.5c-.1.1-.3.3-.1.6.2.3.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.7 1.7.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.5.2.5.3.1.2.1.7-.2 1.4z"/></svg></a>
      </div>
    </div>
    <div>
      <h4 class="footer-heading">Sayfalar</h4>
      <ul class="footer-links">
        <li><a href="index.html">Anasayfa</a></li>
        <li><a href="hakkimda.html">Hakkımda</a></li>
        <li><a href="hizmetler.html">Hizmetler</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="iletisim.html">İletişim</a></li>
      </ul>
    </div>
    <div>
      <h4 class="footer-heading">İletişim</h4>
      <ul class="footer-links">
        <li>0535 290 94 43</li>
        <li>İstanbul, Türkiye</li>
        <li>info@sudedemirbas.com</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">© 2026 Sude Demirbaş Diyetisyenlik. Tüm hakları saklıdır.</div>
`;

function initLayout() {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  header.innerHTML = HEADER_HTML;
  footer.innerHTML = FOOTER_HTML;

  const currentPage = document.body.dataset.page;
  document.querySelectorAll('.nav-list a').forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    }
  });

  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });
}

function initStickyHeader() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initRevealAnimation() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach((item) => observer.observe(item));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;
  const animate = (el) => {
    const target = parseInt(el.dataset.counter, 10);
    const duration = 1500;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach((counter) => observer.observe(counter));
}

function initBlogFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.blog-card');
  if (!buttons.length) return;
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const success = document.getElementById('form-success');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    success.classList.remove('visible');

    if (!name.value.trim()) {
      nameError.textContent = 'Lütfen adınızı girin.';
      valid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = 'Geçerli bir e-posta adresi girin.';
      valid = false;
    }
    if (!message.value.trim()) {
      messageError.textContent = 'Lütfen bir mesaj yazın.';
      valid = false;
    }

    if (valid) {
      success.classList.add('visible');
      form.reset();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLayout();
  initStickyHeader();
  initRevealAnimation();
  initSmoothScroll();
  initCounters();
  initBlogFilter();
  initContactForm();
});
