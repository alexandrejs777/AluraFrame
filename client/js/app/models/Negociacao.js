class Negociacao {

    // Construtor
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // Método
    getVolume() {
        return this._quantidade * this._valor;
    }

    // Encapsulamento
    getData() {
        return this._data;
    }

    getQuantidade() {
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }
}