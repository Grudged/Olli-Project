import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-in-the-works',
  imports: [CommonModule],
  templateUrl: './in-the-works.component.html',
  styleUrl: './in-the-works.component.css'
})
export class InTheWorksComponent {
  public isLoggedIn: boolean = localStorage.getItem('isLoggedIn') === 'true';

}
