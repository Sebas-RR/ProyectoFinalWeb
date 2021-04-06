import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaTipoArticuloComponent } from './vistas/vistaTipoArticulo/vista-tipo-articulo/vista-tipo-articulo.component';

const routes: Routes = [
  {
    path: 'lista-tipoArticulo',
    component: VistaTipoArticuloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
