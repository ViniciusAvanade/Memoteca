import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
  //@Input é um decorator que informa que esse cara vai receber informações de um componente pai, ou seja, o pensamento vai receber informações do listar-pensamento
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'We dont love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
