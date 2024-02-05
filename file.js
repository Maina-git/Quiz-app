 const questions=[

{
    question:'which is the largest  animal in the world',

    answer:[
        {text:"shark",correct: false},
        {text:'Blue whale',correct:true},
        {text:'Elephant',correct:false},
        {text:'Giraffe',correct:false}

    ]
},

{
    question:'which is the smallest continent in the world',

    answer:[
        {text:"Asia",correct: false},
        {text:'Austrlia',correct:true},
        {text:'Arctic',correct:false},
        {text:'Africa',correct:false}

    ]
},

{
    question:'which is the largest Desret in the world',

    answer:[
        {text:"Kalahari",correct: false},
        {text:'Gobi',correct:false},
        {text:'Sahara',correct:false},
        {text:'Antarctica',correct:true}
    ]
},

{
    question:'which is the largest  country  in the world',

    answer:[
        {text:"Britain",correct: false},
        {text:'China',correct:false},
        {text:'Russia',correct:true},
        {text:'United States of America',correct:false}
    ]

}
 ];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById('answer-button');
const nextButton=document.getElementById('next-btn');

let currentQuestionIndex=0;
let score=0;

startQuiz=()=>{

currentQuestionIndex=0;
score=0;
nextButton.innerHTML='Next';
showQuestion();
}

showQuestion=()=>{

resetState();

    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
     questionElement.innerHTML=questionNo+'. '+currentQuestion.question;  
 
currentQuestion.answer.forEach(answer=>{

const button=document.createElement('button');
button.innerHTML=answer.text;
button.classList.add('btn');
answerButton.appendChild(button);
if(answer.correct){
    button.dataset.correct=answer.correct;
}
button.addEventListener('click',selectAnswer);
});
}

resetState=()=>{

    nextButton.style.dispaly='none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);

    }
}

selectAnswer=(e)=>{
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==='true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct==='true'){
        button.classList.add("correct");
    }
    button.disabled='true';
});
nextButton.style.display="block";

}

showScore=()=>{
    resetState();
questionElement.innerHTML=`YOU SCORED ${score} OUT OF ${questions.length}!`;
nextButton.innerHTML='PLAY AGAIN';
nextButton.style.display='block';
}


handleNextButton=()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }

}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();











