// Toggle mobile menu
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('active');
  });
});