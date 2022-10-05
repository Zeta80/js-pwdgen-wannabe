// Numero
const number = 21;

// Chiedi all’utente il suo nome,
const userName = prompt('Come ti chiamare tu?');
console.log(userName, typeof userName);

// Chiedi all’utente il suo cognome,
const userLastName = prompt('Quale cognome hai?');
console.log(userLastName, typeof userLastName);

// Chiedi all’utente il suo colore preferito,
const userColor = prompt('Il colore che prediligi?');
console.log(userColor, typeof userColor);

const password = userName + userLastName + userColor + number;
console.log(password)

// Output
const userPassword = 'Questa è la tua password: ' + password;
document.getElementById("password").innerHTML = userPassword;
console.log(userPassword)