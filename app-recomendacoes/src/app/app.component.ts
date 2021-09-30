import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recomendacoes = []
  onTextoInserido(texto){
    this.recomendacoes = [...this.recomendacoes, texto]

  }
}
