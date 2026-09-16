import { ItemCesta } from './item-cesta';

export class Cesta {

  itens: ItemCesta[] = [];

  adicionar(item: ItemCesta) {
    this.itens.push(item);
  }

  remover(codigo: number) {
    this.itens = this.itens.filter(
      item => item.codigo !== codigo
    );
  }

  calcularTotal(): number {
    return this.itens.reduce(
      (total, item) => total + (item.valor * item.quantidade),
      0
    );
  }

}