const quizzes = [
    {
        quizTag: 'HTML',
        quizName: 'Fragen rund um das Thema HTML, CSS und Javascript.',
        quizHeaderImage: './img/html5.jpg',
        questions: [
            {
                question: 'Wer hat HTML erfunden',
                answers: [
                    'Robbie Williams',
                    'Lady Gaga',
                    'Tim Berners-Lee',
                    'Justin Biber',
                ],
                rightAnswer: 2,
            },
            {
                question: 'Was bedeutet das HTML Tag <a>',
                answers: [
                    'Text Fett',
                    'Container',
                    'Ein Link',
                    'Kursiv',
                ],
                rightAnswer: 2,
            },
            {
                question: 'Wie bindet man eine Website in eine Website ein',
                answers: [
                    '<iframe>, <frame>, und <frameset>',
                    '<iframe>',
                    '<frame>',
                    '<frameset>',
                ],
                rightAnswer: 1,
            },
            {
                question: 'Wie stellt man Text am BESTEN fett dar',
                answers: [
                    '<strong>',
                    'CSS nutzen',
                    '<bold>',
                    '<b>',
                ],
                rightAnswer: 0,
            },
            {
                question: 'Welches Attribut kann man NICHT für Textarea nutzen',
                answers: [
                    'readonly',
                    'max',
                    'from',
                    'spellcheck',
                ],
                rightAnswer: 0,
            },
            {
                question: 'Wie wählst du alle Elemente vom Type <a> mit dem attribut title aus',
                answers: [
                    'a[title]{...}',
                    'a > title {...}',
                    'a.title {...}',
                    'a=title {...}',
                ],
                rightAnswer: 0,
            },
            {
                question: 'Wie definiert man in Javascript eine Variable',
                answers: [
                    'let 100 = rate;',
                    '100 = let rate;',
                    'rate = 100;',
                    'let rate = 100;',
                ],
                rightAnswer: 3,
            },
        ]
    },
    {
        quizTag: 'G Code',
        quizName: 'Fragen rund um das Thema GCode (CNC Programmierung)<br>Speziell für CNC Dreh- und Fräsmaschinen',
        quizHeaderImage: './img/cnc.jpg',
        questions: [
            {
                question: 'Mit welchen Befehl wir die Kühlmittelpumbe eingeschaltet',
                answers: [
                    'M8',
                    'M3',
                    'M9',
                ],
                rightAnswer: 0,
            },
            {
                question: 'Welcher Befehl setzt die Hauptspindel im Rechtslauf in Gang',
                answers: [
                    'G10',
                    'M3',
                    'M5',
                ],
                rightAnswer: 1,
            },
            {
                question: 'Mit welchen Befehl wird die Hauptspindel gestoppt',
                answers: [
                    'M0',
                    'G0',
                    'M5',
                ],
                rightAnswer: 2,
            },
            {
                question: 'Welcher Code bedeutet "Optional Stopp"',
                answers: [
                    'M0',
                    'M1',
                    'M2',
                ],
                rightAnswer: 1,
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
                rightAnswer: 2,
            },
            {
                question: 'Beim Außenkonturfräsen mit FRK gegen den Uhrzeigersinn setzt man welchen Code ein',
                answers: [
                    'G41',
                    'G42',
                ],
                rightAnswer: 1,
            },
            {
                question: 'Wit welchen Buchstaben spricht man die Werkzeuge an',
                answers: [
                    'O',
                    'W',
                    'T',
                ],
                rightAnswer: 2,
            },
            {
                question: 'Beim Außenüberdrehen mit SRK setzt man welchen Code ein',
                answers: [
                    'G41',
                    'G42',
                ],
                rightAnswer: 1,
            },
            {
                question: 'Mit welchen Befehl wird Konstante Schnittgeschwindigkeit gesetzt',
                answers: [
                    'G99',
                    'G96',
                    'G97',
                ],
                rightAnswer: 1,
            },
        ]
    },
    {
        quizTag: 'Gewinde',
        quizName: 'Fragen rund um das Thema Gewinde und Gewindearten',
        quizHeaderImage: './img/screw.jpg',
        questions: [
            {
                question: 'Welchen Flankenwinkel hat Metrisches Gewinde',
                answers: [
                    '55°',
                    '80°',
                    '60°',
                ],
                rightAnswer: 2,
            },
            {
                question: 'Welchen Flankenwinkel hat Pg (Panzergewinde)',
                answers: [
                    '55°',
                    '80°',
                    '60°',
                ],
                rightAnswer: 1,
            },
            {
                question: 'Welches ist die Bezeichnung für Amerikanisches Trapezgewinde',
                answers: [
                    'ACME',
                    'ASME',
                    'BSW',
                ],
                rightAnswer: 0,
            },
            {
                question: 'Welchen Flankenwinkel hat Trapezgewinde',
                answers: [
                    '29°',
                    '55°',
                    '30°',
                    '60°',
                ],
                rightAnswer: 2,
            },
            {
                question: 'Was bedeutet M10x2P1',
                answers: [
                    'Zweigängiges Metrisches Gewinde mit Steigung 2 und Außendurchmesser 10',
                    'Zweigängiges Metrisches Gewinde mit Steigung 1 und Außendurchmesser 10',
                ],
                rightAnswer: 0,
            },
            {
                question: 'Was bedeutet Fg',
                answers: [
                    'Fahrrad Gewinde',
                    'Fein Gewinde',
                ],
                rightAnswer: 0,
            },
        ]
    }
]
