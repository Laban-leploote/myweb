document.getElementById('yesButton').addEventListener('click', function () {
    const responseDiv = document.getElementById('response');
    responseDiv.classList.remove('hidden');
    responseDiv.innerHTML = `<p class="response-message">💕❤❤!</p>`;
  });
  
  document.getElementById('noButton').addEventListener('click', function () {
    const responseDiv = document.getElementById('response');
    responseDiv.classList.remove('hidden');
    responseDiv.innerHTML = `<p class="response-message">boooo booo boooo👎!</p>`;
  });