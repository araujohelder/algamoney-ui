import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent {
  pessoas = [
    { nome: 'Fernando da silva Chaves', cidade: 'Uberlândia', estado: 'MG', status: true },
    { nome: 'Maria Regina Santos Medeiros', cidade: 'São Paulo', estado: 'SP', status: true},
    { nome: 'Gustavo Feitosa Machado', cidade: 'Fortaleza', estado: 'CE', status: 'false' },
    { nome: 'Guilhermina Souza Oliveira Machado', cidade: 'Fortaleza', estado: 'CE', status: true },
    { nome: 'Joana Freitas Azevedo Lima', cidade: 'Curitiba', estado: 'PR', status: true },
    { nome: 'Felipe de Souza Marinho', cidade: 'Santos', estado: 'SP', status: false },
    { nome: 'Fátima de Azevedo Lima', cidade: 'Rio de Janeiro', estado: 'RJ', status: true },
    { nome: 'Debora Menezes da Silva', cidade: 'Niterói', estado: 'RJ', status: true },
    { nome: 'Justino Esperança Filho', cidade: 'Belo Horizonte', estado: 'MG', status: false },
    { nome: 'Amanda de Souza Ramos', cidade: 'Aracati', estado: 'CE', status: true }
  ];

  getStatus(status: string): string  {
    if (status) {
      return 'Ativo';
    }
    return 'Inativo';
  }
}
