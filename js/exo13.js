// Déclaration des variables 
let nombres = []; 
let max;
let i;
// Boucle qui demande à l'utilisateur 20 nombres et les stocke dans le tableau nombre 
while (i=true) { 
    nombres.push(Number(prompt("Entrez un nombre svp :")));
    if(nombres==0){
        i=false;
    } 
} 
// Assignation de la valeur du premier élément du tableau nombres à la variable max 
max = nombres[0]; 
// Boucle qui parcourt le tableau nombres et trouve le nombre le plus grand 
for (let j = 0; j < nombres.length; j++) { 
    if (nombres[j] > max) { 
        max = nombres[j]; 
    } 
} 
// Affichage du plus grand nombre 
alert("Le plus grand nombre saisi est : " + max);
