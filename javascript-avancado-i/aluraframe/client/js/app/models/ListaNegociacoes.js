class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
        // this._armadilha = armadilha;
        // this._contexto = contexto;
    }

    adiciona(negociacao) {
        // this._negociacoes = [].concat(this._negociacoes, negociacao); 
        this._negociacoes.push(negociacao);
        // Reflect.apply(this._armadilha, this._contexto, [this]);
        // this._armadilha(this);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    get volumeTotal() {
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
    }

    esvazia() {
        this._negociacoes = [];
        // Reflect.apply(this._armadilha, this._contexto, [this]);
        // this._armadilha(this);
    }

    ordena(criterio) {
        this._negociacoes.sort(criterio);
    }

    inverteOrdem() {
        this._negociacoes.reverse();
    }
}