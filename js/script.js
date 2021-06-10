
document.getElementById("start").addEventListener("click",function(){
    var random;
    var numbers = []; //array dei numeri generati dal PC
    var vet = []; //array dei numeri inseriti dall'utente
    var x; //variabile per l'input dell'utente
    var difficoltà;
    var min = 1; // estremo inferiore per l'intervallo dei numeri random
    var max; // estremo superiore per l'intervallo dei numeri random
    var vittoria = false;

    do{
        alert("scegli la difficoltà  : 1 , 2 o 3 ");
        difficoltà = parseInt(prompt("difficoltà : "));
        console.log(difficoltà);
    }
    while(difficoltà != 1 && difficoltà != 2 && difficoltà != 3);

    switch(difficoltà){
        case 1 :
            max = 100;
            break;
        case 2 :
            max = 80;
            break;
        case 3 :
            max = 50;
            break;
        default:
            alert("non dovresti essere qui");
    }
    
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
    document.getElementById("out").className = "output display_block";
    for(var i=0 ; i < (max - 16); i++){ // i < 5 perchè con 84 non finisco più
        //input di un max di 84 numeri senza ripetizioni 
        do{
            x = parseInt(prompt("inserisci un numero : "));
        }
        while(!(x >= min && x <= max)); //controllo che il numero inserito sia compreso nell'intervallo 
        console.log("il numero inserito è corretto");
        if(!vet.includes(x)){ //se il numero inserito non è già stato inserito
            vet.push(x);
            if(!numbers.includes(x)){
                document.getElementById("numbers").innerHTML +=  " | "+ x + " | "; //visualizzazione numeri inseriti
            }
        } 
        else{ //il numero è già stato inserito
            i--;
            alert("NOH !!!! Il numero inserito è già presente");
        }
        if(numbers.includes(x)){ //il numero è uno dei 16 numeri proibiti e quindi la partita termina qui 
            i=100; //uscita forzata dal ciclo
        }
        //se il numero nn è uno dei 16 allora il gioco continua
        if(i == 83){ //se l'utente riesce ad inserire tutti gli 83 numeri allora vince
            vittoria = true
        }
    }
   
    var punteggio = vet.length - 1; // punteggio = quantità di numeri corretti inseriti dall'utente
    console.log(vet);
    console.log(punteggio);
    if (vittoria){
        alert("hai vinto !!");
    }
    alert("hai fatto " + punteggio + " punti");
    document.getElementById("punteggio").innerHTML = punteggio + " PUNTI !!!!!!!"
    // console.log(numbers);
    // console.log(random);
});












//--------------functions -------------

//genera un numero random x con min<= x <= max
function rand(max , min){
    return Math.floor(Math.random() * (max - min ) + min);
}
// * (max - min) + min 