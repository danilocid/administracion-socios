import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarsocioComponent } from './componentes/agregarsocio/agregarsocio.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {
    //ruta al home
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'agregarsocio',
    component: AgregarsocioComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
