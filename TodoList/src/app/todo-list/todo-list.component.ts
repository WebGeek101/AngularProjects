import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todos: any[] = [];
  filteredTodos: any[] = [];
  showAll: boolean = false;

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
      this.todoService.getData()
      .subscribe(result => {
        this.todos = result;
        this.filterTodos();
      });
  }

  filterTodos() {
    this.filteredTodos = this.showAll ? this.todos : this.todos.filter(todo => todo.completed);
  }

  toggleFilter() {
    this.showAll = !this.showAll;
    this.filterTodos();
  }
}
