// Début de l'algorithme 
//Initialisation des variables 
let nombreDeDepart; 
let multiplication; 
let resultat; 
//Demande et sauvegarde du nombre par l'utilisateur 
nombreDeDepart = prompt("Veuillez entrer un nombre de départ :"); 
//Affichage de la table 
alert("Table de " + nombreDeDepart + " :"); 
//Boucle qui permet de calculer les 10 premières multiplications 
for(multiplication=1; multiplication<=10; multiplication++) { 
    resultat = nombreDeDepart * multiplication; 
    alert(nombreDeDepart + " x " + multiplication + " = " + resultat); 
} //Fin de l'algorithme
