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
  backgroundStyle: any = {};

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        // Set background image based on route
        if (this.currentUrl === '/about') {
          this.backgroundStyle = {
            'background-image': 'url(assets/about.jpg)',
            'background-size': 'cover',
            'background-position': 'center',
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'width': '100vw',
            'height': '100vh',
            'z-index': '-1'
          };
        } else {
          this.backgroundStyle = {
            'background-image': 'url(assets/whimsy.jpg)',
            'background-size': 'cover',
            'background-position': 'center',
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'width': '100vw',
            'height': '100vh',
            'z-index': '-1'
          };
        }
      }
    });
  }
}
