import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';

import { PessoaGridComponent } from './pessoa-grid/pessoa-grid.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PessoaCadastroComponent,
    PessoaPesquisaComponent,
    PessoaGridComponent
  ],
  exports: [
    PessoaCadastroComponent,
    PessoaPesquisaComponent
  ]
})
export class PessoaModule { }
