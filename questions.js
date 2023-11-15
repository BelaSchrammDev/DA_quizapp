const quizzes = [
    {
        quizName: 'Fragen rund um das Thema HTML und CSS',
        quizHeaderImage: '',
        questions: [
            {
                question: 'Wer hat HTML erfunden',
                answers: [
                    'Robbie Williams',
                    'Lady Gaga',
                    'Tim Berners-Lee',
                    'Justin Biber',
                ],
                right_index: 2,
            },
            {
                question: 'Was bedeutet das HTML Tag <a>',
                answers: [
                    'Text Fett',
                    'Container',
                    'Ein Link',
                    'Kursiv',
                ],
                right_index: 2,
            },
            {
                question: 'Wie bindet man eine Website in eine Website ein',
                answers: [
                    '<iframe>, <frame>, und <frameset>',
                    '<iframe>',
                    '<frame>',
                    '<frameset>',
                ],
                right_index: 1,
            },
            {
                question: 'Wie stellt man Text am BESTEN fett dar',
                answers: [
                    '<strong>',
                    'CSS nutzen',
                    '<bold>',
                    '<b>',
                ],
                right_index: 0,
            },
            {
                question: 'Welches Attribut kann man NICHT für Textarea nutzen',
                answers: [
                    'readonly',
                    'max',
                    'from',
                    'spellcheck',
                ],
                right_index: 0,
            },
            {
                question: 'Wie wählst du alle Elemente vom Type <a> mit dem attribut title aus',
                answers: [
                    'a[title]{...}',
                    'a > title {...}',
                    'a.title {...}',
                    'a=title {...}',
                ],
                right_index: 0,
            },
            {
                question: 'Wie definiert man in Javascript eine Variable',
                answers: [
                    'let 100 = rate;',
                    '100 = let rate;',
                    'rate = 100;',
                    'let rate = 100;',
                ],
                right_index: 3,
            },
        ]
    },
    {
        quizName: 'Fragen rund um das Thema GCode (CNC Programmierung)',
        quizHeaderImage: '',
        questions: [
            {
                question: 'Mit welchen Befehl wir die Kühlmittelpumbe eingeschaltet',
                answers: [
                    'M8',
                    'M3',
                    'M9',
                ],
                right_index: 0,
            },
            {
                question: 'Welcher Befehl setzt die Hauptspindel im Rechtslauf in Gang',
                answers: [
                    'G10',
                    'M3',
                    'M5',
                ],
                right_index: 1,
            },
            {
                question: 'Mit welchen Befehl wird die Hauptspindel gestoppt',
                answers: [
                    'M0',
                    'G0',
                    'M5',
                ],
                right_index: 2,
            },
            {
                question: 'Welcher Code bedeutet "Optional Stopp"',
                answers: [
                    'M0',
                    'M1',
                    'M2',
                ],
                right_index: 1,
            },
            {
                question: 'Mit welchem Code wird die Schneiden- bzw. Fräserradiuskorrektur aufgehoben',
                answers: [
                    'M0',
                    'M40',
                    'G40',
                    'T40',
                    'M44',
                ],
                right_index: 2,
            },
            {
                question: 'Beim Außenkonturfräsen mit FRK gegen den Uhrzeigersinn setzt man welchen Code ein',
                answers: [
                    'G41',
                    'G42',
                ],
                right_index: 1,
            },
            {
                question: 'Wit welchen Buchstaben spricht man die Werkzeuge an',
                answers: [
                    'O',
                    'W',
                    'T',
                ],
                right_index: 2,
            },
            {
                question: 'Beim Außenüberdrehen mit SRK setzt man welchen Code ein',
                answers: [
                    'G41',
                    'G42',
                ],
                right_index: 1,
            },
        ]
    }
]
