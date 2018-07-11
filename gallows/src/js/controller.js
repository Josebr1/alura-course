function criaController(jogo) {

    const $entrada = $('#entrada');
    const $lacunas = $('.lacunas');

    // muda o texto do placeHolder do campo de entrada    
    const mudaPlaceHolder = (texto) => $entrada.val('').attr('placeholder', texto);

    // passa para jogo.setPalavraSecreta() o valor digitado pelo jogador e chama o a função `exibeLacunas()` e `mudaPlaceHolder()` definidas no controller. 
    function guardaPalavraSecreta() {
        try {
            jogo.setSecretWord($entrada.val().trim());

            $entrada.val('');
            mudaPlaceHolder('chute');
            exibeLacunas();
        } catch (err) {
            alert(err.message);
        }

    }

    function reinicia() {
        $lacunas.empty();
        mudaPlaceHolder('Palavra secreta');
        jogo.restart();
    }

    function exibeLacunas() {
        $lacunas.empty();

        jogo.getGaps().forEach((gap) =>{
            $('<li>')
                .addClass('lacuna')
                .text(gap)
                .appendTo($lacunas);
        });
    }

    function leChute() {
        try {
            jogo.processesLetters($entrada.val().trim().substr(0, 1));
            $entrada.val('');
            exibeLacunas();

            console.log(jogo.WonOrLost());
            if (jogo.WonOrLost()) {
                setTimeout(() => {
                    if (jogo.wins()) {
                        alert('Ganhou!');
                    } else if (jogo.lost()) {
                        alert('Uma pena, tente novamente');
                    }
                    reinicia();
                }, 200);
            }
        } catch (err) {
            alert(err.message);
        }
    }

    // faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
    function inicia() {

        $entrada.keypress((event) => {
            if (event.which == 13) {
                switch (jogo.getStage()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        leChute();
                        break;
                }
            }
        });
    }

    return {
        inicia
    };
}