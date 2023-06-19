// Début de l'algorithme 
// Demande un nombre à l'utilisateur 
let nombre = prompt("Entrez un nombre :"); 
// Initialise une variable pour stocker le résultat 
let resultat = 0; 
// Boucle de calcul 
for (let i = 1; i <= nombre; i++) { 
    resultat *= i; 
} 
// Affichage du résultat 
console.log("Le produit factorielle des entiers jusqu'à " + nombre + " est égale à " + resultat); 
// Fin de l'algorithme
