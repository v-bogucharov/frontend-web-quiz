function renderQuizCard(question, code, answers, answers_code) {
    // render question
    $('#question').html(question)

    // render code if exists
    if (code) {
        $('code').show()
        $('code').text(code)
        hljs.highlightBlock(document.querySelector('code'));
    }

    // render answers
    for (let i = 0; i < answers.length; i++) {
        $('#answers').append('<button>')
    }
    $('#answers button').each(function (index) {
        $(this).text(answers[index])
        $(this).addClass('btn')
        if (answers_code) {
            $(this).addClass('answer-code')
        }
    })
}

function pickCard(bingo) {
    // checking the selected answer
    $('#answers button').on('click', function () {
        $("#about").slideUp();
        if ($(this).text() === bingo) {
            $('#about').css('background', 'linear-gradient(to bottom, #343a40, #6ab04c)')
            $(this).addClass('bingo')
            $('.jumbotron').addClass('success')
            // disable functionallity of buttons
            $('#answers .btn').off()
            // disable in design side
            $('#answers .btn').not('.bingo').addClass('disabled')

            $('.jumbotron p').addClass("hide")
            setTimeout(function () {
                $('.jumbotron p').text(successText[Math.floor(Math.random() * failText.length)])
            }, 200)
            setTimeout(function () {
                $('.jumbotron p').removeClass("hide")
            }, 200)
        }
        else {
            $('#about').css('background', 'linear-gradient(to bottom, #343a40, #eb4d4b)')
            $(this).addClass('non-bingo')
            $('.jumbotron').addClass('fail')

            $('.jumbotron p').addClass("hide")
            setTimeout(function () {
                $('.jumbotron p').text(failText[Math.floor(Math.random() * failText.length)])
            }, 200)
            setTimeout(function () {
                $('.jumbotron p').removeClass("hide")
            }, 200)
        }
    })
}

function newQuizCard() {
    let randomCard = quizData[Math.floor(Math.random() * quizData.length)]
    let question = randomCard['question']
    let code = randomCard['code']
    let answers = randomCard['answers']
    let answers_code = randomCard['answers_code']
    let bingo = randomCard['bingo']

    renderQuizCard(question, code, answers, answers_code)
    pickCard(bingo)
}

function randomButton() {
    $('.jumbotron button').on('click', function () {
        $('#about').css('background', 'linear-gradient(to bottom, #343a40, #95afc0)')
        $("#about").slideUp();
        $('.jumbotron').removeClass('success fail')
        $('.jumbotron p').text('Learning is never too late. Test your knowledge.')
        $('#answers').empty()
        $('code').hide()
        newQuizCard()
    })
}

function showAbout() {
    $(document).ready(function () {
        $('button:contains("About")').click(function () { // задаем функцию при нажатиии на элемент с классом hide
            $("#about").slideToggle(); // плавно скрываем все элементы <div>
        });
    });


    // $('button:contains("About")').on('click', function() {
    //     $('#about').toggle()
    // })
}

randomButton()
newQuizCard()
showAbout()
