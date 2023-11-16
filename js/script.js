const audioSuccess = new Audio('./audio/success.mp3');
const audioFail = new Audio('./audio/fail.mp3');
let silence = true;

let currentQuizSelect = null;
let currentQuiz = null;
let currentQuizQuestion = 0;
let currentContainerID = '';
// 0 is unanswered
// 1 right
// 2 fail
let rightAnswers = [];

function init() {
    currentContainerID = 'quiz_start';
    fillQuizBoxSideBar();
}


function showContainer(containerID) {
    if (currentContainerID != '') document.getElementById(currentContainerID).classList.add('hide');
    document.getElementById(containerID).classList.remove('hide');
    currentContainerID = containerID;
}

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
        setButtonText('next_button', 'Weiter');
        disabledButton('next_button');
        showContainer('quiz_question_and_answers');
        initQuiz();
        showQuestion();
        setAnswerProgressBar('answer_progress');
    }
}


function initQuiz() {
    currentQuiz = currentQuizSelect;
    currentQuizQuestion = 0;
    rightAnswers = getEmptyAnswerArray(currentQuiz.questions.length);
}


function getEmptyAnswerArray(length) {
    let newArray = new Array(length);
    for (let index = 0; index < length; index++) newArray[index] = 0;
    return newArray;
}


function showQuestion() {
    let quest = getCurrentQuestion();
    let answerHtml = '';
    document.getElementById('quiz_question').innerHTML = replaceTags(quest.question) + '?';
    for (let index = 0; index < quest.answers.length; index++) {
        answerHtml += getAnswerHtml(index, replaceTags(quest.answers[index]));
    }
    document.getElementById('quiz_answers').innerHTML = answerHtml;
}


function clickNextButton() {
    if (isQuizEnd()) {
        setResultInfo();
        setAnswerProgressBar('answer_progress_finished');
        showContainer('quiz_finished');
    } else {
        currentQuizQuestion++;
        disabledButton('next_button');
        showQuestion();
    }
}


function setAnswerProgressBar(barID) {
    const barColorArray = ['lightgray', 'green', 'red'];
    let progressHtml = '';
    for (let index = 0; index < rightAnswers.length; index++) {
        const barColor = barColorArray[rightAnswers[index]];
        const title = questionAnswered(index) ? `title="${currentQuiz.questions[index].question}"` : '';
        progressHtml += `
            <div class="answer_info" 
                style="width: ${100 / rightAnswers.length}%;background-color: ${barColor};" ${title}>
            </div>`;
    }
    document.getElementById(barID).innerHTML = progressHtml;
}


function questionAnswered(index) { return rightAnswers[index] > 0; }


function setResultInfo() {
    let right = 0;
    const numQuestions = currentQuiz.questions.length;
    rightAnswers.forEach((result) => { if (result == 1) right++ });
    document.getElementById('quiz_result_info').innerHTML = `${right} von ${numQuestions} Fragen richtig beantwortet`;
}


function storeAnswerResult(answer) { rightAnswers[currentQuizQuestion] = answer ? 1 : 2; }


function playResultSound(answer) {
    if (silence) return;
    if (answer) audioSuccess.play();
    else audioFail.play();
}


function enabledButton(buttonID) {
    document.getElementById(buttonID).disabled = false;
    document.getElementById(buttonID).style['opacity'] = '1'; 
}


function disabledButton(buttonID) {
    document.getElementById(buttonID).disabled = true; 
    document.getElementById(buttonID).style['opacity'] = '0';
}


function setButtonText(buttonID, text) { document.getElementById(buttonID).innerHTML = text; }


function clickAnswer(index) {
    if (rightAnswers[currentQuizQuestion] > 0) return; // question alreddy answered
    const quest = getCurrentQuestion();
    const result = quest.right_index == index;
    storeAnswerResult(result);
    playResultSound(result);
    setAnswerProgressBar('answer_progress');
    enabledButton('next_button');
    if (isQuizEnd()) setButtonText('next_button', 'Quiz beenden');
    if (!result) addFailClass(index);
    addSuccessClass(quest.right_index);
}


function getAnswerHtml(index, answer) {
    return `
        <div id="${getAnswerDivID(index)}"
            onclick="clickAnswer(${index})"
            class="flex_r_fs_ce flex_gap_10 quiz_answer">
        <span>${'ABCDEFGHI'[index]}</span>
        <span>${answer}</span>
        </div>
    `;
}


function setQuizDescription(quiz) {
    document.getElementById('quiz_description_tag').innerHTML = quiz.quizTag;
    document.getElementById('quiz_description_long').innerHTML = quiz.quizName;
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


function getQuizTypeListItem(quiz) {
    return `
        <div class="flex_r_fs_st flex_gap_20 m_y_10">
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


function clickQuizChoise() {
    currentQuiz = null;
    showContainer('quiz_start');
}