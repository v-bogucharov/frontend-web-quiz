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
        bingo: '<h1>'
    },
    {
        question: 'What is the correct HTML tag for inserting a line break?',
        answers: ['<br>', '<lb>', '<break>'],
        bingo: '<br>'
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        answers: [
            '<a url="http://www.github.com">Github.com</a>',
            '<a name="http://www.github.com">Github.com</a>',
            '<a href="http://www.github.com">Github.com</a>',
            '<a>http://www.github.com</a>'
        ],
        bingo: '<a href="http://www.github.com">Github.com</a>'
    },
    {
        question: 'What is the correct HTML for inserting an image?',
        answers: [
            '<img alt="MyImage">image.gif</img>',
            '<img src="image.gif" alt="MyImage">',
            '<image src="image.gif" alt="MyImage">',
            '<img href="image.gif" alt="MyImage">'
        ],
        bingo: '<img src="image.gif" alt="MyImage">'
    },
    {
        question: 'How can you make a numbered list?',
        answers: [
            '<ol>',
            '<ul>',
            '<dl>',
            '<list>'
        ],
        bingo: '<ol>'
    },
    {
        question: 'What is the correct HTML for making a checkbox?',
        answers: [
            '<checkbox>',
            '<input type="checkbox">',
            '<check>',
            '<input type="check">'
        ],
        bingo: '<input type="checkbox">'
    },
    {
        question: 'Which sign is a valid identifier of an alias for jQuery?',
        answers: [
            'the * sign',
            'the ! sign',
            'the # sign',
            'the $ sign'
        ],
        bingo: 'the $ sign'
    },
    {
        question: 'What does $("div") select?',
        answers: [
            'All div elements',
            'The first div element',
            'An element with id "div"', 
            'An element with class "div"'
        ],
        bingo: 'All div elements'
    },
    {
        question: 'What is the correct jQuery code to set the background color of all p elements to red?',
        answers: [
            '$("p").css("background-color","red");',
            '$("p").manipulate("background-color","red");',
            '$("p").layout("background-color","red");',
            '$("p").style("background-color","red");'
        ],
        bingo: '$("p").css("background-color","red");'
    },
    {
        question: 'What does $("div.intro") select?',
        answers: [
            'All div elements with id="intro"',
            'The first div element with id="intro"',
            'The first div element with class="intro"',
            'All div elements with class="intro"'
        ],
        bingo: 'All div elements with class="intro"'
    },
    {
        question: 'Which jQuery method is used to hide selected elements?',
        answers: [
            'hidden()',
            'visible(false)',
            'hide()',
            'display(none)'
        ],
        bingo: 'hide()'
    },
    {
        question: 'What is the newest version of HTML being developed?',
        answers: [
            'HTML3',
            'HTML4',
            'HTML5',
            'There is only one type of HTML'
        ],
        bingo: 'HTML5'
    },
    {
        question: 'Are CSS property names case-sensitive?',
        answers: [
            'Yes',
            'No'
        ],
        bingo: 'No',
        code: (
            `ul {
        \tMaRGin: 10px; 
        }`).replace(/  +/g, '')
    },
    {
        question: 'What will the code above print to the console?',
        code: (
            `var a = 5;
            a++;
            a -= 3;
            a *= 2;
            a--;
            console.log(a);`
        ).replace(/  +/g, ''),
        answers: ['3', '4', '5', '6'],
        bingo: '5'
    }
]

