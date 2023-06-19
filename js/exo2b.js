// On demande à l'utilisateur d'entrer le nombre X 
var nombre = parseInt(prompt("Entrez un nombre :")); 
// On initialise la variable qui contiendra les nombres impairs 
var nombresImpairs = ""; 
// On fait une boucle qui commence à 0 et se termine au nombre donné par l'utilisateur 
for (var i = 0; i <= nombre; i++) { 
    // Si le nombre est impair (reste de la division par 2 différent de 0), 
    // alors on l'ajoute à la variable qui contient les nombres impairs 
    if (i % 2 !== 0) { 
        nombresImpairs += i + " "; 
    } 
} 
// On affiche à l'utilisateur les autres nombres impairs 
alert("Voici la liste des nombres impairs entre 0 et " + nombre + ": " + nombresImpairs);
