
let questions = [
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

let question_count = 0;
let points = 0


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third] = questions[count].option;

    question.innerHTML = `<h3 class="h3">Q${count + 1}. ${questions[count].question}</h3>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    </ul>`;
    toggleActive();
};


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

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}
