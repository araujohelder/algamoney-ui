import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastyService } from 'ng2-toasty';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { PessoaService, PessoaFiltro } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {

  @ViewChild('tabela') grid;
  filtro = new PessoaFiltro();
  totalRegistros = 0;
  pessoas = [];

  constructor(
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private ErrorHandler: ErrorHandlerService
  ) {}

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
      console.log(this.pessoas);
    })
    .catch(error => this.ErrorHandler.handle(error));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(pessoa: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir o registro ?',
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }

  excluir(pessoa: any) {
   this.pessoaService.excluir(pessoa.id)
      .then(() => {
        this.toasty.success('Registro excluido com sucesso!');
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }
      })
      .catch(error => this.ErrorHandler.handle(error));
  }

}
