// début de l'algorithme 
// Déclarer une variable qui va contenir la réponse de l'utilisateur 
var userInput; 
// Début de la boucle 
while (true) { 
    // Demander à l'utilisateur un nombre compris entre 1 et 3 
    userInput = prompt("Veuillez entrer un nombre compris entre 1 et 3"); 
    // Convertir la réponse en nombre 
    userInput = parseInt(userInput); 
    // Si le nombre est compris entre 1 et 3, la boucle s'arrête 
    if (userInput >= 1 && userInput <= 3) { 
        break; 
    } 
    // Si le nombre n'est pas compris entre 1 et 3, afficher un message d'erreur 
    else { 
        console.log("Veuillez entrer un nombre compris entre 1 et 3 !"); 
    } 
} // Fin de l'algorithme