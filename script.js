// Récupération des différents éléments
const question = document.querySelector(".question");
const input = document.querySelector(".input");
const form = document.querySelector(".form");
const scorePlayer = document.querySelector(".score");
const result = document.querySelector(".result");

// Création des constantes
const number1 = Math.ceil(Math.random() * 10);
const number2 = Math.ceil(Math.random() * 10);
const correctAnswer = number1 * number2;
console.log(correctAnswer);

// La méthode JSON.parse() analyse une chaîne de caractères JSON et construit la valeur JavaScript ou l'objet décrit par cette chaîne.
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

scorePlayer.textContent = `Votre score: ${score}`;
question.textContent = `Quel est le résultat de ${number1} multiplié par ${number2} ?`;

// Ecoute de l'événement "submit" sur le formulaire
form.addEventListener("submit", () => {
  const userAnswer = +input.value;
  // Condition if...else
  if (userAnswer === correctAnswer) {
    // Incrémentation du score
    score++;
    result.textContent = "Bonne réponse";
    result.style.color = "#4aa869";
    // Appel de la fonction updateLocalStorage()
    updateLocalStorage();
  } else {
    // Dégrémentation du score
    score--;
    result.textContent = `Mauvaise réponse. La bonne réponse était ${correctAnswer}`;
    result.style.color = "#f35d5d";
    // Appel de la fonction updateLocalStorage()
    updateLocalStorage();
  }
});

// Déclaration de la fonction updateLocalStorage qui va stocker le score de l'utilisateur dans le local storage
const updateLocalStorage = () => {
  // La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON.
  localStorage.setItem("score", JSON.stringify(score));
};
