document.addEventListener('DOMContentLoaded', () => {
  // Handle collapsible sections
  document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', function() {
      // Find the next sibling which should be the content section
      const content = this.nextElementSibling;

      // Toggle the "active" class on the button
      this.classList.toggle('active');

      // Toggle the max-height to show or hide the content
      if (this.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  // Handle Back to Top button
  const backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) { // Show button after scrolling down 100px
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
