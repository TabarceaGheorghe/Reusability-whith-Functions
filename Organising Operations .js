//Organising Operations 

let thisText="Hello!"
function logIntoTerminal(toLog){
    let localText = "world!";
    console.log(localText)
    console.log(thisText);
    function fourthFunction () {
    console.log("GoodMorning!")
    }
    fourthFunction();
    console.log(toLog)
    return 
}
logIntoTerminal()

function anotherFunction() {
    let a = 1;
    logIntoTerminal("Its from anotherFunction()!", a)
    
}
anotherFunction()

const thirdFunction = function () {
    let b = 2;
    logIntoTerminal("Its an argument too!", b);
}
thirdFunction()

function greetings(firstName) {
    return "Greetings, " + firstName;
    }
    
    
    console.log(greetings("Anna"))
    
    console.log(greetings("John"))
    
    console.log(greetings("Repo"))
    
    console.log(greetings("Ben"))
    
    console.log(greetings("Azugradar"))
