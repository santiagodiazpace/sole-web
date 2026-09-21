import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  activeSection = 'inicio';

  setActiveSection(section: string): void {
    this.activeSection = section;
  }
}
