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


somme.remplirLesNombres(4, 7);
somme.sommeNumber();
somme.afficherSomme();