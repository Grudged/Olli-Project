import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sketches',
  imports: [CommonModule],
  templateUrl: './sketches.component.html',
  styleUrl: './sketches.component.css'
})
export class SketchesComponent {
  public isLoggedIn: boolean = localStorage.getItem('isLoggedIn') === 'true';

}
