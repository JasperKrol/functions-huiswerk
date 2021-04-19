// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


/*//input domeinnaam
const emailTryOut = "n.eeken@novi-education.nl";
//index code  @  zoeken
const findingIndexAt = emailTryOut.indexOf("@");
console.log(findingIndexAt);// geeft 7
    //splitten e-mailadres na @
const splitAfterIndex = emailTryOut.substring(7);
console.log(splitAfterIndex)
// schrijf functie
// functie aanroepen
// output loggen*/

function getEmailDomain(email) {
    const indexOfAt = email.indexOf("@")
    return email.substring(indexOfAt + 1);
    /*return email.substring(email.indexOf("@")+1) korte versie*/
}

const emailDomain = getEmailDomain("a.wiersma@outlook.com");
console.log("oefening 1 uitkomst:", emailDomain);


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

// schrijf een functie
    // input  = email
    // controleer wat voor domein het is
    // domein koppelen aan type (comparison operators)

function typeOfEmail (email) {
    const indexOfAt = email.indexOf("@");
    const getDomain = email.substring(indexOfAt);
    if (getDomain === "@novi-education.nl") {
        /*console.log("WHAT IS DOMAIN", getDomain)*/
        return "Student"
    } if (getDomain === "@novi.nl") {
        return "Medewerker";
    } else {
        return "Extern";
    }
}

const typeOfRegistration = typeOfEmail("a.wiersma@outlook.com");
console.log("oefening 2 uitkomst:", typeOfRegistration);

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity (email) {
    const containsAnAt = email.includes("@");
    const cannotContainComma =! email.includes(",");
    const noDotAtEnd =! email.includes(".", email.length -1);
    /*console.log("WHAT DOES AT:", containsAnAt); controle functie
    console.log("what does COMMA:", cannotContainComma);controle functie
    console.log("WHAT DOES NODOT:",noDotAtEnd) controle functie;*/
    if (containsAnAt === true && cannotContainComma === true && noDotAtEnd === true) {
        return "Geldige email"
    } else {
        return "Ongeldige email invoer"
    }
}

const correctEmail = checkEmailValidity("n.eeken@novinl.");
console.log("oefening 3 uitkomst:",correctEmail);
