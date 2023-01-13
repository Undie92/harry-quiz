const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'));

let currentQuestion = {};
let acceptingAnswers = true;
let availableQuestions = [];
let questionCounter = 0;
let score = 0


let questions = [
    {
        question: 'When is Harry Potter’s birthday?',
        choice1: 'July 31', // rätt svar
        choice2: 'March 20',
        choice3: 'September 3',
        answer: 1,
    },
    {
        question: 'What are the names of Harry’s parents?',
        choice1: 'Christian and Milly Potter',
        choice2: 'Ron and Hermione Potter',
        choice3: 'James and Lily Potter', // rätt svar 
        answer: 3,
    },
    {
        question: 'Who are Harry’s two best friends in the world?',
        choice1: 'Draco and Dobby',
        choice2: 'Ron and Hermione', // rätt svar
        choice3: 'Lily and James',
        answer: 2,
    },
    {
        question: 'What animal can Harry speak to?',
        choice1: 'Snake', // rätt svar
        choice2: 'Cat',
        choice3: 'Dragon',
        answer: 1,
    },
    {
        question: 'What animal can Remus Lupin turn into?',
        choice1: 'Unicorn',
        choice2: 'Rabbit',
        choice3: 'Werewolf', // rätt svar
        answer: 3,
    },
    {
        question: 'What species did Hagrid’s pet dragon, Norberta, belong to?',
        choice1: 'Norwegian Ridgeback', // rätt svar
        choice2: 'Hungarian Horntail',
        choice3: 'Antipodean Opaleye',
        answer: 1,
    },
    {
        question: 'What spell did Hermione use to free Harry and Ron from the Devil’s Snare?',
        choice1: 'Lumos Solem', // rätt svar 
        choice2: 'Petrify',
        choice3: 'Avada Kedavra',
        answer: 1,
    },
    {
        question: 'What color did Hermione turn the leaves of the Weasley’s crabapple tree into for Harry’s 17th birthday?',
        choice1: 'Green',
        choice2: 'Gold', // rätt svar
        choice3: 'Bronze',
        answer: 2,
    },
    {
        question: 'Which ice cream flavor did Harry eat at the zoo when he went out with the Dursleys?',
        choice1: 'Chocolate Chip',
        choice2: 'Lemon Ice Pop', // rätt svar
        choice3: 'Orange Soda',
        answer: 2, 
    },
    {
        question: 'What is the secretive radio program set up by the Order of the Phoenix?',
        choice1: 'Potter channel',
        choice2: 'Potterpod',
        choice3: 'Potterwatch', // rätt svar
        answer: 3,
    },  
]

const MAX_QUESTIONS = 10
const SCORE_POINTS = 1

function startGame(){
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
};

function getNewQuestion(){
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
    }
        questionCounter++
        progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    
    let questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        let number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click' e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        let selectedChoice = e.target
        let selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect' 

        if(classToApply === 'correct') {
            incrementScore();
        } else {
            incrementWrongAnswer();
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})



function incrementScore(){

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer(){

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}