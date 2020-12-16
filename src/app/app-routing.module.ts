import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TermosComponent } from './termos/termos.component';
import { PoliticaComponent } from './politica/politica.component';
import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'termos', component: TermosComponent },
  { path: 'politica', component: PoliticaComponent },
  { path: 'faq', component: FaqComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
