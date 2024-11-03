import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosStore } from './store/todos.store';
import { TodosListComponent } from './todos-list/todos-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected store = inject(TodosStore);



  private ngOnInit(): void {
    this.loadTodos().then(() => {
      console.log('Todos loaded');
    });
  }



  private async loadTodos() {
    await this.store.loadAll();
  } 
}