import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  array: Todo[] = [];
  tab: string = 'todo';
  constructor() { }

  ngOnInit(): void {
  }


  addTask(event: Todo) {
    this.array.push(event);
  }

  removeTodo(event: number) {
    this.array = this.array.filter(todo => todo.id !== event);
  }

  isTabAttivo(tab: string): string {
    return (this.tab === tab ? 'active' : '');
  }

  setTabAttivo(tab: string) {
    this.tab = tab;
  }

  get completati(): Todo[] {
    return this.array.filter(el => el.completato);
  }

  get daCompletare(): Todo[] {
    return this.array.filter(el => !el.completato);
  }

}
