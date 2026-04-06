const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

if (form && message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    message.textContent = 'Thanks! Your message has been captured. We will contact you soon.';
    form.reset();
  });
}
