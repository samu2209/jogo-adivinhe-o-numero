
class Jogo {

    constructor(){
        // elementos
        this.telaInicial = document.getElementById('tela-inicial');
        this.telaJogo = document.getElementById('tela-jogo');
        this.telaScore = document.getElementById('tela-score');
        this.numeroDaRodada = document.getElementById("numero-rodada"); 
        this.displayDicas = document.getElementById("dicas") ;
        this.numeroDigitado  = document.getElementById("entrada_de_numero");
        // estado do jogo
        this.rodada = 1 ;
        this.historicoNumerosDigitados = [] ;
    }
    
    iniciarJogo(){

        this.telaInicial.style.display = "none" ; 
        this.telaScore.style.display = "none" ; 
        this.telaJogo.style.display = "block" ; 
    
        this.numeroDaRodada.innerHTML = this.rodada ;
    
    }
    tentativa(){
        this.historicoNumerosDigitados.push(this.numeroDigitado.value)
        alert(this.historicoNumerosDigitados)
    }



}
const jogo  = new Jogo();

 
const BtnInicioJogo = document.querySelectorAll(".btn-inicio-jogo");
const BtTentativa = document.getElementById("btn-tentativa")

BtTentativa.addEventListener("click", jogo.tentativa.bind(jogo))
BtnInicioJogo.forEach((item) => {
    item.addEventListener( "click" , jogo.iniciarJogo.bind(jogo))
})

