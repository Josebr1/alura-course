class NegociacaoService {

    obterNegociacoesDaSemana(callback) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if(xhr.status == 200) {
                    callback(null, JSON.parse(xhr.responseText)
                        .map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)));
                    // this._mensagem.texto = 'Negociações importadas com sucesso!';
                } else {
                    // this._mensagem.texto = 'Não foi possível obter as negociações :(';
                    console.error('Não foi possível obter as negociações :(');
                    callback('Não foi possível obter as negociações :(', null);
                }
            }
        };
        xhr.send();
    }
}