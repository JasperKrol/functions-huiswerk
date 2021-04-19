// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [3, 2, 1, 5, 7, 7, 4, 8, 8, 3, 6, 9, 8, 5, 6];
/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
        console.log("array length:", grades.length);
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat? for loop
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden? stoppen in een variabele
// Log het antwoord in de terminal.


// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

let studentCounter = 0;
// counter moet op 0 beginnen om zo het aantal studenten te kunnen loggen met een 8 uit de array
function howManyCumLaude (grades) {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) { // als de index uit de array hoger is dan een 8 stop deze dan in de student counter
            studentCounter = studentCounter + 1;
        }
    }
    return studentCounter // return de value

}

const numberOfStudentsCL = howManyCumLaude([8, 9, 4, 6, 10]);
console.log("oefening 1b uitkomst: ", numberOfStudentsCL)

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
    // gemiddelde wordt berekend door de som van de array / door het aantal in de array
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
    // de som van de indexen uit de array
    // de array length is het aantal
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
    // met de for loop
// Log het antwoord in de terminal.

let som = 0;

function gradeAverage (grades) {
    const arrayLength = grades.length;

    for (let i = 0; i < grades.length; i++) {
        som = som + grades[i];
        /*console.log("WHAT IS THE SOM AND INDEX", som, grades[i]);*/
    }
    // som bepaald door te loggen en de index te controleren, nu delen door aantal van de array
    const average = som / arrayLength;
    return average;
}

const theAverage = gradeAverage(grades);
console.log("oefening 2a uitkomst:", theAverage);

// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

let averageCount = 0;

function averageGrade (grades) {
    for (let i = 0; i < grades.length; i++) {
        averageCount = averageCount + grades[i];
    }
    return averageCount / grades.length;
}

const theAverageIs = averageGrade([8, 9, 4, 6, 10]);
console.log("oefening 2b uitkomst:", theAverageIs);

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

const averageRounded = theAverageIs.toFixed(2);
console.log("oefening 2c uitkomst:", averageRounded);



/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// standaard getal op nul zetten

// array index doorlopen met for loop

// als het nummer groter is dan het vorige nummer wordt dat het (tijdelijke) hoogste nummer

// opslaan in variabele

//output is hoogste nummer

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

let number = 0;

function highestGrade (grades) {
    for (let i = 0; i < grades.length; i++) {
       /* console.log("WHAT IS THE GRADE AND NUMBER", grades[i], number)*/
        if (grades[i] > number){
            number = grades[i]
        }
    }
    return number
}

const thisIsTheHighestNumber = highestGrade(grades);
console.log(thisIsTheHighestNumber)

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
