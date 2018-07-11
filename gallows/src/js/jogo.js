function createGame(_sprite) {
    let _secretWord = "";
    let _gaps = [];
    let _stage = 1;

    const nextStage = () => _stage = 2;

    const createGaps = () => _gaps = Array(_secretWord.length).fill('');

    function setSecretWord(word) {
        if (!word.trim()) throw Error('Palavra inválida');
        _secretWord = word;
        createGaps();
        nextStage();
    }

    const getGaps = () => _gaps;

    const getStage = () => _stage;

    function processesLetters(_wordLetters) {
        if (!_wordLetters.trim()) throw Error('Chute inválida');
        const exp = new RegExp(_wordLetters, 'gi');
        let hit;
        while (resultado = exp.exec(_secretWord))
            hit = _gaps[resultado.index] = _wordLetters;

        if (!hit) _sprite.nextFrame();
    }

    const wins = () => _gaps.length
         ? !_gaps.some(gap => {
            return gap == "";
        }) : false;
    
    const lost = () => _sprite.isFinished();

    const WonOrLost = () => wins() || lost();

    function restart() {
        _stage = 1;
        _secretWord = '';
        _gaps = [];
        _sprite.reset();
    }

    return {
        setSecretWord,
        getGaps,
        getStage,
        processesLetters,
        wins,
        lost,
        WonOrLost,
        restart
    };
}