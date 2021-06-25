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
// MaVariable = document.getElementById('ajoutP');
// MaVariable.addEventListener("click",
// function(){
// monAction = document.getElementById('ajoutP');
// monAction.innerHTML = "Paragraph changed!";
// });

// 2 changement de couleur
// MaVariable = document.getElementById('ajoutP');
// MaVariable.addEventListener("click",
// function(){
// monAction = document.getElementById('ajoutP');
// monAction.style.backgroundColor = 'blue';
// });

// 3 supp elt
// MaVariable = document.getElementById('suppP');
// MaVariable.addEventListener("click",
// function(){
// monAction = document.getElementById('suppP');
// monAction.remove();
// });

// 4 ajout de li
// MaVariable = document.getElementById('ajoutDeLi');
// MaVariable.addEventListener("click",
// function(){
//     var node = document.createElement("LI");               
//     var textnode = document.createTextNode("liste 3");         
//     node.appendChild(textnode);                             
//     document.getElementById("ajoutDeLi").appendChild(node);
// });

// 5.1 avec mouseover/mouseout
// MaVariable = document.getElementById('ajoutPa');
// MaVariable.addEventListener("mouseover", mouseOver);
// function mouseOver(){
// monAction = document.getElementById('ajoutPa');
// monAction.innerHTML = "Paragraph changed!";
// };

// MaVariable.addEventListener("mouseout", mouseOut);
// function mouseOut(){
//     monAction = document.getElementById('ajoutPa');
//     monAction.innerHTML = "je vais ajouter une ligne en passant la souris dessus";
//     };

// 5.2 avec mouseover/mouseout (mettre en commentaire pour ke le 5.1 fonctionne)
// MaVariableA = document.getElementById('changement-couleur');
// MaVariableA.addEventListener("mouseover", mouseOver);
// function mouseOver(){
// monActionA = document.getElementById('changement-couleur');
// monActionA.style.backgroundColor = 'blue';
// };

// MaVariableA.addEventListener("mouseout", mouseOut);
// function mouseOut(){
//     monActionA = document.getElementById('changement-couleur');
//     monActionA.style.backgroundColor = 'green';
// };

// 5.3 avec mouseover/mouseout (mettre en commentaire pour ke le 5.1 fonctionne)
MaVariableB = document.getElementById('suppPa');
MaVariableB.addEventListener("mouseover", mouseOver);
function mouseOver(){
monActionB = document.getElementById('suppPa');
monActionB.remove();
};

MaVariableB.addEventListener("mouseout", mouseOut);
function mouseOut(){
    monActionB = document.getElementById('suppPa');
};
