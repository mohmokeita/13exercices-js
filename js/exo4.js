var userdateinput = prompt("Entrez une année (YYYY)") 
if (userInput % 400 == 0 || (userInput % 4 == 0 && userInput % 100 != 0)) { 
    console.log("Oui c'est une année bissextile") 
} 
else { 
    console.log("Non ce n'est pas une année bissextile") 
}