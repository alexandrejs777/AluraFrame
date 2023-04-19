class Negociacao {

    // Construtor
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    // Método
    obtemVolume() {
        return this.quantidade * this.valor;
    }
}