import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './app.grocery.html',
  styleUrls: ['../assets/bootstrap/css/bootstrap.min.css']
})
export class GroceryComponent {
  task = {
    name: '',
    id: 0
  };
  tasks = [];

  onClick() {
    if (this.task.id == 0) {
      this.tasks.push({name: this.task.name, id: new Date().getTime() });
    }
    this.task = {
      name: '',
      id: 0
    }
  }

  onStrike(item) {
    for(let i=0; i < this.tasks.length; i++) {
      if(item.id == this.tasks[i].id) {
        if(this.tasks[i].strike) {
          this.tasks[i].strike = false;
        } else {
          this.tasks[i].strike = true;
        }
        break;
      }
    }
  }

  onEdit(item) {
    this.task.name = item;
    console.log(this.task);
  }

  onDelete(item) {
    for (let i=0; i < this.tasks.length; i++) {
      if (item.id == this.tasks[i].id) {
        this.tasks.splice(i, 1);
        break;
      }
    }
  }
}
