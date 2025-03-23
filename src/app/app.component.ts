import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutAuthorComponent } from "./about-author/about-author.component";
import { InTheWorksComponent } from "./in-the-works/in-the-works.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutAuthorComponent, InTheWorksComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Olli-Project';
}
