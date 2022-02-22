import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() aggiungi = new EventEmitter<Todo>();

  newTodo: Todo = {
    id: this.generateRandomId(),
    titolo: '',
    descrizione: '',
    scadenza: '',
    urgente: false,
    completato: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  submitTask() {
    this.aggiungi.emit(this.newTodo);

    this.newTodo = {
      id: this.generateRandomId(),
      titolo: '',
      descrizione: '',
      scadenza: '',
      urgente: false,
      completato: false
    };
  }

  private generateRandomId() {
    return Math.round(Math.random() * 1000000) + 1;
  }

}
