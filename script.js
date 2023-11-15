const audioSuccess = new Audio('./audio/success.mp3');
const audioFail = new Audio('./audio/fail.mp3');

let currentQuizSelect = null;
let currentQuiz = null;

function init() {
    fillQuizBoxSideBar();
}


function fillQuizBoxSideBar() {
    let sidebarList = document.getElementById('quiz_box_sidebar_list');
    let listHtml = '';
    for (let index = 0; index < quizzes.length; index++) {
        const quiz = quizzes[index];
        addIndexToQuiz(quiz, index);
        if (currentQuizSelect == null) currentQuizSelect = quiz;
        if (currentQuizSelect == quiz) setQuizDescription(quiz);
        listHtml += getQuizTypeListItem(quiz);
    }
    sidebarList.innerHTML = listHtml;
}


function setQuizDescription(quiz){
    document.getElementById('quiz_description_tag').innerHTML=quiz.quizTag;
    document.getElementById('quiz_description_long').innerHTML=quiz.quizName;
}


function getQuizTypeListItem(quiz) {
    return `
        <div class="quiz_type">
        <div class="quiz_type_select" ${currentQuizSelect == quiz ? 'style="background-color: white;"' : ''}></div>
        <span onclick="clickQuizType(${quiz.index})">${quiz.quizTag}</span>
        </div>
    `;
}


function clickQuizType(index) {
    if (currentQuiz == null) {  // change only if no quiz is runnung
        currentQuizSelect = quizzes[index];
        fillQuizBoxSideBar();
    }
}


function addIndexToQuiz(quiz, index) { quiz.index = index; }