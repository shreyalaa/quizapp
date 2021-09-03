var questionsArray = [
    {
        question: "Q1: What is the full form of JS?",
        a: "JavaScript",
        b:"JavaSuper",
        c:"JordenShoes",
        d: "None of these",
        ans: "ans1"
    },
    {
        question: "Q2: What is the full form of HTML?",
        a: "Hello to my land",
        b:"hyper text makeup language",
        c:"hyper text markup language",
        d: "NOne of these",
        ans: "ans3"
    },
    {
        question: "What is the fullform of CSS?",
        a: "Cascading style sheets",
        b:"Cascading Style sheep",
        c:"cartoon style sheets",
        d: "cascading super sheets",
        ans: "ans1"
    },
    {
        question: "Q4: what is the full form of HTTP?",
        a: "Hyper text transfer product",
        b:"Hyper text test protocol",
        c:"Hyper Transfer protocol",
        d: "Hypertext transfer protocol",
        ans: "ans4"
    }

]

var question = document.querySelector(".question")
var option1 = document.querySelector("#option1")
var option2 = document.querySelector("#option2")
var option3 = document.querySelector("#option3")
var option4 = document.querySelector("#option4")
var submit = document.querySelector("#btn")
var answers = document.querySelectorAll(".answer")
var showScore = document.querySelector("#showScore")

let questionCount = 0
let count = 0

const loadQuestion = () =>{
     questionList = questionsArray[questionCount]

     question.innerText = questionList.question

     option1.innerText = questionList.a
     option2.innerText = questionList.b
     option3.innerText = questionList.c
     option4.innerText = questionList.d
}

loadQuestion()

const getCheckAnswer = () =>{
    let answer;
    answers.forEach((currentAns) =>{
        if(currentAns.checked){
            answer = currentAns.id
        }
    })
    return answer
}

submit.addEventListener("click" , (event)=>{
    const checkedAnswer = getCheckAnswer()
    if(checkedAnswer === questionsArray[questionCount].ans){
        count = count +1
    }
    questionCount = questionCount+1
    if(questionCount < questionsArray.length){
        loadQuestion()
    }else{
       showScore.innerHTML = `
       <h3>you scored ${count}/ ${questionsArray.length}</h3>
       `
    }
})