const questions=[
    {
        question:"When was JavaScript made?",
        options:["1990","1993","1995","1997"],
        answer:"1995"
    },
    {
        question:"Who was the founder of JavaScript?",
        options:["Brendan Eich","Charles Babbage","James Gosling","Ryan Gosling"],
        answer:"Brendan Eich"
    },
    {
        question:"What is JavaScript used for?",
        options:["mobile and web apps","Adds interactive features to web pages and apllications","Task Automation","To create and structure content on the web"],
        answer:"Adds interactive features to web pages and apllications"
    },
    {
        question:"Which question are we in?",
        options:["2","3","4","1"],
        answer:"4"
    },
    {
        question:"Was this test easy?",
        options:["no","too easy","not at all","yes"],
        answer:"too easy"
    },
    {
        question:"while coding this did I lose my hair?",
        options:["no","yes alot","1 strand of hair I lost","10 strands of hair I lost"],
        answer:"yes alot"
    }
];

let currentIndex=0;
let score=0;

function loadElements(){
    const questionData=questions[currentIndex];
    const questionElement=document.querySelector(".quiz");
    const inputElement=document.querySelector(".options");

    questionElement.textContent=questionData.question;
    inputElement.innerHTML='';

    questionData.options.forEach(opt => {
        const inputText = document.createElement("div");
        inputText.classList.add("option");

        const inputRadio = document.createElement("input");
        inputRadio.type = "radio";
        inputRadio.name = "option";  
        inputRadio.value = opt;

        const label = document.createElement("label");
        label.textContent = opt;

        inputText.appendChild(inputRadio);
        inputText.appendChild(label);
        inputText.onclick = () => correctAnswer(opt);
        inputElement.appendChild(inputText);
    });
}

function correctAnswer(correctOption){
    const questionData=questions[currentIndex];
    const optA=document.querySelector(".options").children;

    for(let opt of optA){
        opt.style.backgroundColor=opt.textContent===questionData.answer?"green":"red";
    }

    if(correctOption===questionData.answer){
        score++
    }

    for(let opt of optA){
        opt.onclick=null;
    }
}
const but=document.querySelector("#bt");
but.onclick=()=>{
    if(currentIndex<questions.length-1){
        currentIndex++;
        loadElements();
    }else{
        showResult();
    }
};

function showResult(){
    const resultcontainer=document.querySelector("#resultdiv");
    const scoreEl=document.querySelector("#score");
    const PerEl=document.querySelector("#percentage");
    const totalQuestion=questions.length;
    const percentage=(score/totalQuestion)*100;

    document.querySelector("#quiz-container").style.display="none";
    resultcontainer.style.display="block";

    scoreEl.textContent = `You scored ${score} out of ${totalQuestion}`;
    PerEl.textContent = `Percentage: ${percentage.toFixed(2)}%`;
}

loadElements();