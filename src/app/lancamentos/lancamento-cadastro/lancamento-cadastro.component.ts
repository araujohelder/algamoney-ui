import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'},
  ];

  categorias = [
    {label: 'Alimentação', value: 1},
    {label: 'Transporte', value: 2},
    {label: 'Financiamento', value: 3},
    {label: 'Lazer', value: 4},
  ];

  pessoas = [
    {label: 'João da Silva', value: 1},
    {label: 'Sebastião Souza', value: 2},
    {label: 'Maria José', value: 3},
    {label: 'Pedro Silva', value: 4},
    {label: 'Junior da Silva Guerra', value: 5},
    {label: 'Jorge Oliveira', value: 6},
  ];

  constructor() { }

  ngOnInit() {
  }

}
