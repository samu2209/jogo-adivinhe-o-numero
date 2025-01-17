
class Jogo {

    constructor(){
        // elementos
        this.telaInicial = document.getElementById('tela-inicial');
        this.telaJogo = document.getElementById('tela-jogo');
        this.telaScore = document.getElementById('tela-score');
        this.mostrarScore = document.getElementById("score")

        
        this.numeroDaRodada = document.getElementById("numero-rodada"); 
        this.displayDicas = document.getElementById("dicas") ;
        this.historicoAcertos = document.getElementById("historico-acertos");
        
        // estado do jogo
        this.rodada = 1 ;
        this.historicoNumeros = [] ;
        this.numeroAleatorio;  
        this.score = 0 ;  
    }

    gerarNumeroAleatorio(){
        this.numeroAleatorio = Math.floor(Math.random() * 100 ) + 1;
    }   
    
    iniciarJogo(){

        this.telaInicial.style.display = "none" ; 
        this.telaScore.style.display = "none" ; 
        this.telaJogo.style.display = "block" ; 
    
        this.rodada = 1; 
        this.numeroDaRodada.innerHTML = this.rodada ;

        this.gerarNumeroAleatorio();

    }
    tentativa(){
        
        let numeroDigitado  =Number( document.getElementById("entrada_de_numero").value);

        
        
       

        if(this.numeroAleatorio == numeroDigitado){

            this.score++ ; 
            this.historicoNumeros.push(numeroDigitado) ;
            this.displayDicas.innerHTML = "Acertou" 
            
            this.gerarNumeroAleatorio()
            this.fimDaRodada() ;
        }
        else{

            if(this.numeroAleatorio > numeroDigitado){
                this.displayDicas.innerHTML = "Maior" ;
            }else{
                this.displayDicas.innerHTML = "Menor";
            }

            this.fimDaRodada()

        }

    }
    fimDaRodada(){

        this.rodada++ ;
        this.numeroDaRodada.innerHTML = this.rodada;
        this.historicoAcertos.innerHTML = this.historicoNumeros ;
        
        if(this.rodada > 10){
            this.encerrarJogo()
        }     

    }
    encerrarJogo(){
         
        this.telaInicial.style.display = "none" ; 
        this.telaScore.style.display = "block" ; 
        this.telaJogo.style.display = "none" ; 
        this.mostrarScore.innerHTML = this.score ;

        

    }



}
const jogo  = new Jogo();

 
const BtnInicioJogo = document.querySelectorAll(".btn-inicio-jogo");
const BtTentativa = document.getElementById("btn-tentativa")

BtTentativa.addEventListener("click", jogo.tentativa.bind(jogo))
BtnInicioJogo.forEach((item) => {
    item.addEventListener( "click" , jogo.iniciarJogo.bind(jogo))
})

