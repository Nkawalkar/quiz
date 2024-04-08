const questions = [
    {
        question: "Question 1?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: 0 // Index of correct option
    },
    {
        question: "Question 2?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: 1
    },
    {
        question: "Question 3?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: 2
    },
    {
        question: "Question 4?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: 3
    },
    {
        question: "Question 5?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 10; // Time in seconds per question
let timerInterval;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQues = questions[currentQuestion];

    questionElement.textContent = currentQues.question;
    optionsElement.innerHTML = '';

    shuffle(currentQues.options); // Shuffle options

    currentQues.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.onclick = () => checkAnswer(index);
        optionsElement.appendChild(li);
    });

    startTimer();
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].answer) {
        score++;
    }
}

function startTimer() {
    clearInterval(timerInterval);
    document.getElementById('time-left').textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            nextQuestion();
        } else {
            document.getElementById('time-left').textContent = timeLeft;
        }
    }, 1000);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        timeLeft = 10; // Reset timer for the next question
    } else {
        clearInterval(timerInterval);
        submitQuiz();
    }
}

function submitQuiz() {
    // Here you can show the user's score or perform any other actions
    alert('Quiz submitted! Your score is ' + score);
}

// Display first question when the page loads
displayQuestion();
