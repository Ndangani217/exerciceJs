/**
 * Écrire un programme JavaScript pour convertir les températures de et vers Celsius, Fahrenheit.[Formule : c/5 = (f-32)/9 [ où c = température en Celsius et f = température en Fahrenheit ]
    Résultat attendu :
    60°C est 140 °F
    45°F est 7.222222222222222°C
 */


const conversionTemperature={
    temperature:0,
    type:'',
    calculer:0,
    entrerValeur:function (temperature, type){
        if(type!='C' || type !='F'){
            this.type = type
        }else{
            console.log('Veuillez entrer la lettre C : (Celsius) et F : (Fahrenheit)');
        }
        if(temperature!=0){
            this.temperature = temperature;
        }else{
            console.log('Veuillez entrer un nombre superieur ou inférieur à zéro')
        }
    },

    calculerTemperature: function(){
        const verifier = this.type;
        switch(verifier){
            case 'C':
                this.calculer = (this.temperature * 1.8) + 32;
            break;
            case 'F':
                this.calculer = (this.temperature -32) / 1.8;
            break;
            default:
                console.log('Veuillez entrer les valeurs correctement')
            break;
        }
    },
    afficherTemperature(){
        console.log(`${this.calculer}°${this.type}`) 
    }
}


//conversionTemperature.entrerValeur(0, 'F')
//conversionTemperature.calculerTemperature();
//conversionTemperature.afficherTemperature();


/**
 * Exercice numéro 2
 * Ecrivez un programme JavaScript pour calculer la somme 
 * des deux entiers donnés. Si les deux valeurs sont identiques, 
 * il renvoie le triple de leur somme.  
 */

const somme = {
    firstNumber:0,
    secondNumber:0,
    calculerSomme:0,

    remplirLesNombres: function(firstNumber, secondNumber){
        if(firstNumber >=0 && secondNumber >= 0){
            this.firstNumber =firstNumber;
            this.secondNumber = secondNumber;
        }else{
            console.log('Veuillez entrer les nombres positifs (supérieur ou égale à zéro)')
        }
    },

    sommeNumber: function(){
        if(this.firstNumber === this.secondNumber){
            this.calculerSomme = (this.firstNumber + this.secondNumber)*3;
        }else{
            this.calculerSomme = this.firstNumber + this.secondNumber;
        }
    },

    afficherSomme: function(){
        console.log(`${this.calculerSomme}`);
    }
}
//somme.remplirLesNombres(3, 3);
//somme.sommeNumber();
//somme.afficherSomme();

/**
 * Exercice numéro 3
 * Ecrivez un programme JavaScript pour vérifier 
 * une paire de nombres et renvoyer vrai si l'un 
 * des nombres est égal à 50 ou si leur 
 * somme est égale à 50.
 */
const paireNombre= {
    firstNumber:0,
    secondNumber:0,
    somme:0,
    remplirLesNombres: function(firstNumber, secondNumber){
        if(firstNumber !=0 && secondNumber != 0){
            this.firstNumber = firstNumber;
            this.secondNumber = secondNumber;
        }else{
            console.log('Veuillez entrer un nombre différent de zéro')
        }
    },

    verifier: function(){
        this.somme = this.firstNumber + this.secondNumber;
        if(this.firstNumber === 50 || this.secondNumber === 50 || this.somme === 50){
            console.log('Vrai')
        }
    }
}

//paireNombre.remplirLesNombres(1, 25);
//paireNombre.verifier();

/**
 * Exercice numéro 4
 * Ecrivez un programme JavaScript pour vérifier 
 * si deux entiers donnés sont positifs ou négatifs.
 */

const entierPositifNegatif = {
    firstNumber : 0,
    secondNumber :0,

    remplirLesNombres: function(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    },

    verifierEntiers: function(){
        if(this.firstNumber > 0 && this.secondNumber > 0){
            console.log("Le deux entiers sont posififs");
        }else if(this.firstNumber < 0 && this.secondNumber < 0){
            console.log("Le deux entiers sont negatifs");
        }else{
            console.log("L'un de nombres est posifif et l'autre negatif");
        }
    }
}

//entierPositifNegatif.remplirLesNombres(1, -1);
//entierPositifNegatif.verifierEntiers();

/**
 * Exercice numéro 5
 * Écrire un programme JavaScript pour vérifier 
 * si un nombre positif 
 * donné est un multiple de 3 ou de 7.
 * 
 */

const mutipleNombre= {
    nombre : 0,
    entrerNombre:function(nombre){
        if(nombre > 0){
            this.nombre = nombre;
        }else{
            console.log('Veuillez entrer un nombre positif');
        }
    },

    verifierNombre(){
        if((this.nombre % 3)===0){
            console.log('Ce nombre est multiple de 3');
        }else if((this.nombre % 7) ==0){
            console.log('Ce nombre est multiple de 7');
        }else{
            console.log('Ce nombre n\'est pas multiple de 3 ou de 7');
        }
    }
}
//mutipleNombre.entrerNombre(15);
//mutipleNombre.verifierNombre();

/**
 * Exercice numéro 6
 * Écrire un programme JavaScript pour vérifier 
 * si une chaîne de caractères commence par « Java » 
 * si ce n'est pas le cas.  
 */

const verifierChaineCommence = {
    chaineCaractares:'',

    remplirChaine:function(chaineCaractares){
        if(chaineCaractares !=''){
            this.chaineCaractares = chaineCaractares;
        }else{
            console.log('Veuillez entrer plus de caractères')
        }
        
    },

    verifierChaine: function(){
        if(this.chaineCaractares !=''){
            const verifierRetour = this.chaineCaractares.startsWith('Java');
            if(verifierRetour){
                console.log('Oui cette chaine commence par Java');
            }else{
                console.log('Non, ce n\'est pas le cas');
            }
        }
        
    }
}

//verifierChaineCommence.remplirChaine('Javascript');
//verifierChaineCommence.verifierChaine();

/**
 * Exercice numéro 7
 * Ecrivez un programme qui vérifie 
 * si un caractère spécifié existe 
 * entre la 2ème et la 4ème position 
 * dans une chaîne de caractères donnée. 
 */

const postionCaractere = {
    chaineCaracteres:'',
    caractere:'',

    remplirValeur:function(chaineCaractares, caractere){
        this.chaineCaracteres = chaineCaractares;
        this.caractere = caractere;
    },

    comparaison: function(){
        const deuxiemePosition = this.chaineCaracteres.charAt(1);
        const quatriemePosition = this.chaineCaracteres.charAt(3);
        if(deuxiemePosition===this.caractere && quatriemePosition=== this.caractere){
            console.log('Vrai, Le caractère existe dans cette chaine à la deuxième et troisième postion');
        }else{
            console.log('Faux, il n\'existe pas')
        }
    }
}

//postionCaractere.remplirValeur('lulu et maman  sont à la maison', 'a');
//postionCaractere.comparaison();

/**
 * Exercice numéro 8
 * Écrivez un programme JavaScript pour produire 
 * une nouvelle chaîne contenant les 3 premiers 
 * caractères en minuscules à partir d'une chaîne 
 * donnée. Si la longueur de la chaîne est inférieure à 3, 
 * tous les caractères sont convertis en majuscules. 
 */

const conversionTroisPremiere = {
    chaine:'',
    nouvelleChaine:'',
    remplirChaine: function(chaine){
        if(chaine.length !=''){
            this.chaine = chaine;
        }else{
            console.log('Veuillez saisir une chaine de caractères')
        }
    },

    convertirChaine: function(){
        const longueur = this.chaine.length;
        if(longueur < 3){
            this.nouvelleChaine = (this.chaine).toUpperCase()
        }else{
            this.nouvelleChaine = this.chaine.slice(0, 3).toLowerCase();
        }
        console.log(this.nouvelleChaine)
    }    
}

//conversionTroisPremiere.remplirChaine("pa")
//conversionTroisPremiere.convertirChaine();

/**
 * Exercice numéro 9
 * Écrire un programme JavaScript pour 
 * inverser une chaîne de caractères donnée.  
 */

const inverserChaineCaracteres = {
    chaine:'',
    nouvelleChaine:'',

    remplirChaine: function(chaine){
        if(chaine !=''){
           this.chaine = chaine;
        }else{
            console.log('Veuillez entrer une chaine de caractère')
        }
    },
    
    inversionChaine: function(){
        if(this.chaine != ''){
            this.nouvelleChaine = this.chaine.split('').reverse().join('');
            console.log(this.nouvelleChaine);
        }
    }
}


//inverserChaineCaracteres.remplirChaine('jour');
//inverserChaineCaracteres.inversionChaine();

/**
 * Exercice numéro 10
 * Écrire un programme JavaScript pour 
 * mettre en majuscule la première lettre 
 * de chaque mot d'une chaîne donnée.
 */
const changerPremiereLettreMajuscule = {
    chaine:'',

    remplirChaine: function(chaine){
        if(chaine!=''){
            this.chaine = chaine;
        }else{
            console.log('Veuillez entrer une chaine avec de caractères')
        }
    },

    changerChaine: function(){
        const chaineTempo = this.chaine;
        return chaineTempo.charAt(0).toUpperCase() + chaineTempo.slice(1);
    }
}

//changerPremiereLettreMajuscule.remplirChaine('eritier');
//console.log(changerPremiereLettreMajuscule.changerChaine());


/** 
 * Exercice numéro 11
 * Écrivez une fonction JavaScript qui vérifie 
 * si une chaîne passée est un palindrome ou non ?
 * Un palindrome est un mot, une phrase ou une 
 * séquence qui se lit de la même manière à 
 * l'envers qu'à l'endroit, par exemple, madam.
 */

function palindrome(chaine){
    const temp = chaine.split('').reverse().join('');
    let valeurRetour ='';
    if(temp === this.chaine){
        valeurRetour = `Oui, ${chaine}  est un palindrome`;
    }else{
        valeurRetour = `Non, ${chaine} n'est pas un palindrome`;
    }

    return valeurRetour;
}
//palindrome.remplirChaine('roccor');
//palindrome.verifierPalindrome();


/**
 * Exercice numéro 12
 * Ecrivez une fonction JavaScript qui génère 
 * toutes les combinaisons d'une chaîne de caractères.
 * Exemple de chaîne : 'dog'
 * Résultat attendu : d,do,dog,o,og,g
 */

function genererCombinaison (chaine){
    const taille = chaine.length;
    const resultat =  [];
    for (let i = 0; i < taille; i++) {
        let tempo = '';
        for (let j = i; j < taille; j++) {
            tempo += chaine.charAt(j)
            resultat.push(tempo)
        }
    }
    return resultat.join(' ');
}


//genererCombinaison.remplirChaine('papa');
//genererCombinaison.generer();


/**
 * Exercice numéro 13
 * Ecrivez une fonction JavaScript qui 
 * accepte une chaîne de caractères comme
 * paramètre et convertit la première lettre 
 * de chaque mot en majuscule.
 * Exemple de chaîne : 'le renard brun rapide'
 * Résultat attendu : 'Le Renard Brun Rapide
 */

function convertitPremierLettreMots(chaine){
    const mots = chaine.split(' ');
    const nouvelleChaine = mots.map((mot) => mot.charAt(0).toUpperCase() + mot.slice(1)).join(' ') ;
    return nouvelleChaine;
}
//console.log(convertitPremierLettreMots("le renard brun rapide"));


/**
 * Exercice numéro 14
 * Écrivez une fonction JavaScript qui accepte
 *  une chaîne de caractères comme paramètre 
 * et qui trouve le mot le plus long dans
 *  la chaîne.
 * Exemple de chaîne : « Tutoriel de développement web ».
 * Résultat attendu : 'Développement'
 * 
 */

function trouverLeMotLong(chaine){
    let tab = chaine.split(' ');
    const motLong =  tab.reduce((a, b) => a.length < b.length ? b : a, "");
    return motLong;
}

//console.log(trouverLeMotLong('Tutoriel de développement web'))

/**
 * Exercice nuémro 15
 * Ecrivez une fonction JavaScript qui accepte 
 * un argument et renvoie le type.Note : Il y a six 
 * valeurs possibles que typeof renvoie : 
 * objet, booléen, fonction, nombre, 
 * chaîne de caractères et indéfini.
 * 
 */

function typeNote(note){
    return typeof note;
}
/*
console.log(typeNote({}));
console.log(typeNote(true));
console.log(typeNote(function(){}));
console.log(typeNote(42));
console.log(typeNote(42.7));
console.log(typeNote('heritier'));
console.log(typeNote(undefined));
*/

/**
 * Ecrire une fonction JavaScript pour vérifier 
 * si une input est un tableau ou non.
 * Données de test : console.log(is_array('w3resource'));
 * console.log(is_array([1, 2, 4, 0])) ; 
 * faux
 * vrai
 */

function is_array(input){
    return Array.isArray(input);
}

//const tab = [1, 3, 4]
//console.log(is_array('papa'))

/**
 * Écrivez une fonction JavaScript pour obtenir 
 * le premier élément d'un tableau. En passant le paramètre 'n', la fonction renverra les 'n' premiers éléments du tableau.
 * Données de test :
 * console.log(first([7, 9, 0, -2])) ;
 * console.log(first([],3)) ;
 * console.log(first([7, 9, 0, -2],3)) ;
 * console.log(first([7, 9, 0, -2],6)) ;
 * console.log(first([7, 9, 0, -2],-3)) ;
 * Résultat attendu :
 * 7
 * []
 * [7, 9, 0]
 * [7, 9, 0, -2]
 * []
 * 
 */

function first(tab, n){
    return tab.slice(0, n);
}

//console.log(first([7, 9, 0, -2])) ;
//console.log(first([7, 9, 0, -2],3)) ;


/**
 * Écrivez un programme JavaScript simple pour réunir tous les éléments
 * du tableau suivant en une chaîne de caractères.
 * Exemple de tableau : myColor = [ “Rouge” ,  “Vert” , “Blan” ,  “Noir “] ;
 * Résultat attendu :
 * « Rouge,Vert,Blanc,Noir »
 * « Rouge, vert, blanc, noir
 * « Rouge+vert+blanc+noir »
 */

const reunirElementsTableau = {
    tableau:[],
    premiereChaine:'',
    deuxiemeChaine:'',
    troisiemeChaine:'',

    remplirleTableau:function(tableau){
        this.tableau = tableau;
    },

    transformerTableauEnChaine: function(){
        this.premiereChaine = this.tableau.join(',');
        this.deuxiemeChaine   = this.tableau.join(', ');
        this.troisiemeChaine = this.tableau.join("+");
    },

    afficherLeResultat: function(){
        console.log(`${this.premiereChaine}\n${this.deuxiemeChaine}\n${this.troisiemeChaine}`)
    }
}
/*
myColor = ["Rouge", "Vert", "Blan", "Noir"];
reunirElementsTableau.remplirleTableau(myColor);
reunirElementsTableau.transformerTableauEnChaine();
reunirElementsTableau.afficherLeResultat();
*/

/**
 * Exercice numéro 21
 * Écrivez un programme JavaScript pour afficher 
 * le statut de lecture (c'est-à-dire afficher
 * le nom du livre, le nom de l'auteur et 
 * le statut de lecture) des livres suivants.
 */

const library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }]


const statutLecture = {
    library:[],

    remplirLibrary : function(library){
        this.library = library;
    },

    afficherLivre : function(){
        this.library.forEach(livre => {
            console.log(`${livre.author} ${livre.title} ${livre.readingStatus}`)
        });
    }
}

statutLecture.remplirLibrary(library);
statutLecture.afficherLivre();