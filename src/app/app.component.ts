import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
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
  router: any;

  constructor() {
    console.log('AppComponent initialized');
    this.router = {
      navigate: (path: string) => {
        console.log(`Navigating to ${path}`);
      }
    };
    console.log(this.router);
  }
}
