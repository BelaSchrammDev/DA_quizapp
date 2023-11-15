const audioSuccess = new Audio('./audio/success.mp3');
const audioFail = new Audio('./audio/fail.mp3');

let currentQuizSelect = null;
let currentQuiz = null;
let currentQuizQuestion = 0;

function init() {
    fillQuizBoxSideBar();
}


function hideContainer(divID) { document.getElementById(divID).classList.add('hide'); }


function showContainer(divID) { document.getElementById(divID).classList.remove('hide'); }


function isQuizEnd() { return currentQuiz.questions.length <= currentQuizQuestion + 1; }


function addIndexToQuiz(quiz, index) { quiz.index = index; }


function getAnswerDivID(index) { return `quiz_answer_${index}`; }


function addSuccessClass(index) {
    document.getElementById(getAnswerDivID(index)).classList.add('quiz_answer_success');
}


function addFailClass(index) {
    document.getElementById(getAnswerDivID(index)).classList.add('quiz_answer_fail');
}


function getCurrentQuestion() { return currentQuiz.questions[currentQuizQuestion]; }


function replaceTags(text) {
    let returnText = text.replaceAll('<', '&lt;');
    returnText = returnText.replaceAll('>', '&gt;');
    return returnText;
}


function clickQuizStart() {
    if (currentQuizSelect != null) {
        hideContainer('quiz_start');
        showContainer('quiz_question_and_answers');
        initQuiz();
        showQuestion();
    }
}


function initQuiz() {
    currentQuiz = currentQuizSelect;
    currentQuizQuestion = 0;
}


function showQuestion() {
    let quest = getCurrentQuestion();
    let answerHtml = '';
    document.getElementById('quiz_question').innerHTML = replaceTags(quest.question);
    for (let index = 0; index < quest.answers.length; index++) {
        answerHtml += getAnswerHtml(index, replaceTags(quest.answers[index]));
    }
    document.getElementById('quiz_answers').innerHTML = answerHtml;
}


function clickNextButton() {
    if (isQuizEnd()) {

    } else {
        currentQuizQuestion++;
        showQuestion();
    }
}


function clickAnswer(index) {
    let quest = getCurrentQuestion();
    if (quest.right_index == index) {
        // success
        audioSuccess.play();
    } else {
        // fail
        audioFail.play();
        addFailClass(quest.right_index);
    }
    addSuccessClass(index);
}


function getAnswerHtml(index, answer) {
    return `
        <div id="${getAnswerDivID(index)}" onclick="clickAnswer(${index})" class="quiz_answer">
        <span>${'ABCDEFGHI'[index]}</span>
        <span>${answer}</span>
        </div>
    `;
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


function setQuizDescription(quiz) {
    document.getElementById('quiz_description_tag').innerHTML = quiz.quizTag;
    document.getElementById('quiz_description_long').innerHTML = quiz.quizName;
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


