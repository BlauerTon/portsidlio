// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Nice to hear from you!');
  this.reset();
});

// Intersection Observer for Section Animations
const sections = document.querySelectorAll('.section');
const options = { threshold: 0.2 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 1s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => observer.observe(section));
