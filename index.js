let nome = "Guilem";
let nivel = 10826;
const mensagemFinal = "O Herói de nome " + nome + " está no nível de ";

if(nivel <= 1000){
    console.log(mensagemFinal + "Ferro");

} else if(nivel >= 1001 && nivel <= 2000){
    console.log(mensagemFinal + "Bronze");

}else if(nivel >= 2001 && nivel <= 5000){
    console.log(mensagemFinal + "Prata");

}else if(nivel >= 5001 && nivel <= 7000){
    console.log(mensagemFinal + "Ouro");

}else if(nivel >= 7001 && nivel <= 8000){
    console.log(mensagemFinal + "Platina");

}else if(nivel >= 8001 && nivel <= 9000){
    console.log(mensagemFinal + "Ascendente");

}else if(nivel >= 9001 && nivel <= 10000){
    console.log(mensagemFinal + "Imortal");

}else if(nivel >= 10001){
    console.log(mensagemFinal + "Radiante");
}else{
    console.log("ERRO");
}