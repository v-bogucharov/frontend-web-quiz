failText = [
    'This is the wrong answer. Try again!',
    'Not really. Try again.',
    'So far, it’s wrong, but you can do it.',
    'Wrong, but I believe in you.',
    'Learning is the eye of the mind. Try again.',
    'No one said it would be easy.'
]

successText = [
    'Well done! Go on.',
    'I had no doubt that you could handle it.',
    'To infinity and beyond!',
    "Don't stop, continue on!",
    'Exactly!',
    'Cool! Remember me when you get hired on Google.'
]

quizData = [
    {
        question: 'What is the correct HTML tag for the largest heading?',
        answers: ['<heading>', '<h6>', '<head>', '<h1>'],
        bingo: 3
    },
    // {
    //     question: 'What is the correct HTML tag for inserting a line break?',
    //     answers: ['<br>', '<lb>', '<break>'],
    //     bingo: 0
    // },
    // {
    //     question: 'What is the correct HTML for creating a hyperlink?',
    //     answers: [
    //         '<a url="http://www.github.com">Github.com</a>',
    //         '<a name="http://www.github.com">Github.com</a>',
    //         '<a href="http://www.github.com">Github.com</a>',
    //         '<a>http://www.github.com</a>'
    //     ],
    //     bingo: 2
    // },
    // {
    //     question: 'What is the correct HTML for inserting an image?',
    //     answers: [
    //         '<img alt="MyImage">image.gif</img>',
    //         '<img src="image.gif" alt="MyImage">',
    //         '<image src="image.gif" alt="MyImage">',
    //         '<img href="image.gif" alt="MyImage">'
    //     ],
    //     bingo: 1
    // },
    // {
    //     question: 'How can you make a numbered list?',
    //     answers: [
    //         '<ol>',
    //         '<ul>',
    //         '<dl>',
    //         '<list>'
    //     ],
    //     bingo: 0
    // },
    // {
    //     question: 'What is the correct HTML for making a checkbox?',
    //     answers: [
    //         '<checkbox>',
    //         '<input type="checkbox">',
    //         '<check>',
    //         '<input type="check">'
    //     ],
    //     bingo: 1
    // },
    // {
    //     question: 'Which sign is a valid identifier of an alias for jQuery?',
    //     answers: [
    //         'the * sign',
    //         'the ! sign',
    //         'the # sign',
    //         'the $ sign'
    //     ],
    //     bingo: 3
    // },
    // {
    //     question: 'What does $("div") select?',
    //     answers: [
    //         'All div elements',
    //         'The first div element',
    //         'An element with id "div"', 
    //         'An element with class "div"'
    //     ],
    //     bingo: 0
    // },
    // {
    //     question: 'What is the correct jQuery code to set the background color of all p elements to red?',
    //     answers: [
    //         '$("p").css("background-color","red");',
    //         '$("p").manipulate("background-color","red");',
    //         '$("p").layout("background-color","red");',
    //         '$("p").style("background-color","red");'
    //     ],
    //     bingo: 0
    // },
    // {
    //     question: 'What does $("div.intro") select?',
    //     answers: [
    //         'All div elements with id="intro"',
    //         'The first div element with id="intro"',
    //         'The first div element with class="intro"',
    //         'All div elements with class="intro"'
    //     ],
    //     bingo: 3
    // },
    // {
    //     question: 'Which jQuery method is used to hide selected elements?',
    //     answers: [
    //         'hidden()',
    //         'visible(false)',
    //         'hide()',
    //         'display(none)'
    //     ],
    //     bingo: 2
    // },
    // {
    //     question: 'What is the newest version of HTML being developed?',
    //     answers: [
    //         'HTML3',
    //         'HTML4',
    //         'HTML5',
    //         'There is only one type of HTML'
    //     ],
    //     bingo: 2
    // },
    {
        question: 'Are CSS property names case-sensitive?',
        answers: [
            'Yes',
            'No'
        ],
        bingo: 1,
        code: (
        `ul {
        \t MaRGin: 10px; 
        }`).replace(/  +/g, ''),
        language: 'language-css'
    }
]

