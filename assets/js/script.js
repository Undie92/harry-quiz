
let easyQuestions = [
    {
        id: 1,
        question: 'When is Harry Potter’s birthday?',
        answer: 'July 31',
        option: [
            'July 31', // rätt svar
            'March 20',
            'September 3',
        ]
    },
    {
        id: 2,
        question: 'What are the names of Harry’s parents?',
        answer: 'James and Lily Potter',
        option: [
            'Christian and Milly Potter',
            'Ron and Hermione Potter',
            'James and Lily Potter', // rätt svar 
        ]
    },
    {
        id: 3,
        question: 'Who are Harry’s two best friends in the world?',
        answer: 'Ron and Hermione',
        option: [
        'Draco and Dobby',
        'Ron and Hermione', // rätt svar
        'Lily and James',
        ]
    },
    {
        id: 4,
        question: 'What animal can Harry speak to?',
        answer: 'Snake',
        option: [
            'Snake', // rätt svar
            'Cat',
            'Dragon',
        ]
    },
    {
        id: 5,
        question: 'What animal can Remus Lupin turn into?',
        answer: 'Werewolf',
        option: [
        'Unicorn',
        'Rabbit',
        'Werewolf', // rätt svar
        ]
    },
    {
        id: 6,
        question: 'What species did Hagrid’s pet dragon, Norberta, belong to?',
        answer: 'Norwegian Ridgeback',
        option: [
        'Norwegian Ridgeback', // rätt svar
        'Hungarian Horntail',
        'Antipodean Opaleye',
        ]
    },
    {
        id: 7,
        question: 'What spell did Hermione use to free Harry and Ron from the Devil’s Snare?',
        answer: 'Lumos Solem',
        option: [
            'Lumos Solem', // rätt svar 
            'Petrify',
            'Avada Kedavra',
        ]
    },
    {
        id: 8, 
        question: 'What color did Hermione turn the leaves of the Weasley’s crabapple tree into for Harry’s 17th birthday?',
        answer: 'Gold',
        option: [
            'Green',
            'Gold', // rätt svar
            'Bronze',
        ]

    },
    {
        id: 9,
        question: 'Which ice cream flavor did Harry eat at the zoo when he went out with the Dursleys?',
        answer: 'Lemon Ice Pop', 
        option: [
            'Chocolate Chip',
            'Lemon Ice Pop', // rätt svar
            'Orange Soda',
        ]
    },
    {
        id: 10,
        question: 'What is the secretive radio program set up by the Order of the Phoenix?',
        answer: 'Potterwatch',
        option: [
            'Potter channel',
            'Potterpod',
            'Potterwatch', // rätt svar
        ]
    },  
];

let hardQuestions = [
    {
        id: 1,
        question: 'In the game of Quidditch, how many possible fouls are there?',
        answer: '700',
        option: [
            '700', // rätt svar
            '350',
            '523',
        ]
    },
    {
        id: 2,
        question: 'How many ingredients did the polyjuice potion have?',
        answer: 'Seven',
        option: [
            'Five',
            'Nine',
            'Seven', // rätt svar 
        ]
    },
    {
        id: 3,
        question: 'What does the scar above Albus Dumbledore´s left knee look like?',
        answer: 'A perfect map of the London Underground',
        option: [
        'A perfect map of London Railroads',
        'A perfect map of the London Underground', // rätt svar
        'A perfect map of the London Military Base',
        ]
    },
    {
        id: 4,
        question: 'What is the maximum speed that a firebolt broomstick can reach?',
        answer: '150 mph',
        option: [
            '150 mph', // rätt svar
            '100 mph',
            '120 mph',
        ]
    },
    {
        id: 5,
        question: 'What is the five-digit code that one needs to dial to get inside the Ministry of Magic?',
        answer: '6-2-4-4-2',
        option: [
        '7-8-5-6-4',
        '3-2-3-4-1',
        '6-2-4-4-2', // rätt svar
        ]
    },
    {
        id: 6,
        question: 'What was the name of Hepzibah Smith´s house elf?',
        answer: 'Hokey',
        option: [
        'Hokey', // rätt svar
        'Dokey',
        'Pokey',
        ]
    },
    {
        id: 7,
        question: 'What is Fred Weasley´s codename on Potterwatch?',
        answer: 'Rapier',
        option: [
            'Rapier', // rätt svar 
            'Sable',
            'Falchion',
        ]
    },
    {
        id: 8, 
        question: 'Hannah Abbott is sorted into which house?',
        answer: 'Hufflepuff',
        option: [
            'Ravenclaw',
            'Hufflepuff', // rätt svar
            'Slytherin',
        ]

    },
    {
        id: 9,
        question: 'How is Bellatrix Lestrange related to Draco Malfoy?',
        answer: 'She’s his aunt', 
        option: [
            'She’s his mother in-law',
            'She’s his aunt', // rätt svar
            'She’s his sister',
        ]
    },
    {
        id: 10,
        question: 'Who teased Moaning Myrtle about her glasses?',
        answer: 'Olive Hornby',
        option: [
            'Mafalda Hopkirk',
            'Tom M. Riddle',
            'Olive Hornby', // rätt svar
        ]
    },  
];

let question_count = 0;
let points = 0;


// function to generate the easy questions from "easyQuestions"

function ezQuestions(count){
    let question = document.getElementById("easyQuestions");
    let[first, second, third] = easyQuestions[count].option;
    question.innerHTML = `<h3 class="h3">Q${count + 1}. ${easyQuestions[count].question}</h3>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    </ul>`;
    toggleActive();
};

// function to generate the hard questions from "hardQuestions"

function diffQuestions(count){
    let questions = document.getElementById("hardQuestions");
    let[first, second, third] = hardQuestions[count].option;
    questions.innerHTML = `<h3 class="h3">Q${count + 1}. ${hardQuestions[count].question}</h3>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    </ul>`;
    toggleActive();
};

// Function to loop and change document of lists to add class active.

function toggleActive(){
    let option = document.querySelectorAll("li.option")
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

// function for the easy difficulty to get next question
// And when there is no further question, it redirects to final.html.

function next() {

    if(question_count == easyQuestions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer === easyQuestions[question_count].answer){
    points += 10;
    localStorage.setItem("points", points);
}
console.log(points);

question_count++;
ezQuestions(question_count);
}

// Function for the hard difficulty to get next question.
// And when there is no further question, it redirects to final.html.

function next2() {

    if(question_count == hardQuestions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer === hardQuestions[question_count].answer){
    points += 10;
    localStorage.setItem("points", points);
}
console.log(points);

question_count++;
diffQuestions(question_count);
}

// function to remove active from classes containing active after pressing
// next question.

function myFunction(e) {
    var elems = document.querySelector(".active");
    if(elems !==null){
     elems.classList.remove("active");
    }
   e.target.className = "active";
  }