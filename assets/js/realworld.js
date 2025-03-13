
/* du må både ændre koden her, og i din HTML, hvis det er nødvendigt.. */


/*Opgave 1: skriv en validering af svar i koden herunder. resultatet skal vises i myAnsverFeedbackElement når bruger trykker på myAnsverButton .
der et korrekte svar:
nej 
*/
const myAnsverInput = document.getElementById('answerOne');
const myAnsverButton = document.getElementById('answerButton');
const myAnsverFeedbackElement = document.getElementById('answerFeedback');

myAnsverButton.addEventListener('click', (e) => {
  e.preventDefault();
  /* din kode her. Skriv en alert der skriver "du har svarret rigtigt" hvis svarret er true
  og "du har svarret forkert" hvis svaret er false*/
  let myAnswer = myAnsverInput.value;
  console.log('Answer is: ' + myAnswer);
  if (myAnswer === "nej" || myAnswer === "ja i disney film") {
    myAnsverFeedbackElement.textContent = "Du har svaret rigtigt!";
    myAnsverFeedbackElement.style.color = "green";
} else {
    myAnsverFeedbackElement.textContent = "Du har svaret forkert!";
    myAnsverFeedbackElement.style.color = "red";
}
});
/*Opgave 2: udkommenter opgave 1, og omskriv nu din funktion til to korrekte svar:
nej
ja i disney film
*/


/*opgave 3: skriv en kode der valider formen med følgende elementer: (denne opgave er på extreme niveau) 

- korrekt e-mail type. brug funktionen "validateEmail(minEmail) til at checke en string med den indtastede email
- navnet skal være længere end 3 bogstaver, med realtime validering (brug keyup til at checke, og .lengt til at finde længden)
- alder skal være større end 12.
 du må gerne bare consol.logge de forskellige tests i konsollen, men hvis du kan må du gerne lave feedback i elementet formValideringResult.
*/
const nameInput = document.getElementById('myName');
const emailInput = document.getElementById('myEmail');
const ageInput = document.getElementById('myAge');
const submitButton = document.getElementById('submitButton');
const validationResult = document.getElementById('formValideringResult');

function validateForm() {
    let nameValid = nameInput.value.length > 3;
    let emailValid = validateEmail(emailInput.value);
    let ageValid = parseInt(ageInput.value) > 12;

    if (nameValid && emailValid && ageValid) {
        validationResult.textContent = "Formen er korrekt udfyldt!";
        validationResult.style.color = "green";
    } else {
        validationResult.textContent = "Formen er ikke udfyldt korrekt!";
        validationResult.style.color = "red";
    }
}

// Real-time validering af navn
nameInput.addEventListener('keyup', () => {
    if (nameInput.value.length > 3) {
        nameInput.style.borderColor = "green";
    } else {
        nameInput.style.borderColor = "red";
    }
});

// Klik-event på submit-knap
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm();
});








/* helper functions*/
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/* eks på kald:
if (validateEmail("test@example.com")) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
*/
