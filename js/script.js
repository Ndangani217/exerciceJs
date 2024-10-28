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


conversionTemperature.entrerValeur(0, 'F')
conversionTemperature.calculerTemperature();
conversionTemperature.afficherTemperature();