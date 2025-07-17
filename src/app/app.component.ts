import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
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
  title = 'A.M. Oakley - Author';
  currentUrl: any;
  backgroundClass = 'bg-home';

  constructor(private router: Router) {
    // Set initial background based on current route
    this.setBackgroundClass(this.router.url);
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
        this.setBackgroundClass(event.urlAfterRedirects);
      }
    });
  }

  private setBackgroundClass(url: string) {
    // Map routes to background classes
    const routeBackgroundMap: { [key: string]: string } = {
      '/home': 'bg-home',
      '/': 'bg-home',
      '/about': 'bg-about',
      '/contact': 'bg-contact',
      '/in-the-works': 'bg-book',
      '/artwork': 'bg-artwork'
    };

    this.backgroundClass = routeBackgroundMap[url] || 'bg-home';
  }
}
