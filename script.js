// Smooth scroll for "Get the App" button
document.querySelector('.cta-button').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#download').scrollIntoView({ behavior: 'smooth' });
});
