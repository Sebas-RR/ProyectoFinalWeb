import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaCajaComponent } from './vistas/vistaCaja/vista-caja/vista-caja.component';
import { VistaProveedoresComponent } from './vistas/vistaproveedor/vista-proveedores/vista-proveedores.component';
import { VistaTipoArticuloComponent } from './vistas/vistaTipoArticulo/vista-tipo-articulo/vista-tipo-articulo.component';

const routes: Routes = [
  {
    path: 'lista-tipoArticulo',
    component: VistaTipoArticuloComponent
  },
  {
    path: 'lista-caja',
    component: VistaCajaComponent
  },
  {
    path: 'lista-proveedor',
    component: VistaProveedoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
