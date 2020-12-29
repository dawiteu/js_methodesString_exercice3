/*

let mot = prompt("Entrez un mot"); 

let lettre = prompt("Entrez la lettre du mot que vous voulez retirer "); 


mot = mot.replace(mot.charAt(mot.indexOf(lettre)), "");
console.log(mot); 

*/


/*
let mot = prompt("entrez un mot"); 
let maxmot = mot.length;  

exo2 = Math.floor(Math.random() * maxmot + 1 ); 

console.log(`la lettre qui disparait c'est: ${mot.charAt(exo2)} `)
exo3 = mot.replace(mot.charAt(exo2), "");
console.log(exo3); 

*/


let pre = prompt("Prenom ? "); 
let age = parseInt(prompt("Age? ")); 
let nom = prompt("Nom ? "); 
let tai = prompt("Entre ta taille [nombre]m[nombre] ==> ex 1m75"); 


//exo nom:
exn1 = nom.toLowerCase(); 
exn2 = nom.charAt(0).toUpperCase() + exn1.slice(1,-1); 
exn3 = nom.substr(nom.length-1).toUpperCase(); 

exn3 = exn2.concat(exn3); 
console.log(`${exn3} = nom`);


// prenom, 
exp1 = pre.toLowerCase(); 

exp1 = exp1.replace(exp1.charAt(Math.floor(Math.random() * pre.length + 1)), ""); 
exp1 = exp1.replace(exp1.charAt(Math.floor(Math.random() * pre.length + 1)), ""); 

exp1 = pre.charAt(0).toUpperCase() + exp1.slice(1); 

console.log(`Ton prenom: ${exp1}`); 

//age 
exa = age * 12; 

console.log(`ton qge en mois: ${exa}` );


//hauteur em m apres en cm ; 

let pat = /(m|M)/g;

ext = tai.split(pat); 

ext = ext[0].concat(ext[2], " cm"); // ou , " " ou remplace "cm" by " cm" ; 

console.log(`Votre taille: ${ext}.`); 


console.log(`Bonjour ${exn3} ${exp1}, ton prenom comporte ${pre.length} mais j'en ai supp ${pre.length-exp1.length}. Tu as ${exa} mois et tu mesure ${ext}.`);

