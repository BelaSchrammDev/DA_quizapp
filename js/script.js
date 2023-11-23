const audioSuccess = new Audio('./audio/success.mp3');
const audioFail = new Audio('./audio/fail.mp3');
let silence = false;

let currentQuizSelect = null;
let currentQuiz = null;
let currentQuizQuestion = 0;
let currentContainerID = 'quiz_start';
let rightAnswers = [];


function init() {
    fillQuizBoxSideBar();
    audioFail.volume = 0.3;
    audioSuccess.volume = 0.3;
}


function getCssVariable_Bool(varName) { return getCssVariable_String(varName) == 'true'; }


function getCssVariable_String(varName) { return window.getComputedStyle(document.body).getPropertyValue(varName); }


function isCurrentQuestionAnswered() { return rightAnswers[currentQuizQuestion] > 0; }


function storeAnswerResult(answer) { rightAnswers[currentQuizQuestion] = answer ? 1 : 2; }


function questionAnswered(index) { return rightAnswers[index] > 0; }


function isQuizEnd() { return currentQuiz.questions.length <= currentQuizQuestion + 1; }


function addIndexToQuiz(quiz, index) { quiz.index = index; }


function getAnswerDivID(index) { return `quiz_answer_${index}`; }


function getCurrentQuestion() { return currentQuiz.questions[currentQuizQuestion]; }


function setButtonText(buttonID, text) { document.getElementById(buttonID).innerHTML = text; }


function showContainer(containerID) {
    if (currentContainerID != '') document.getElementById(currentContainerID).classList.add('hide');
    document.getElementById(containerID).classList.remove('hide');
    currentContainerID = containerID;
}


function addClassToAnswerDiv(index, className) {
    document.getElementById(getAnswerDivID(index)).classList.add(className);
}


function replaceHTMLTags(text) {
    let returnText = text.replaceAll('<', '&lt;');
    returnText = returnText.replaceAll('>', '&gt;');
    return returnText;
}


function disableQuizlist(action) {
    if (action) document.getElementById('quiz_box_sidebar_list').classList.remove('selectable');
    else document.getElementById('quiz_box_sidebar_list').classList.add('selectable');
}


function clickQuizStart() {
    if (currentQuizSelect != null) {
        setButtonText('next_button', 'Weiter');
        disabledButton('next_button');
        initQuiz();
        showQuestion();
        setAnswerProgressBar('answer_progress');
        showContainer('quiz_question_and_answers');
        disableQuizlist(true);
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
    document.getElementById('quiz_question').innerHTML = replaceHTMLTags(quest.question) + '?';
    for (let index = 0; index < quest.answers.length; index++) {
        answerHtml += getAnswerHtml(index, replaceHTMLTags(quest.answers[index]));
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
    const barColorArray = ['#D6D6D6', '#4CC017', '#F71918'];
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


function setResultInfo() {
    let right = 0;
    const numQuestions = currentQuiz.questions.length;
    rightAnswers.forEach((result) => { if (result == 1) right++ });
    document.getElementById('quiz_result_info').innerHTML = `${right} von ${numQuestions} Fragen richtig beantwortet`;
}


function playResultSound(answer) {
    if (silence) return;
    if (answer) audioSuccess.play();
    else audioFail.play();
}


function enableButton(buttonID) {
    document.getElementById(buttonID).disabled = false;
    document.getElementById(buttonID).style['opacity'] = '1';
}


function disabledButton(buttonID) {
    document.getElementById(buttonID).disabled = true;
    document.getElementById(buttonID).style['opacity'] = '0';
}


function setAnswerColors(userAnswer, rightAnswer) {
    const answerDivList = document.getElementById('quiz_answers').children;
    for (let index = 0; index < answerDivList.length; index++) {
        answerDivList[index].classList.remove('quiz_answer_selectable');
    }
    if (userAnswer != rightAnswer) addClassToAnswerDiv(userAnswer, 'quiz_answer_fail');
    addClassToAnswerDiv(rightAnswer, 'quiz_answer_success');
}


function clickAnswer(userAnswer) {
    if (isCurrentQuestionAnswered()) return;
    const quest = getCurrentQuestion();
    const result = quest.rightAnswer == userAnswer;
    storeAnswerResult(result);
    playResultSound(result);
    setAnswerProgressBar('answer_progress');
    enableButton('next_button');
    if (isQuizEnd()) setButtonText('next_button', 'Quiz beenden');
    setAnswerColors(userAnswer, quest.rightAnswer);
}


function getAnswerHtml(index, answer) {
    return `
        <div id="${getAnswerDivID(index)}"
            onclick="clickAnswer(${index})"
            class="flex_r_fs_ce flex_gap_10 quiz_answer quiz_answer_selectable">
        <span>${'ABCDEFGHI'[index]}</span>
        <span>${answer}</span>
        </div>
    `;
}


function setQuizDescription(quiz) {
    document.getElementById('quiz_description_image').src = quiz.quizHeaderImage;
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
        if (isSideBarResponsiv()) burgerMenu(false);
        currentQuizSelect = quizzes[index];
        fillQuizBoxSideBar();
    }
}


function clickQuizReturn() {
    currentQuiz = null;
    showContainer('quiz_start');
    disableQuizlist(false);
}


function isSideBarResponsiv() {
    return getCssVariable_Bool('--responsiv');
}


function burgerMenu(show) {
    if (show) setSideBarStyle('0', 'block');
    else setSideBarStyle('-180px', 'none');
}


function setSideBarStyle(rightValue, displayValue) {
    document.getElementById('navbar').style['left'] = rightValue;
    document.getElementById('burger_menu_overlay').style['display'] = displayValue;
}


function clickSpeaker() {
    silence = !silence;
    document.getElementById('speaker_button').src = silence ? './img/speaker.svg' : './img/speaker_silence.svg';
}


