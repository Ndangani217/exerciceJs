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
        if(chaineCaractares.length > 1){
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