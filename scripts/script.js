document.addEventListener('DOMContentLoaded', () => {
    // Handle collapsible sections
    document.querySelectorAll('.collapsible').forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            this.classList.toggle('active');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
  
    // Check screen width on load and set filters to open if width > 768px
    if (window.innerWidth > 768) {
        document.querySelectorAll('.collapsible').forEach(button => {
            button.classList.add('active');
            const content = button.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + 'px';
        });
    }
  
    // Handle Back to Top button
    const backToTopButton = document.getElementById('back-to-top');
  
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
  
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  
  // Re-check screen width when the window is resized
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.querySelectorAll('.collapsible').forEach(button => {
            button.classList.add('active');
            const content = button.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + 'px';
        });
    } else {
        document.querySelectorAll('.collapsible').forEach(button => {
            button.classList.remove('active');
            const content = button.nextElementSibling;
            content.style.maxHeight = null;
        });
    }
  });