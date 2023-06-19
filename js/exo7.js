// Début de l'algorithme 
// On crée une variable qui prend la valeur 0. 
let number = 0; 
// On définit une boucle while pour vérifier si le nombre saisi est entre 10 et 20. 
while (number < 10 || number > 20) { 
    // On demande à l'utilisateur d'entrer un nombre compris entre 10 et 20. 
    number = window.prompt("Veuillez entrer un nombre entre 10 et 20 :"); 
    // On convertit le nombre en type entier (pour éviter des erreurs). 
    number = parseInt(number); 
    // On vérifie si le nombre est supérieur à 20. 
    if (number > 20) { 
        alert("Plus petit !"); 
    } // On vérifie si le nombre est inférieur à 10. 
    else if (number < 10) { 
        alert("Plus grand !"); 
    } 
    // On sort de la boucle si le nombre saisi est compris entre 10 et 20. 
    else if (number >= 10 && number <= 20) { 
        break; 
    } // On met une limite à la boucle pour éviter l'exécution infinie. 
    if (i > 100) { 
        alert("Vous avez atteint la limite !"); 
        break; 
    } // On incrémente la valeur de la variable i pour afficher la limite de la boucle. 
    i++; 
} // Fin de l'algorithme
