// Déclarer les variables a, b et c 
var a, b, c; 
// Les valeurs de a, b et c sont égales à 1 
a = 1; b = 1; c = 1; 
// Calculer le discriminant Δ 
var delta = b * b - 4 * a * c; 
// Trouver les racines 
if (delta > 0) { 
    var racine1 = (-b + Math.sqrt(delta)) / (2 * a); 
    var racine2 = (-b - Math.sqrt(delta)) / (2 * a); 
    console.log("Les racines sont " + racine1 + " et " + racine2); 
} 
else if (delta === 0) { 
    var racine = (-b) / (2 * a); 
    console.log("La racine est " + racine); 
} 
else { 
    console.log("L'équation n'a pas de racine réelle"); 
}


