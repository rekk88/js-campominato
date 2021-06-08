
document.getElementById("start").addEventListener("click",function(){
    var random;
    var numbers = []; //array dei numeri generati dal PC
    var vet = []; //array dei numeri inseriti dall'utente
    var x; //variabile per l'input dell'utente
    var min; // estremo inferiore per l'intervallo dei numeri random
    var max; // estremo superiore per l'intervallo dei numeri random
    
    min = 0;
    max = 100;
    //genero i 16 numeri random
    for(var i =0; i < 16 ; i++){
        random = rand(min , max);
        if(!numbers.includes(random)){
            numbers.push(random);
        }
        else{
            i--;
        }
    }
    console.log(numbers);
    for(var i=0 ; i < 84; i++){ // i < 5 perchè con 84 non finisco più
        //input di un max di 84 numeri senza ripetizioni 
        x = parseInt(prompt("inserisci un numero : "));
        if(!vet.includes(x)){ //se il numero inserito non è già stato inserito
            vet.push(x);
        } 
        else{ //il numero è già stato inserito
            i--;
            alert("NOH !!!! Il numero inserito è già presente");
        }
        if(numbers.includes(x)){ //il numero è uno dei 16 numeri proibiti e quindi la partita termina qui 
            i=100; //uscita forzata dal ciclo
        }
        //se il numero nn è uno dei 16 allora il gioco continua
    }
    var punteggio = vet.length - 1; // punteggio = quantità di numeri inseriti dall'utente
    console.log(vet);
    console.log(punteggio);
    alert("hai fatto " + punteggio + " punti");
    // console.log(numbers);
    // console.log(random);
});












//--------------functions -------------

//genera un numero random x con 1<= x <= 100
function rand(max , min){
    return Math.floor(Math.random() * (max - min ) + min);
}
// * (max - min) + min 