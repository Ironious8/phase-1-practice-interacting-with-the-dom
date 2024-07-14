let counter = document.getElementById('counter');
let count = 0;
let timer = setInterval(incrementCounter, 1000);
let isPaused = false;
let likes = {};

function incrementCounter() {
  if (!isPaused) {
    count++;
    counter.textContent = count;
  }
}

document.getElementById('plus').addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

document.getElementById('minus').addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

document.getElementById('heart').addEventListener('click', () => {
  likes[count] = likes[count] ? likes[count] + 1 : 1;
  displayLikes();
});

function displayLikes() {
  let likesList = document.querySelector('.likes');
  likesList.innerHTML = '';
  for (let key in likes) {
    let li = document.createElement('li');
    li.textContent = `${key} has been liked ${likes[key]} times`;
    likesList.appendChild(li);
  }
}

let pauseButton = document.getElementById('pause');

pauseButton.addEventListener('click', () => {
  isPaused = !isPaused;
  pauseButton.textContent = isPaused ? 'resume' : 'pause';
  toggleButtons();
});

function toggleButtons() {
  document.getElementById('plus').disabled = isPaused;
  document.getElementById('minus').disabled = isPaused;
  document.getElementById('heart').disabled = isPaused;
}

document.getElementById('comment-form').addEventListener('submit', (event) => {
  event.preventDefault();
  let commentInput = document.getElementById('comment-input');
  let commentText = commentInput.value;
  if (commentText !== '') {
    let commentDiv = document.getElementById('comments');
    let p = document.createElement('p');
    p.textContent = commentText;
    commentDiv.appendChild(p);
    commentInput.value = '';
  }
});
