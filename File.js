// Smooth scrolling for navigation
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Handle contact form submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for contacting MedCart! We will get back to you soon.');
  form.reset();
});
