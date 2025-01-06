import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greeting',
  imports: [FormsModule],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
  name: string = '';
  greeting: string = '';

  updateGreeting(): void {
    this.greeting = `Hello, ${this.name || 'Guest'}!`;
  }

  ngOnInit() {
    this.updateGreeting();
  }
}

