const yearElement = document.querySelector('.site-footer p');

if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.textContent = `© ${currentYear} 你的名字 · 简单个人网站`;
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => {
    item.style.animationPlayState = 'paused';
    observer.observe(item);
  });
}
