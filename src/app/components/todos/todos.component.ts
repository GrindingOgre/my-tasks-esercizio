import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() lista?: Todo[];
  @Output() remove = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  removeTodo($event: number) {
    this.remove.emit($event);
  }
}
