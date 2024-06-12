import { CadastroService } from 'src/app/core/services/cadastro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  ngOnInit(): void {
  }

  id: number;
  cadastro: any;
  cadastroAlterado: any; // Cópia dos dados para alteração
  mensagemExclusao: string;
  mensagemCorExclusao: string;
  mensagemAlteracao: string;
  mensagemCorAlteracao: string;

  constructor(private cadastroService: CadastroService) {}

  consultar(): void {
    this.cadastroService.getCadastro(this.id).subscribe(
      data => {
        this.cadastro = data;
        this.cadastroAlterado = { ...data }; // Cria uma cópia dos dados
        this.mensagemExclusao = '';
        this.mensagemAlteracao = '';
      },
      error => {
        this.mensagemExclusao = 'Erro ao consultar o cadastro.';
        this.mensagemCorExclusao = 'red';
      }
    );
  }

  excluir(): void {
    this.cadastroService.deleteCadastro(this.id).subscribe(
      response => {
        if (response.status === 'Ok') {
          this.mensagemExclusao = response.mensagem;
          this.mensagemCorExclusao = 'green';
          this.cadastro = null;
          this.cadastroAlterado = null;
        } else {
          this.mensagemExclusao = response.mensagem;
          this.mensagemCorExclusao = 'red';
        }
      },
      error => {
        this.mensagemExclusao = 'Erro ao excluir o cadastro.';
        this.mensagemCorExclusao = 'red';
      }
    );
  }

  alterar(): void {
    this.cadastroService.updateCadastro(this.id, this.cadastroAlterado).subscribe(
      response => {
        if (response.status === 'Ok') {
          this.mensagemAlteracao = response.mensagem;
          this.mensagemCorAlteracao = 'green';
          this.cadastro = { ...this.cadastroAlterado }; // Atualiza os dados originais
        } else {
          this.mensagemAlteracao = response.mensagem;
          this.mensagemCorAlteracao = 'red';
        }
      },
      error => {
        this.mensagemAlteracao = 'Erro ao alterar o cadastro.';
        this.mensagemCorAlteracao = 'red';
      }
    );
  }
}