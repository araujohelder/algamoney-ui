import { PessoaService, PessoaFiltro } from '../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/api';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {

  filtro = new PessoaFiltro();
  totalRegistros = 0;
  pessoas = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit() {
    this.pesquisar();
  }

  getStatus(status: string): string  {
    if (status) {
      return 'Ativo';
    }
    return 'Inativo';
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoaService.pesquisar(this.filtro)
    .then(resultado => {
      this.pessoas = resultado.content;
      this.totalRegistros = resultado.totalElements;
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }
}
