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
        question: 'What does <span class="text-span"> $("div") </span> select?',
        answers: [
            'All div elements',
            'The first div element',
            'An element with id "div"',
            'An element with class "div"'
        ],
        bingo: 'All div elements'
    },
    {
        question: 'What is the correct jQuery code to set the background color of all <span class="text-span"> p </span> elements to red?',
        answers: [
            '$("p").css("background-color","red");',
            '$("p").manipulate("background-color","red");',
            '$("p").layout("background-color","red");',
            '$("p").style("background-color","red");'
        ],
        bingo: '$("p").css("background-color","red");'
    },
    {
        question: 'What does <span class="text-span"> $("div.intro") </span> select?',
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
            'hidden( )',
            'visible(false)',
            'hide( )',
            'display(none)'
        ],
        bingo: 'hide( )'
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
    },
    {
        question: 'Which of the following will evaluate as true?',
        code: (
            `1. '23' === 23
            2. true && false
            3. !(true || false)
            4. '7' == 7
        `).replace(/  +/g, ''),
        answers: ['1', '2', '3', '4'],
        bingo: '4'
    },
    {
        question: 'Which character or set of characters can be used to make a single-line comment in Javascript?',
        answers: ['#', '//', '||', '--'],
        bingo: '//'
    },
    {
        question: 'What do you expect the above code will print out to the console respectively?',
        code: (
            `var a = 3;
            var b = 10;
            function outer( ) {
                \tvar a = 1;
                \tfunction inner( ) {
                    \t\tvar b = 2;
                    \t\tconsole.log(a + b);
                \t}
                \tinner( );
                \tconsole.log(a);
            }
            console.log(a);
            outer( );
            console.log(b)`
        ).replace(/  +/g, ''),
        answers: ['3, 3, 1, 10', '1, 3, 1, 2', '3, 13, 1, 10', 'undefiened, 3, 1, undefined'],
        bingo: '3, 3, 1, 10'
    },
    {
        question: 'Which of the following will evaluate as false?',
        code: (
            `1. typeof true == 'boolean'
            2. typeof 'hey' == 'string'
            3. typeof 'undefined' == 'undefined'
            4. typeof null == 'object'
            `
        ).replace(/  +/g, ''),
        answers: ['1', '2', '3', '4'],
        bingo: '3'
    },
    {
        question: "What will the above code print out?",
        code: 
        `var c = 4;
        bar( );
        function bar( ) {
        \tc = 5;
        \treturn;
        \tvar c;
        }
        console.log(c);
        `.replace(/  +/g, ''),
        answers: ['4', '5', 'undefined', 'null'],
        bingo: '4'
    },
    {
        question: "Which of the following is an example of the use of ternary operator which can be used to shorten <span class='text-span'> if..else </span> statements?",
        answers: [
            '(x == 2) ? doSomething( ) : doAnotherThing( )',
            'x == 2 && doSomething( )',
            'x == 2 || doSomething( )',
            'if (x == 2) {doSomething( )}'
        ],
        bingo: '(x == 2) ? doSomething( ) : doAnotherThing( )'
    },
    {
        question: "What is the output of the code above?",
        code: (
            `console.log(2 + '2')
            console.log(2 - '2')
            `.replace(/  +/g, '')
        ),
        answers: [
            '4, 0', 
            '22, 22', 
            '22, 0', 
            'The first output is 22, the second will show an error'
        ],
        bingo: '22, 0'
    },
    {
        question: "What is the output of the code above?",
        code: (
            `console.log(5 < 6 < 7)
            console.log(7 > 6 > 5)
            `.replace(/  +/g, '')
        ),
        answers: [
            'true, true', 
            'false, false', 
            'true, false', 
            'false, true'
        ],
        bingo: 'true, false'
    },
    {
        question: "What is the output of the code above?",
        code: (
            `console.log(Math.max())`.replace(/  +/g, '')
        ),
        answers: [
            'Infinity',
            '-Infinity',
            'undefined',
            'null'
        ],
        bingo: '-Infinity'
    },
    {
        question: "What is the output of the code above?",
        code: (
            "function a() { \n\treturn 'hello'; \n} \nconst sentence = a `hi`;\nconsole.log(sentence)".replace(/  +/g, '')
        ),
        answers: [
            'hello',
            'hi',
            'hihello',
            'hellohi'
        ],
        bingo: 'hello'
    },
]

