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
        quiz.index = index;
        if (currentQuizSelect == null) currentQuizSelect = quiz;
        listHtml += getQuizTypeListItem(quiz);
    }
    sidebarList.innerHTML = listHtml;
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
    if (currentQuiz == null) {
        currentQuizSelect = quizzes[index];
        fillQuizBoxSideBar();
    }
}