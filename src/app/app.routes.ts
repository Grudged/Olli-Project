import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { InTheWorksComponent } from './in-the-works/in-the-works.component';
import { SketchesComponent } from './sketches/sketches.component';
import { ContactComponent } from './contact/contact.component';
// ...import other components

export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { backgroundClass: 'bg-home' } },
  { path: 'about', component: AboutAuthorComponent, data: { backgroundClass: 'bg-about' } },
  { path: 'in-the-works', component: InTheWorksComponent, data: { backgroundClass: 'bg-book' } },
  { path: 'artwork', component: SketchesComponent, data: { backgroundClass: 'bg-artwork' } },
  { path: 'contact', component: ContactComponent, data: { backgroundClass: 'bg-contact' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }