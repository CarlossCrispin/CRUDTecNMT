import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetallesComponent } from './pages/item/detalles/detalles.component';
import { EditarComponent } from './pages/item/editar/editar.component';
import { ListaComponent } from './pages/item/lista/lista.component';
import { NuevoComponent } from './pages/item/nuevo/nuevo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'nuevo', component: NuevoComponent},
  {path: 'editar', component: EditarComponent},
  {path: 'detalles', component: DetallesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
