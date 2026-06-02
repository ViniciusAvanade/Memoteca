import { Router } from '@angular/router';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: ' ',
    autoria: ' ',
    modelo: 'modelo1',
  };
  //Injeção de dependecia, aqui e via construtor, eu injeto as informações do serviço de pensamento,
  //ou seja, eu vou usar o serviço de pensamento para criar um novo pensamento, e esse método criar vai receber como parâmetro o pensamento que eu quero criar.
  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  criarPensamento() {
    this.pensamentoService.criar(this.pensamento).subscribe(() => {
      alert('Pensamento criado com sucesso!');
      this.router.navigate(['/listar-pensamento']);
    });
  }

  cancelar() {
    alert('Ação cancelada!');
    this.router.navigate(['/listar-pensamento']);
  }
}
