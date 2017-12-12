import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

import { LancamentoFiltro } from '../lancamentos/lancamento.service';

import 'rxjs/add/operator/toPromise';

export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
  paginavel = true;
}

@Injectable()
export class PessoaService {

  url = 'http://localhost:8080/pessoas';

  constructor(private http: Http) { }

  ListarTodos(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get(this.url, {headers: headers})
      .toPromise()
      .then(response => {
        return response.json();
      });
  }

  pesquisar(filtro: PessoaFiltro) {
    const params = new URLSearchParams();
    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }

    if (filtro.paginavel) {
      params.set('page', filtro.pagina.toString());
      params.set('size', filtro.itensPorPagina.toString());
    }

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get(this.url, {headers: headers, search: params})
      .toPromise()
      .then(response => {
        return response.json();
      });
  }

  excluir(codigo: number): Promise<void> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.delete(`${this.url}/${codigo}`, {headers})
      .toPromise()
      .then(() => null);
  }

}
