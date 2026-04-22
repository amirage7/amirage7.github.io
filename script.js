const yearElement = document.querySelector('.site-footer p');

if (yearElement) {
  yearElement.textContent = `© ${new Date().getFullYear()} 你的名字 · 内容小站`;
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
  );

  revealItems.forEach((item) => {
    item.style.animationPlayState = 'paused';
    observer.observe(item);
  });
}