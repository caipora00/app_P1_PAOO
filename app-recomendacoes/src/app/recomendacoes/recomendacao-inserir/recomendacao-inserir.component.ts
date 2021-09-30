import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-recomendacao-inserir',
  templateUrl: './recomendacao-inserir.component.html',
  styleUrls: ['./recomendacao-inserir.component.css']
})
export class RecomendacaoInserirComponent{

  @Output() recomendacaoInserida = new EventEmitter();

  texto_recomendacao:string

  onAdicionarRecomendacao(){
    const texto = {
      texto_recomendacao: this.texto_recomendacao
    }
    this.recomendacaoInserida.emit(texto)
  }

}
