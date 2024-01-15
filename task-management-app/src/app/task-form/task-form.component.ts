import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    completed: false
  };

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (!this.newTask.title) {
      alert('Title is required');
      return;
    }

    this.newTask.id = new Date().getTime();

    this.taskService.addTask({ ...this.newTask });
    this.resetForm();
  }

  private resetForm(): void {
    this.newTask = { id: 0, title: '', description: '', completed: false };
  }
}
