import { Component } from '@angular/core';
import { Registro } from './Registro';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projeto';
  registros: Registro[] = [];
  onSubmit(f: NgForm) {
    let dados = f.value;
    let newRegistro = new Registro();
    newRegistro.Curso = dados.curso;
    newRegistro.DataAniversario = dados.aniversario;
    newRegistro.Nome = dados.nome;
    newRegistro.RU = dados.ru;
    this.registros.push(newRegistro);
    f.reset();
  }
}
