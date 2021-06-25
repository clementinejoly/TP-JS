// console.log("bonjour");
// // pour débuggé le js dans inspecter faut aller dans console


// let age=5;
// // le le chiffre 5 et juste enregistré ca peut etre un mot ou autre chose peut importe
// // let c'est pour appeler une variable
// // le = est tjs apres le nom de la variable
// // age est le nom de la variable

// // const variable3;
// // // CONST veux dire constante

// // var variable2;

// function displayage(random) {
//     console.log(random);
// }
// // cette partie permet de dire ce que la fonction va faire
// // random nom= on met le nom qu'on veut ca permet juste de pouvoir donner le nom de la variable quand on fusionne la function et la variable 

// displayage(age);
// // permet uniquement d'appeler la function (la mettre en marche)
// // pour lier la function à un variable on met le nom de la variable ds les parentheses



// let exemple=8;

// function nommer(random) {
//     console.log(random);
// }

// nommer(exemple)

// function nommer2() {
//     console.log("pkoipas");
// }

// nommer2();

// let mail="adresse mail";

// let MP="mot de passe";

// function ecrire(random,autre){
//     console.log(random,autre);
// }

// ecrire(mail,MP);

// let ajout=537;

// function ajoutCinq(random){
//     console.log(random+5);
// }

// ajoutCinq(ajout)




// let nombre=prompt ('entrez un nombre');

// console.log(nombre);

// function ajoutCinq(nombreRecu){
//     let nombreEnInt=parseInt (nombreRecu)
//     console.log(nombreEnInt +5);
// }
// // parsInt change les mots en chiffre

// ajoutCinq(nombre)


// let autreNombre=prompt ('entrez un nombre');


// function ajoutDix(random){
//     let changerNombre=parseInt (random)
//     console.log(changerNombre + 10);
// }

// ajoutDix(autreNombre)

function essaiOnclick(){
changer = document.getElementById ('essai');
changer.style.backgroundColor = 'blue';
}
// c'est pour changer la couleur quand on click sur le bouton

function essaiOnclick(){
    changer = document.getElementById ('essai');
    document.getElementById("essai").innerHTML = "Paragraph changed!"; 
}
// c'est pour ajouter du tx sans passer par le HTML

function essaiOnclick2(){    
    var node = document.createElement("LI");               
    var textnode = document.createTextNode("liste 3");         
    node.appendChild(textnode);                             
    document.getElementById("try").appendChild(node);
}
// c'est pour ajouter une ligne dans la liste sans passer par le HTML




// exemple des exercices:
                         //-------------------------

monElelementP = document.getElementById('evenement');
                               //---------
monElelementP.addEventListener("mouseover",function()
{
                 //-------------------------
maDiv = document.getElementById('monElement');
      //----------------------------
maDiv.style.backgroundColor = "blue";

});

// 1 ajouter un P
MaVariable = document.getElementById('ajoutP');
MaVariable.addEventListener("click",
function(){
monAction = document.getElementById('ajoutP');
monAction.innerHTML = "Paragraph changed!";
});

// 2 changement de couleur
MaVariable = document.getElementById('ajoutP');
MaVariable.addEventListener("click",
function(){
monAction = document.getElementById('ajoutP');
monAction.style.backgroundColor = 'blue';
});

// 3 supp elt
MaVariable = document.getElementById('suppP');
MaVariable.addEventListener("click",
function(){
monAction = document.getElementById('suppP');
monAction.remove() = 'magique';
});

// 4 ajout de li
MaVariable = document.createElement("LI");
MaVariable.addEventListener("click",
function(){
monAction = document.createTextNode("liste 3");
monAction.node.appendChild(textnode);
document.getElementById("ajoutDeLi").appendChild(node);
});

function essaiOnclick2(){    
    var node = document.createElement("LI");               
    var textnode = document.createTextNode("liste 3");         
    node.appendChild(textnode);                             
    document.getElementById("try").appendChild(node);
}





