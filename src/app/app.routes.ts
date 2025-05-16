import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { InTheWorksComponent } from './in-the-works/in-the-works.component';
import { SketchesComponent } from './sketches/sketches.component';
// ...import other components

export const routes: Routes = [
  { path: 'home', component: AboutAuthorComponent },
  { path: 'about', component: HomeComponent },
  { path: 'in-the-works', component: InTheWorksComponent },
  { path: 'artwork', component: SketchesComponent }, // Show sketches for artwork
  // ...other routes
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }