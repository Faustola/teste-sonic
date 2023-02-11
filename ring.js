let randomValUm = [751, 775, 800, 825, 850, 875, 900, 925, 950, 975, 1000,1025, 1050, 1075, 1100];
    let randUm = Math.floor(Math.random()*randomValUm.length);
    let randomValueUm = randomValUm[randUm];

    let randomValDois = [751, 775, 800, 825, 850, 875, 900, 925, 950, 975, 1000,1025, 1050, 1075, 1100];
    let randDois = Math.floor(Math.random()*randomValDois.length);
    let randomValueDois = randomValDois[randDois];

    let randomValTres = [751, 775, 800, 825, 850, 875, 900, 925, 950, 975, 1000,1025, 1050, 1075, 1100];
    let randTres = Math.floor(Math.random()*randomValTres.length);
    let randomValueTres = randomValTres[randTres];

    let randomValQuatro = [751, 775, 800, 825, 850, 875, 900, 925, 950, 975, 1000,1025, 1050, 1075, 1100];
    let randQuatro = Math.floor(Math.random()*randomValQuatro.length);
    let randomValueQuatro = randomValQuatro[randQuatro];


    let aumentaRing = false;
    let ringColetadoUm = false;
    let ringColetadoDois = false;
    let ringColetadoTres = false;
    let ringColetadoQuatro = false;


    
    //colisão com rings
function colisaoRing() {
    let sonic = document.querySelector(".sonic");
    let ringUm = document.querySelector(".ring-1");
    let ringDois = document.querySelector(".ring-2");
    let ringTres = document.querySelector(".ring-3");
    let ringQuatro = document.querySelector(".ring-4");

    let esquerdaSonic = parseInt(window.getComputedStyle(sonic).getPropertyValue('left'));
    let direitaSonic = parseInt(window.getComputedStyle(sonic).getPropertyValue('right'));
    let topoSonic = parseInt(window.getComputedStyle(sonic).getPropertyValue('top'));
    let esquerdaRingUm = parseInt(window.getComputedStyle(ringUm).getPropertyValue('left'));
    let esquerdaRingDois = parseInt(window.getComputedStyle(ringDois).getPropertyValue('left'));
    let esquerdaRingTres = parseInt(window.getComputedStyle(ringTres).getPropertyValue('left'));
    let esquerdaRingQuatro = parseInt(window.getComputedStyle(ringQuatro).getPropertyValue('left'));
    let direitaRingUm = parseInt(window.getComputedStyle(ringUm).getPropertyValue('right'));
    let direitaRingDois = parseInt(window.getComputedStyle(ringDois).getPropertyValue('right'));
    let direitaRingTres = parseInt(window.getComputedStyle(ringTres).getPropertyValue('right'));
    let direitaRingQuatro = parseInt(window.getComputedStyle(ringQuatro).getPropertyValue('right'));


    if(esquerdaSonic == esquerdaRingUm && topoSonic >= 138  || direitaSonic == direitaRingUm && topoSonic>= 138) {
        ringUm.style.cssText="width:40px; height:40px; top:155px;";
        ringUm.src="images/brilho-ring.gif";

        aumentaRing = true;

        function coletouRing() {
            ringColetadoUm = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

    }
    if(esquerdaSonic == esquerdaRingDois && topoSonic >= 138 || direitaSonic == direitaRingDois && topoSonic>= 138) {
        ringDois.style.cssText="width:40px; height:40px; top:155px";
        ringDois.src="images/brilho-ring.gif";

        aumentaRing = true;
    
        function coletouRing() {
            ringColetadoDois = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

    }
    if(esquerdaSonic == esquerdaRingTres && topoSonic >= 138 || direitaSonic == direitaRingTres && topoSonic>= 138) {
        ringTres.style.cssText="width:40px; height:40px; top:155px";
        ringTres.src="images/brilho-ring.gif";

        aumentaRing = true;
        
        function coletouRing() {
            ringColetadoTres = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);

    }
    if(esquerdaSonic == esquerdaRingQuatro && topoSonic >= 138 || direitaSonic == direitaRingQuatro && topoSonic>= 138) {
        ringQuatro.style.cssText="width:40px; height:40px; top:155px";
        ringQuatro.src="images/brilho-ring.gif";

        aumentaRing = true;
        
        function coletouRing() {
            ringColetadoQuatro = true;
        }
        setTimeout(coletouRing, 500)

        function cancelaRing() {
            aumentaRing = false;
        }
        setTimeout(cancelaRing, 1);
    }  
}

setInterval(colisaoRing, 10);
