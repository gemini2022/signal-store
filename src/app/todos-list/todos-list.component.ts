import { Component, inject } from '@angular/core';
import { TodosStore } from '../store/todos.store';
import { CommonModule } from '@angular/common';
import { TodosFilter } from '../store/todos.store';
@Component({
  selector: 'todos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  protected store = inject(TodosStore);


  async onAddTodo(title: string) {
    await this.store.addTodo(title);
  }

  async onDeleteTodo(id: string) {
    await this.store.deleteTodo(id);
  }

  async onTodoToggled(id: string, event: Event) {
   const completed = (event.target as HTMLInputElement).checked;
   await this.store.updateTodo(id, completed);
  }

  onFilterTodos(filter: string) {
    this.store.updateFilter(filter as TodosFilter)
  }
}
