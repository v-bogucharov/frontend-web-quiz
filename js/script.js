function renderQuizCard(question, code, language, answers) {
    // render question
    $('#question').text(question)

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
    })
}

function pickCard(bingo) {
    // checking the selected answer
    $('#answers button').on('click', function () {
        if ($(this).text() === bingo) {
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
    let language = randomCard['language']
    let answers = randomCard['answers']
    let bingo = randomCard['bingo']

    renderQuizCard(question, code, language, answers)
    pickCard(bingo)
}

function randomButton() {
    $('.jumbotron button').on('click', function () {
        $('.jumbotron').removeClass('success fail')
        $('.jumbotron p').text('Learning is never too late. Test your knowledge.')
        $('#answers').empty()
        $('code').hide()
        newQuizCard()
    })
}

randomButton()
newQuizCard()
