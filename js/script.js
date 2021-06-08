
document.getElementById("start").addEventListener("click",function(){
    var random;
    var numbers = []; //array dei numeri generati dal PC
    var vet = []; //array dei numeri inseriti dall'utente
    var x; //variabile per l'input dell'utente

    //genero i 16 numeri random
    for(var i =0; i < 16 ; i++){
        random = rand();
        if(!numbers.includes(random)){
            numbers.push(random);
        }
        else{
            i--;
        }
    }
   
    for(var i=0 ; i < 5; i++){
        //input di un max di 84 numeri senza ripetizioni 
        x = parseInt(prompt("inserisci un numero : "));
        if(!vet.includes(x)){ //se il numero inserito non è già stato inserito
            vet.push(x);
        } 
        else{ //il numero è già stato inserito
            i--;
            alert("NOH !!!! Il numero inserito è già presente");
        }
  
    }
    // console.log(numbers);
    // console.log(random);
});












//--------------functions -------------

//genera un numero random x con 1<= x <= 100
function rand(){
    return Math.floor(Math.random() * 100 + 1);
}