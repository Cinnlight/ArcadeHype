document.addEventListener('DOMContentLoaded', () => {
    // Function to handle collapsible sections
    function handleCollapsible() {
        document.querySelectorAll('.collapsible').forEach(button => {
            const content = button.nextElementSibling;
            if (window.innerWidth > 768) {
                button.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                button.classList.remove('active');
                content.style.maxHeight = null;
            }

            button.addEventListener('click', function () {
                this.classList.toggle('active');
                if (this.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = null;
                }
            });
        });
    }

    // Initial call to handle collapsible sections
    handleCollapsible();

    // Re-check screen width when the window is resized
    window.addEventListener('resize', handleCollapsible);

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

    // Handle Comment Section Toggle
    const commentToggle = document.getElementById('commentToggle');
    const commentSection = document.getElementById('commentSection');

    commentToggle.addEventListener('click', () => {
        commentSection.classList.toggle('collapsed');
    });

    // Handle Comment Submission
    document.getElementById('submitComment').addEventListener('click', function () {
        // Get the comment text
        const commentText = document.getElementById('commentText').value;

        // Check if comment text is not empty
        if (commentText.trim() !== '') {
            // Create a new list item (li) for the comment
            const commentListItem = document.createElement('li');

            // Add the comment text
            commentListItem.innerHTML = `<span>User:</span> ${commentText}`;

            // Append the comment to the comment list
            document.getElementById('commentList').appendChild(commentListItem);

            // Clear the textarea
            document.getElementById('commentText').value = '';
        } else {
            alert('Please write a comment before submitting!');
        }
    });
});
