
    document.addEventListener('DOMContentLoaded', function () {
      const commentForm = document.getElementById('comment-form');
      const commentsContainer = document.getElementById('comments');

      commentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('comment');

        const name = nameInput.value;
        const comment = commentInput.value;

        if (name && comment) {
          const newComment = document.createElement('div');
          newComment.className = 'comment';
          newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
          
          commentsContainer.appendChild(newComment);

          nameInput.value = '';
          commentInput.value = '';
        }
      });
    });
  