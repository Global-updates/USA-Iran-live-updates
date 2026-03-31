const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const year = document.getElementById('year');
const storedTheme = localStorage.getItem('theme');

if (storedTheme === 'light') {
  document.body.classList.add('light');
  themeIcon.textContent = '☀️';
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');

    themeIcon.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));
