import { Component } from '@angular/core';            //importando a definição de componente do angular
import { Registro } from './Registro';                //importando nossa classe Registro que foi criada para ser uma representação de cada registro preenchido pelo usuário
import { NgForm } from '@angular/forms';              //import necessário para trabalhar com funções de formulario

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',                //link para o arquivo .html onde terá o código para renderizar nosso componente na tela usando html
  styleUrls: ['./app.component.css'],                 //link para o arquivo css que irá estilizar nosso componente
})
export class AppComponent {
  registros: Registro[] = [];                         //variável que conterá todos os registros cadastrados através do formulário
  onSubmit(f: NgForm) {                               //função que será chamada no submit do formulário no arquivo .html e que recebe como parametro o formulário que disparou o submit
    let dados = f.value;                              //capturando dados do formulario em uma variavel chamada dados
    let newRegistro = new Registro();                 //criando uma nova instancia da classe Registro para armazenarmos os valores digitados pelo usuario na lista de registros
    newRegistro.Curso = dados.curso;                  //preenchendo o valor do curso informado pelo usuario no novo registro que está sendo criado
    newRegistro.DataAniversario = dados.aniversario;  //preenchendo o valor da data de aniversário informada pelo usuario no novo registro que está sendo criado
    newRegistro.Nome = dados.nome;                    //preenchendo o valor do nome informado pelo usuario no novo registro que está sendo criado
    newRegistro.RU = dados.ru;                        //preenchendo o valor do RU informado pelo usuario no novo registro que está sendo criado
    this.registros.push(newRegistro);                 //adicionando o novo registro na lista de registros
    f.reset();                                        //limpando os dados do formulario
  }
}
