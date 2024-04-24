// Récupération des différents éléments
const question = document.querySelector(".question");
const input = document.querySelector(".input");
const submitBtn = document.querySelector(".btn.submit");
const nextBtn = document.querySelector(".btn.next");
const resetBtn = document.querySelector(".btn.reset");
const scorePlayer = document.querySelector(".score");
const result = document.querySelector(".result");

// Création des constantes
const number1 = Math.ceil(Math.random() * 10);
const number2 = Math.ceil(Math.random() * 10);
const correctAnswer = number1 * number2;
console.log(correctAnswer);

/**
 * Initialisation du localStorage
 * La méthode JSON.parse() analyse une chaîne de caractères JSON et construit la valeur JavaScript ou l'objet décrit par cette chaîne.
 */
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

scorePlayer.textContent = `Votre score: ${score}`;

// Déclaration de la fonction displayQuestion qui permet d'afficher les questions
const displayQuestion = () => {
  return (question.textContent = `Quel est le résultat de ${number1} multiplié par ${number2} ?`);
};

// Appel de la fonction displayQuestion()
displayQuestion();

// Ecoute de l'événement "click" sur le bouton question suivante et appel de la fonction displayQuestion
nextBtn.addEventListener("click", displayQuestion);

// Ecoute de l'événement "submit" sur le formulaire
submitBtn.addEventListener("click", (e) => {
  // Suppression du comportement par défaut
  e.preventDefault();
  const userAnswer = +input.value;
  // Condition if...else
  if (userAnswer === correctAnswer) {
    // Incrémentation du score
    score++;
    result.textContent = "Bonne réponse !";
    result.style.color = "#4aa869";
    // Appel de la fonction updateLocalStorage()
    updateLocalStorage();
  } else {
    // Décrémentation du score
    score--;
    result.textContent = `Mauvaise réponse! La bonne réponse était ${correctAnswer}.`;
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

// Déclaration de la fonction resetScore qui va remettre à zéro le score
const resetScore = () => {
  // Vider le localStorage
  localStorage.clear();
};

// Ecoute de l'événement "click" sur le bouton et appel de la fonction resetScore
resetBtn.addEventListener("click", resetScore);
