import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
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
  backgroundStyle: SafeStyle = '';

constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
        // Set background image based on route
        if (this.currentUrl === '/home' || this.currentUrl === '/') {
          this.backgroundStyle = {
            backgroundImage: "url('assets/whimsy.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: '-1'
          };
        } else if (this.currentUrl === '/about' || this.currentUrl === '/') {
          this.backgroundStyle = {
            backgroundImage: "url('assets/about.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: '-1'
          };
        } else if (this.currentUrl === '/contact') {
          this.backgroundStyle = {
            backgroundImage: "url('assets/contact.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: '-1'
          };
        } else {
          this.backgroundStyle = {};
        }
      }
    });
  }
}
