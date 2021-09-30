import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomendacao-listar',
  templateUrl: './recomendacao-listar.component.html',
  styleUrls: ['./recomendacao-listar.component.css']
})
export class RecomendacaoListarComponent implements OnInit {

  @Input() recomendacoes = []

  ngOnInit(): void {
  }

}
