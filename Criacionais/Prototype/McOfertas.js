class McOferta{
    constructor(idPedido, numeroMcOferta, nomeLanche, tamanhoBatata, tamanhoRefrigerante){
        this.idPedido = idPedido;
        this.numeroMcOferta = numeroMcOferta;
        this.nomeLanche = nomeLanche;
        this.tamanhoBatata = tamanhoBatata;
        this.tamanhoRefrigerante = tamanhoRefrigerante;
    }

    clone(){
        return new McOferta(this.idPedido, this.numeroMcOferta, this.nomeLanche, this.tamanhoBatata, this.tamanhoRefrigerante);
    }
}

class GerenciaPedido{
    constructor(){
        this.pedidos = {};
    }

    addPedido(idPedido, numeroMcOferta, nomeLanche, tamanhoBatata, tamanhoRefrigerante){
        const McOfertas = new McOferta(idPedido, numeroMcOferta, nomeLanche, tamanhoBatata, tamanhoRefrigerante);
        this.pedidos[numeroMcOferta] = McOfertas;
    }

    getPedidoCloneByMcOferta(numeroMcOferta){
        const pedidoOriginal = this.pedidos[numeroMcOferta];
        if (pedidoOriginal){
            return pedidoOriginal.clone();
        } else {
            return null;
        }
    }

    getPedidoOriginalByMcOferta(numeroMcOferta){
        return this.pedidos[numeroMcOferta] || null;
    }
}

const gerencia = new GerenciaPedido();
gerencia.addPedido(0, 1, "BigMac", "Batata Media", "Refrigerante Medio");
gerencia.addPedido(0, 2, "Quarteirão", "Batata Media", "Refrigerante Medio");
gerencia.addPedido(0, 3, "McChicken", "Batata Media", "Refrigerante Medio");
gerencia.addPedido(0, 4, "Cheddar McMelt", "Batata Media", "Refrigerante Medio");
gerencia.addPedido(0, 5, "Quarteirão Duplo com Queijo", "Batata Media", "Refrigerante Medio");

const pedidoClone1 = gerencia.getPedidoCloneByMcOferta(1);
const pedidoClone2 = gerencia.getPedidoCloneByMcOferta(3);
const pedidoClone3 = gerencia.getPedidoCloneByMcOferta(5);

if (pedidoClone1){
    pedidoClone1.idPedido = 1
    pedidoClone1.tamanhoBatata = "Pequena";
    pedidoClone1.tamanhoRefrigerante = "Grande";
}

if (pedidoClone2){
    pedidoClone2.idPedido = 2
    pedidoClone2.tamanhoBatata = "Grande";
    pedidoClone2.tamanhoRefrigerante = "Pequeno";
}

if (pedidoClone3){
    pedidoClone3.idPedido = 3
    pedidoClone3.tamanhoBatata = "Pequeno";
}

console.log("Mc Ofertas -------------------------");
console.log(gerencia.getPedidoOriginalByMcOferta(1));
console.log(gerencia.getPedidoOriginalByMcOferta(2));
console.log(gerencia.getPedidoOriginalByMcOferta(3));
console.log(gerencia.getPedidoOriginalByMcOferta(4));
console.log(gerencia.getPedidoOriginalByMcOferta(5));

console.log("Pedidos ----------------------------");
console.log(pedidoClone1);
console.log(pedidoClone2);
console.log(pedidoClone3);