/*let inicioMostraSonic = () => {
    let inicioSonic = document.querySelector(".inicio-sonic");
    let inicioGamb = document.querySelector(".inicio-gamb");
    let telaInicio = document.querySelector(".tela-inicio");
    let telaJogo = document.querySelector(".tela-jogo")

    inicioSonic.src="images/sonic-beleza-inicio.gif";

    let disparaAnimation = () => {
        inicioGamb.classList.add('animation-inicio');
    }
    setTimeout(disparaAnimation, 1400);
    let destroyElementsInicio = () => {
        telaInicio.style.display="none";
        telaJogo.style.display="block"
    }
    setTimeout(destroyElementsInicio, 3400);
}*/


//Movimentação do personagem

let dx;
let dy;
let px;
let py;
let vel;
let obj;
let tmp;
let i = 0;
let io = 0;
let frame = 3;
let viradoDireita = true;
let viradoEsquerda = false;
let ok;
let okay;
let correndo = false;



//Pulo e ataque
window.addEventListener('keydown', function(e) {
    let sonic = document.querySelector(".sonic")

    if (e.key === "w" && i == 0) {
        sonic.src="images/pulo.png";
        sonic.classList.add("sonic-pulo");
        i++;
        io++;

        function paraPulo() {
            sonic.classList.remove('sonic-pulo');
            i--;
            io--;
            if (viradoEsquerda == true && viradoDireita == false && correndo == false) {
                sonic.src="images/sonic-parado-inicio-esquerda.gif";
            };

            if (viradoEsquerda == true && viradoDireita == false && correndo == true) {
                sonic.src="images/sonic-corre-esquerda.gif";
            };

            if (viradoDireita == true && viradoEsquerda == false && correndo == false) {
                sonic.src="images/sonic-parado-inicio-direita.gif";
            };

            if (viradoDireita == true && viradoEsquerda == false && correndo == true) {
                sonic.src="images/sonic-corre-direita.gif";
            };
          }

          setTimeout(paraPulo, 1000);
    }

    if (e.key === "s" && i == 0) {
        sonic.style.top="170px"
        sonic.src="images/pulo.png";
        sonic.classList.add("sonic-ataque");
        i++;
        io++;

        function paraAtaque() {
            sonic.style.top="160px"
            sonic.classList.remove('sonic-ataque');
            i--;
            io--;
            if (viradoEsquerda == true && viradoDireita == false) {
                sonic.src="images/sonic-parado-inicio-esquerda.gif";
            };

            if (viradoEsquerda == true && viradoDireita == false && correndo == true) {
                sonic.src="images/sonic-corre-esquerda.gif";
            };
            
            if (viradoDireita == true && viradoEsquerda == false) {
                sonic.src="images/sonic-parado-inicio-direita.gif";
            };

            if (viradoDireita == true && viradoEsquerda == false && correndo == true) {
                sonic.src="images/sonic-corre-direita.gif";
            };
          }

          setTimeout(paraAtaque, 800);
    }
})


// Movimentação para os lados
function inicia() {
dx = 0;
px = 30;
vel = 4;


    document.addEventListener('keydown', function(e) {
        let sonic = document.querySelector(".sonic");

        if (e.key === "d" && i == 0) {
            viradoDireita = true;
            viradoEsquerda = false;
            correndo = true;

            sonic.src="images/sonic-corre-direita.gif";
            frame++;
            dx = .4;
            if (frame ===4.1 ) {
                sonic.src="images/sonic-corre-direita/sonic-corre-1.png"
            }
            if (frame ===6) {
                sonic.src="images/sonic-corre-direita/sonic-corre-2.png"
            }
            if (frame ===7) {
                sonic.src="images/sonic-corre-direita/sonic-corre-3.png"
            }
            if (frame ===8) {
                sonic.src="images/sonic-corre-direita/sonic-corre-4.png"
            }
            if (frame === 9) {
                frame = 4;
            }

        }

        if (e.key === "a" & i ==0) {
            viradoDireita = false;
            viradoEsquerda = true;
            correndo = true;
            vel = 4;
            sonic.src="images/sonic-corre-esquerda.gif";
            frame++;
            dx = -.4;
           if (frame ===4.1 ) {
                sonic.src="images/sonic-corre-esquerda/sonic-corre-1.png"
            }
            if (frame ===6) {
                sonic.src="images/sonic-corre-esquerda/sonic-corre-2.png"
            }
            if (frame ===7) {
                sonic.src="images/sonic-corre-esquerda/sonic-corre-3.png"
            }
            if (frame ===8) {
                sonic.src="images/sonic-corre-esquerda/sonic-corre-4.png"
            }
            if (frame === 9) {
                frame = 4;
            }

        }        
    });

    document.addEventListener("keyup", function (e) {
        let sonic = document.querySelector(".sonic");

        if (e.key === "d") {
            dx = 0;
            correndo = false;
            
            sonic.src="images/sonic-parado-inicio-direita.gif"
            frame = 3;

            if (io == 1) {
                sonic.src="images/pulo.png";
            }
        };

        if (e.key === "a") {
            dx = 0;
            correndo = false;
            sonic.src="images/sonic-parado-inicio-esquerda.gif"
            frame = 3;

            if (io == 1) {
                sonic.src="images/pulo.png";
            }
        }});

        tmp = setInterval(enterFrame, 10);

}



function enterFrame() {
    let sonic = document.querySelector(".sonic");
    let background = document.querySelector(".div-img")
    let ringUm = document.querySelector(".ring-1");
    let ringDois = document.querySelector(".ring-2");
    let ringTres = document.querySelector(".ring-3");
    let ringQuatro = document.querySelector(".ring-4");

    let direitaSonic = parseInt(window.getComputedStyle(sonic).getPropertyValue('right'));
    let esquerdaSonic = parseInt(window.getComputedStyle(sonic).getPropertyValue('left'));
    let topoSonic = parseInt(window.getComputedStyle(sonic).getPropertyValue('top'));
    let esquerdaBackground = parseInt(window.getComputedStyle(background).getPropertyValue('background-position'));
    let esquerdaRingUm = parseInt(window.getComputedStyle(ringUm).getPropertyValue('left'));
    let esquerdaRingDois = parseInt(window.getComputedStyle(ringDois).getPropertyValue('left'));
    let esquerdaRingTres = parseInt(window.getComputedStyle(ringTres).getPropertyValue('left'));
    let esquerdaRingQuatro = parseInt(window.getComputedStyle(ringQuatro).getPropertyValue('left'));


        ok = px += dx * vel;

        okay = sonic.style.left=ok+"px";

        if (esquerdaSonic <= 0 && viradoEsquerda == true) {
            px = 0;
        }


//Colisão com o fundo
    if (esquerdaSonic >= 320 && esquerdaBackground <= 0) { 
        background.style.backgroundPosition=-0.75*(ok-320)+"px";


        //ring

        if (ringColetadoUm = true) {
            ringUm.style.left= randomValueUm-0.75*(ok-320)+"px";
        }else {
            ringUm.style.left=randomValueUm + "px";
        }

        if (ringColetadoDois = true) {
            ringDois.style.left=randomValueDois -0.75*(ok-320)+"px";
        }else {
            ringDois.style.left=randomValueDois + "px";
        }

        if (ringColetadoTres = true) {
            ringTres.style.left=randomValueTres -0.75*(ok-320)+"px";
        }else {
            ringTres.style.left=randomValueTres + "px";
        }

        if (ringColetadoQuatro = true) {
            ringQuatro.style.left=randomValueQuatro -0.75*(ok-320)+"px";
        }else {
            ringQuatro.style.left=randomValueQuatro+"px";
        }

        //renova rings

        if(esquerdaRingUm <= 685) {
            ringUm.style.display="block";
        }
        if(esquerdaRingUm >=686){
            ringUm.style.display="none";
        }
        if(esquerdaRingUm <=-5){
            ringUm.style.left="750px";
        }
        if(esquerdaRingDois <= 685) {
            ringDois.style.display="block";
        }
        if(esquerdaRingDois >=686){
            ringDois.style.display="none";
        }
        if(esquerdaRingDois <=-5){
            ringDois.style.left="750px";
        }
        if(esquerdaRingTres <= 685) {
            ringTres.style.display="block";
        }
        if(esquerdaRingTres >=686){
            ringTres.style.display="none";
        }
        if(esquerdaRingTres <=-5){
            ringTres.style.left="750px";
        }
        if(esquerdaRingQuatro <= 685) {
            ringQuatro.style.display="block";
        }
        if(esquerdaRingQuatro >=686){
            ringQuatro.style.display="none";
        }
        if(esquerdaRingQuatro <=-5){
            ringQuatro.style.left="750px";
        }



        ok = 0;

        sonic.style.left="320px";
    }

    if (esquerdaSonic == 320 && esquerdaBackground >= 0.1) {
        background.style.backgroundPosition=-1+"px";
    }

}


window.addEventListener("load", inicia());


//contador de rings

let ringPoints = document.getElementById("ring-points")
let qtdRings = 0;
ringPoints.innerHTML=qtdRings;

function aumentarRing() {

    if (aumentaRing == true) {
        qtdRings++;
        
        ringPoints.innerHTML=qtdRings;

    }

}

setInterval(aumentarRing, 10)

