
document.getElementById("start").addEventListener("click",function(){
    var random;
    var numbers = [];
    for(var i =0; i < 16 ; i++){
        random = rand();
        if(!numbers.includes(random)){
            numbers.push(random);
        }
        else{
            i--;
        }
    }
    console.log(numbers);
    // console.log(random);
});












//--------------functions -------------

//genera un numero random x con 1<= x <= 100
function rand(){
    return Math.floor(Math.random() * 100 + 1);
}