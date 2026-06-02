import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(private pensamentoService: PensamentoService) { }
  //Toda logica que precisa ser carregada quando o componente for criado, deve ser colocada dentro do ngOnInit,
  // ou seja, quando o componente for criado, ele vai chamar o serviço para listar os pensamentos e armazenar na variável listaPensamentos
  //NgOnInit é um método do ciclo de vida do Angular, ou seja, ele é chamado automaticamente pelo Angular quando o componente é criado, não precisamos chamar ele manualmente

  ngOnInit(): void {
  this.pensamentoService.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }


}

