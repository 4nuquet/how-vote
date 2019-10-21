import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsambleaComponent } from './components/asamblea/asamblea.component';
import { ConcejoComponent } from './components/concejo/concejo.component';
import { JalComponent } from './components/jal/jal.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'asamblea', component: AsambleaComponent },
  {
    path: 'concejo',
    component: ConcejoComponent
  },
  {
    path: 'jal',
    component: JalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
