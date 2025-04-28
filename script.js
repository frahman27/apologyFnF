// Scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Quiz Data
const quizData = [
  { q: "Have I ever sent an inappropriate text to my mom or dad by accident?", a: "Nope" },
  { q: "What is something I look forward to doing when I retire?", a: "Get a hobby" },
  { q: "Which type of wedding do I like?", a: "Registry Marriage" },
  { q: "What is my favorite ice cream flavor?", a: "Strawberry Cheesecake" },
  { q: "Do I prefer the beach or the mountain?", a: "Beach" },
  { q: "What is my favorite music genre?", a: "Rock" },
  { q: "Which season is my favorite?", a: "Winter" },
  { q: "What is my favorite movie genre?", a: "Comedy" },
  { q: "Do I like veg or non-veg food?", a: "Veg" },
  { q: "What is my favorite drink?", a: "Tea" },
  { q: "Which type of shopping do I like?", a: "Traditional" },
  { q: "Do I wear rings on my hand?", a: "No" },
  { q: "Do I wear glasses?", a: "Yes" },
  { q: "Which TV show can I watch on repeat?", a: "Game of Thrones" },
  { q: "What is my favorite type of vacation?", a: "Beach Holiday" }
];

// Generate Quiz Cards
const quizContainer = document.querySelector('.quiz-cards');
quizData.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <p>${item.q}</p>
      </div>
      <div class="card-back">
        <p>${item.a}</p>
      </div>
    </div>
  `;
  quizContainer.appendChild(card);
});

// Forgiveness Mini-Game
let score = 0;
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.top = Math.random() * 250 + "px";
  heart.style.left = Math.random() * 250 + "px";
  heart.onclick = () => {
    score += 10;
    scoreDisplay.textContent = "Score: " + score;
    heart.remove();
  };
  gameArea.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}

setInterval(createHeart, 800);

// Typing Letter
const letter = `Dear Love,
Even if I didn’t get all your quiz answers right,
I know you better with every moment we share.
You're my favorite adventure.
I'm sorry, and I love you more every day. 💗
Always yours, [Your Name]`;

let i = 0;
function typeLetter() {
  if (i < letter.length) {
    document.getElementById('typed-letter').innerHTML += letter.charAt(i);
    i++;
    setTimeout(typeLetter, 50);
  }
}
window.onload = typeLetter;
