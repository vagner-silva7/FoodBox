let prato;
let refresco;
let sobremesa;
let mensagem;


/* Ao escolher o prato, selecionando esfiha o bloco fica amarelo, enquanto coxinha fica branco. E vice-versa. */

function escolherEsfiha() {
    document.getElementById("esfiha").style.background ="yellow";
    document.getElementById("coxinha").style.background = "white"; 
    prato = "esfiha";
 }

 function escolherCoxinha() {
     document.getElementById("coxinha").style.background ="yellow";
     document.getElementById("esfiha").style.background = "white";
     prato = "coxinha";
 }

 /* Ao escolher o refresco, selecionando refrigerante o bloco fica amarelo, enquanto suco fica branco. E vice-versa. */

 function escolherRefrigerante() {
     document.getElementById("refrigerante").style.background ="yellow";
     document.getElementById("suco").style.background = "white";
     refresco = "refrigerante";
 }

 function escolherSuco() {
     document.getElementById("suco").style.background ="yellow";
     document.getElementById("refrigerante").style.background = "white";
     refresco = "suco";
 }

 /* Ao escolher o sobremesa, selecionando gelatina o bloco fica amarelo, enquanto chocolate fica branco. E vice-versa. */

 function escolherGelatina() {
     document.getElementById("gelatina").style.background ="yellow";
     document.getElementById("chocolate").style.background = "white";
     sobremesa = "gelatina";
 }

 function escolherChocolate() {
     document.getElementById("chocolate").style.background ="yellow";
     document.getElementById("gelatina").style.background = "white";
     sobremesa = "chocolate";
 }

 /* finalizando pedido */

 function finalizarPedido() {
    mensagem = "Olá, você solicitou o prato " + prato + " e o refresco " + refresco + " com a sobremesa " + sobremesa + ".";

    /* abrindo no aba do navegador */
    /* link para whatsapp */
    /* colocar numero do celular do restaurante */

    window.open("https://wa.me/+5511991344100?text=" + mensagem);
 }