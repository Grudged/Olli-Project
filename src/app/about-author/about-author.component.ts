import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-author',
  imports: [CommonModule],
  templateUrl: './about-author.component.html',
  styleUrl: './about-author.component.css'
})
export class AboutAuthorComponent {
  public isLoggedIn: boolean = localStorage.getItem('isLoggedIn') === 'true';

}
