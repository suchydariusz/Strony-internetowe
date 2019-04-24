const question = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
//const correct = document.getElementById('correct');
const resultGame = document.getElementById('result');
const questionNumber = document.getElementById('question_number');
let questionCounter = 1;
let result = 0;
let checkFlag = false;
let selectedCategory = "";
let questionTab = [];
let tabCounter = 0;
let cor;
let $userAnswer;

$('#start_button').on('click', () => {
    $('.categories').css({'display': 'block'});
    $('.content').css({'display': 'none'});
    
    resetAll();
    game();

    $('input[name=answer]:checked').prop('checked',false);
    $('#next_question').css({'display':'none'});
}) 

const resetAll = () => {
    questionCounter = 1;
    result = 0;
    checkFlag = false;
    selectedCategory = "";
    questionTab = [];
    tabCounter = 0;
    questionNumber.innerHTML = questionCounter;
    resultGame.innerHTML = result;
    $('.answer').removeClass('correct_answer');
}

const game = () => {
    $('.category-buttons').off().on('click', (e) => {
        selectedCategory = e.target.id;
        $('.categories').css({'display': 'none'});
        $('.content, #check_answer').css({'display': 'block'});
    
        getQuestion();
        checkAnswer();
        nextQuestion();
    });
}

const fillTab = () => {
    for(let i = 0; i < responseObject.questions.length; i++) {
        questionTab[i] = i; 
    }
    questionTab.sort(() => Math.random() - 0.5);
}

const getQuestion = () => {
    let ans1,ans2,ans3,ans4, quest;
    var xhr = new XMLHttpRequest();
    xhr.onload = () => { 
        if(xhr.status === 200) {
            responseObject = JSON.parse(xhr.responseText);

            if(tabCounter === 0) fillTab();
            let id = questionTab[tabCounter];

            quest =  responseObject.questions[id].question;
            ans1 = responseObject.questions[id].a;
            ans2 = responseObject.questions[id].b;
            ans3 = responseObject.questions[id].c;
            ans4 = responseObject.questions[id].d;
            cor = responseObject.questions[id].correct_answer;
            
            question.innerHTML = quest;
            answer1.innerHTML = ans1;
            answer2.innerHTML = ans2;
            answer3.innerHTML = ans3;
            answer4.innerHTML = ans4;
            //correct.innerHTML = cor;//to do nie pokazywania
            tabCounter++;
        }
    }
    xhr.open('GET', 'questions/' + selectedCategory + '.json', true);
    xhr.send(null);
}

const checkAnswer = () => {
    $('#check_answer').off().on('click', () => {
        if(checkFlag === false) {
            $userAnswer = $('input[name=answer]:checked', '#quiz').val();
            if(cor === $userAnswer) {
                swal("Poprawna odpowiedź", "", "success");
                result += 100;
                resultGame.innerHTML = result;
                questionNumber.innerHTML = questionCounter;
                console.log(cor);
            } 
            else {
                swal("Błędna odpowiedź", "", "error");
            } 
            checkFlag = true;
        }
        else {
            swal("Już znasz prawidłową odpowiedź! Przejdź do następnego pytania", "", "warning");
        }
        $('#next_question').css({'display':'block'});
        switch(cor) {
             case 'a': {
                $('#answer1').addClass('correct_answer');
                break;
             } 
             case 'b': {
                $('#answer2').addClass('correct_answer');
                break;
             } 
             case 'c': {
                $('#answer3').addClass('correct_answer');
                break;
             } 
             case 'd': {
                $('#answer4').addClass('correct_answer');
                break;
             }
             default: console.log('Error');
        }
    })
}

const nextQuestion = () => {
    $('#next_question').off().on('click', () => {
        $('.answer').removeClass('correct_answer');
        questionCounter++;
        if(questionCounter == 5) {
            $('#next_question').text('Zakończ Quiz');
        }
        if($('#next_question').text() == 'Zakończ Quiz' && questionCounter == 6) {
            swal("Twój wynik to:", "" + result + 'pkt', "info");
            newGameWindow();
            return;
        }

        questionNumber.innerHTML = questionCounter;
        checkFlag = false;
        getQuestion(selectedCategory);
        
        $('input[name=answer]:checked').prop('checked',false);
        $('#next_question').css({'display':'none'});
    });
}

function newGameWindow() {
    $('.categories').css({'display': 'none'});
    $('.content').css({'display': 'none'});
    $('#next_question').text('Następne pytanie');
    $('#next_question').css({'display':'none'});
    $('#check_answer').css({'display':'none'});
    result = 0;
    resultGame.innerHTML = result;
}



















