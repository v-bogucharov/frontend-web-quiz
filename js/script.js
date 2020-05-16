// $('.jumbotron .btn').on('click', function () {
//     $('.jumbotron').removeClass('success fail')
//     $('.jumbotron p').text('Learning is never too late. Test your knowledge.')
//     $('#answers').empty()

//     codeDisplay = document.querySelector('code')
//     codeDisplay.classList.remove(language)
//     codeDisplay.textContent = ''

//     console.log(codeDisplay)



//     renderQuizCard()
//     pickCard()
// })

function renderQuizCard(question, code, language, answers) {
    // render question
    $('#question').text(question)

    // render code if exists
    if (code) {
        $('code').text(code)
        $('code').addClass(language)
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
            // $('.jumbotron p').animate({'opacity': 0}, 200, function() {
            //     $('.jumbotron p').text(failText[Math.floor(Math.random() * failText.length)])
            // }).animate({'opacity': 1}, 0)
        }
    })
}

function getRandomQuizCard() {
    let randomCard = quizData[Math.floor(Math.random() * quizData.length)]
    let question = randomCard['question']
    let code = randomCard['code']
    let language = randomCard['language']
    let answers = randomCard['answers']
    let bingo = randomCard['bingo']

    renderQuizCard(question, code, language, answers)
    pickCard(bingo)
}

// function renderQuizCard() {
    

    // $('#answers').add(answers[0])
    // $('#answers').addClass('btn')
    // $('#answers').each(function(index) {
    //     console.log(index)
    //     $(this).text(answers[index])
    // })


    // questionDisplay = document.querySelector('#question')
    // answersDisplay = document.querySelector('#answers')
    // codeDisplay = document.querySelector('code')

    // // render question
    // questionDisplay.textContent = question

    // codeDisplay.classList.add(language)
    // codeDisplay.textContent = code

    // console.log(codeDisplay)

    // // render answers
    // answers.forEach(answer => {
    //     newAnswerDisplay = document.createElement('button')
    //     newAnswerDisplay.textContent = answer
    //     newAnswerDisplay.classList.add("btn", "shadow-none")
    //     answersDisplay.appendChild(newAnswerDisplay)
    // })
// }

// function pickCard() {
//     let randomCard = getRandomQuizCard()
//     let bingo = randomCard['bingo']

//     // checking the selected answer
//     $('#answers button').on('click', function () {
//         if ($(this).text() === bingo) {
//             $(this).addClass('bingo')
//             $('.jumbotron').addClass('success')
//             // disable functionallity of buttons
//             $('#answers .btn').off()
//             // disable in design side
//             $('#answers .btn').not('.bingo').addClass('disabled')

//             $('.jumbotron p').addClass("hide")
//             setTimeout(function () {
//                 $('.jumbotron p').text(successText[Math.floor(Math.random() * failText.length)])
//             }, 200)
//             setTimeout(function () {
//                 $('.jumbotron p').removeClass("hide")
//             }, 200)
//         }
//         else {
//             $(this).addClass('non-bingo')
//             $('.jumbotron').addClass('fail')

//             $('.jumbotron p').addClass("hide")
//             setTimeout(function () {
//                 $('.jumbotron p').text(failText[Math.floor(Math.random() * failText.length)])
//             }, 200)
//             setTimeout(function () {
//                 $('.jumbotron p').removeClass("hide")
//             }, 200)
//             // $('.jumbotron p').animate({'opacity': 0}, 200, function() {
//             //     $('.jumbotron p').text(failText[Math.floor(Math.random() * failText.length)])
//             // }).animate({'opacity': 1}, 0)
//         }
//     })
// }

// function pickCard() {
//     answersButtonsDisplay = document.querySelectorAll('#answers .btn')
//     jumbotronDisplay = document.querySelector('.jumbotron')
//     jumbotronTextDisplay = document.querySelector('.jumbotron p')

//     answersButtonsDisplay.forEach(answerButtonDisplay => {
//         answerButtonDisplay.addEventListener('click', function () {
//             if (this.textContent === bingo) {
//                 this.style.backgroundColor = '#6ab04c'
//                 this.style.color = 'white'
//                 jumbotronDisplay.classList.add("success")
//                 jumbotronTextDisplay.classList.add("hide")
//                 setTimeout(function () {
//                     jumbotronTextDisplay.textContent = successText[Math.floor(Math.random() * successText.length)]
//                 }, 200)
//                 setTimeout(function () {
//                     jumbotronTextDisplay.classList.remove('hide')
//                 }, 200)
//             }
//             else {
//                 this.style.backgroundColor = '#eb4d4b'
//                 this.style.color = 'white'
//                 jumbotronDisplay.classList.add("fail")
//                 jumbotronTextDisplay.classList.add("hide")
//                 setTimeout(function () {
//                     jumbotronTextDisplay.textContent = failText[Math.floor(Math.random() * failText.length)]
//                 }, 200)
//                 setTimeout(function () {
//                     jumbotronTextDisplay.classList.remove('hide')
//                 }, 200)
//                 this.classList.add('disabled')
//             }
//         })
//     })
// }

renderQuizCard()
pickCard()


// answerBtns = document.querySelectorAll('#answers .btn')
// answerBtns.forEach(answerBtn => {
//     answerBtn.addEventListener('click', function() {
//         if(this.textContent === bingo) {
//             this.style.backgroundColor = '#6ab04c'
//             this.style.color = 'white'
//             jumbotron.classList.add("success")
//         }
//         else {
//             this.style.backgroundColor = '#eb4d4b'
//             this.style.color = 'white'
//             jumbotron.classList.add("fail")
//         }
//     })
// })

