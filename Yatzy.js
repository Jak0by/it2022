terningene = document.getElementsByClassName("terningene");

let seksjonArray = [
    document.getElementsByClassName("rad1"), //0
    document.getElementsByClassName("rad2"), //1
    document.getElementsByClassName("rad3"),
    document.getElementsByClassName("rad4"),
    document.getElementsByClassName("rad5"),
    document.getElementsByClassName("rad6"),
    document.getElementsByClassName("rad7"),
    document.getElementsByClassName("rad8"),
    document.getElementsByClassName("rad9"),
    document.getElementsByClassName("rad10"),
    document.getElementsByClassName("rad11"),
    document.getElementsByClassName("rad12"),
    document.getElementsByClassName("rad13"),
    document.getElementsByClassName("rad14"),
    document.getElementsByClassName("rad15"),
    document.getElementsByClassName("rad16"),
    document.getElementsByClassName("rad17"),
    document.getElementsByClassName("rad18"),
]

var spillere = document.getElementsByClassName("spillere");

//denne funksjonen legger til navn på spillere
function hvemSpiller() {
    for (let i = 0; i < spillere.length; i++) {
        spillere[i].innerHTML = prompt("navn på spiller");
    }
}

//Denne funksjonen lager ett tilfeldig tall mellom 1-6
function terningtall() {
    return Math.floor((Math.random() * 6) + 1)
}

function terningkast() {
    for (let i = 0; i < terningene.length; i++) {
        if (terningene[i].style.backgroundColor != "green") {
            terningene[i].innerHTML = terningtall();
        }
    }
}

for (let i = 0; i < terningene.length; i++) {
    terningene[i].style.backgroundColor = "grey";
}
function lagreterning(terning_Nr) {
    if (terningene[terning_Nr - 1].style.backgroundColor == "grey") {
        (terningene[terning_Nr - 1].style.backgroundColor = "green")
    }
    else if (terningene[terning_Nr - 1].style.backgroundColor == "green") {
        (terningene[terning_Nr - 1].style.backgroundColor = "grey")
    }
}
//denne funksjonen summerer de grønne utvalgte
function summer(radNummer, kolonneNummer) {
    resultat = 0;
    for (let i = 0; i < terningene.length; i++) {
        if (terningene[i].style.backgroundColor == "green") {
            resultat += Number(terningene[i].innerHTML)
        }
        terningene[i].style.backgroundColor = "grey";
    }
    seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat
}
//denne funksjonen legger sammen første sum før bonus
function forsteSum(radNummer, kolonneNummer) {
    sum = 0
    if (seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML > 0) {
    }
    else {
        for (let i = 0; i < 7; i++) {
            sum += Number(seksjonArray[i][kolonneNummer - 1].innerHTML);
        }
        seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = sum;
        if (sum >= 63) {
            seksjonArray[radNummer][kolonneNummer - 1].innerHTML = 50;
        }
        seksjonArray[radNummer][kolonneNummer - 1].innerHTML = 0;
    }
}

//den funksjonen legger til total sum
function totSum(radNummer, kolonneNummer) {
    sum = 0
    for (let i = 6; i < 17; i++) {
        sum += Number(seksjonArray[i][kolonneNummer - 1].innerHTML);
    }
    seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = sum;

    vinnerArray.splice(kolonneNummer - 1, 0, seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML)
    resetKast();
    vinner();
}
