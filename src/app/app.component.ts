import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { AboutAuthorComponent } from "./about-author/about-author.component";
import { InTheWorksComponent } from "./in-the-works/in-the-works.component";
import { FooterComponent } from "./footer/footer.component";
import { SketchesComponent } from "./sketches/sketches.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Olli-Project';
  currentUrl: any;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        console.log('Current URL:', this.currentUrl);
      }
    });
  }
}
