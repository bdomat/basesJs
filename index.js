// alert("Salut Js");

// console.log("Coucou");

// Kamel Case
let maSuperVariable = "Hello";

// ** Les variables **
// var = Vieu JS
var unTexte = "voici un texte";

console.log(unTexte);

// const = constante
const prenom = "Justine";

// Let = la variable peut évoluer
let unChiffre = 24;
unChiffre = 22;
console.log(unChiffre);

let Chaine = "Je suis une chaine de caractères";

let nouvelleChaine = "Chaine précédente : " + Chaine + ". Au top !";

console.log(nouvelleChaine);

// Concatenation avec guillemets altgr+7
let autreConcatenation = `Chaines précédente ${Chaine}. Au top !`;

//** Types de données **
let string = "Je suis une chaine de caractère";
let number = 14;
let boolean = false

// Tableau : il y a des crochets[]
let  array = ["je", "suis", 56, true]

// L'objet: Il y a ds accolades {}
let object = {
    prenom : "prenom",
    age : 33,
    ville : "Bordeaux",
};

let arbe;

arbre = "sapin";

// **Les opérateurs**
console.log(4+5);
console.log(4-5);
console.log(4/5);
console.log(4*5);
// puissance
console.log(4**5);

// ** Les opérateurs d'affectation
let total = 0;

total = total +1;
// =total++
total = total -1;
// =total--

total+=5;
// on ajoute 5
total-=4;
// on soustrait 4
total*=2;
//on multiplie par 2

console.log(total);

// **Structures de controle**
let x = 2;
let y = 2;
if (x > y) {
    alert("x plus gros que y")
} else if (y > x) {
    alert("y plus grand que x")
} else {
    alert("ils sont égaux")
}
// On test si une variable est "true" 
if (x){
    console.log("x existe !");
}
// === teste l'égalité en type et en contenu
if (x === y){
    console.log("il sont égaux");
}

// == teste l'égalité de valeur sans prendre en compte le type
if (x==y){
    console.log('ils sont égaux');
} else {
    console.log("ils ne sont pas égaux!");
}

// || ou
// && et --> soit l'un, soit l'autre
if (x < y || y == 6) {
    console.log("UI");
}
//&& --> Toutes les conditions dioivent etre remplies
if (x < y && y == 6) {
    console.log("UI");
}

// **Les fonctions**

// fonction classique (à l'ancienne)
function faireQuelqueChose () {
    console.log("Je fais un truc");
    console.log(5+6);
    alert('calcul terminé')
}

// Il faut imperativement appeler la fonction pour la jouer
// appel de la fonction:
faireQuelqueChose();

// fonction fléchée
const Addition = (a, b)=>{
    console.log(a+b);
}

Addition(7, 9);
Addition("je", "suis");

// ** La portée des variables **
function add2{
    let num = 4;
    console.log(num + 2) ; // retourne 6 car la variable est définie dans la fonction
};

// console.log(num) retourne undefined car la variable n'est définie que dans la fonction