//Définir le nombre x: 
let number = prompt("Entrez un nombre:") 
//Vérifier si le nombre est paire et l'afficher: 
for (let i = 0; i <= number; i++) { 
    if (i % 2 === 0) { 
        console.log(i);
    } 
}
console.log(number);