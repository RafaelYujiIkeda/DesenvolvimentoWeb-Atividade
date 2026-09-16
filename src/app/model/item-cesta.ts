export class ItemCesta {

  codigo: number;
  nome: string;
  valor: number;
  quantidade: number;

  constructor(
    codigo: number,
    nome: string,
    valor: number,
    quantidade: number
  ) {
    this.codigo = codigo;
    this.nome = nome;
    this.valor = valor;
    this.quantidade = quantidade;
  }

}