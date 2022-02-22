import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo?: Todo;
  @Output() remove = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  get completed(): boolean {
    return this.todo?.completato || false;
  }
  completeTodo() {
    if (!!this.todo) {
      this.todo.completato = true;
    }
  }
  deleteTodo() {
    this.remove.emit(this.todo?.id);
  }
}
