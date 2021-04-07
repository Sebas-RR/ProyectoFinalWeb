import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaArticulosComponent } from './vistas/vistaArticulos/vista-articulos/vista-articulos.component';
import { VistaBuzonComponent } from './vistas/vistaBuzon/vista-buzon/vista-buzon.component';
import { VistaCajaComponent } from './vistas/vistaCaja/vista-caja/vista-caja.component';
import { VistaComprasComponent } from './vistas/vistacompras/vista-compras/vista-compras.component';
import { VistaPersonasComponent } from './vistas/vistaPersonas/vista-personas/vista-personas.component';
import { VistaProveedoresComponent } from './vistas/vistaproveedor/vista-proveedores/vista-proveedores.component';
import { VistaTipoArticuloComponent } from './vistas/vistaTipoArticulo/vista-tipo-articulo/vista-tipo-articulo.component';
import { VistaVentasComponent } from './vistas/vistaVentas/vista-ventas/vista-ventas.component';
import { VistaViaticosComponent } from './vistas/vistaViaticos/vista-viaticos/vista-viaticos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-articulo',
    pathMatch: 'full'
  },
  {
    path: 'lista-articulo',
    component: VistaArticulosComponent
  },
  {
    path: 'lista-buzon',
    component: VistaBuzonComponent
  },
  {
    path: 'lista-caja',
    component: VistaCajaComponent
  },
  {
    path: 'lista-compra',
    component: VistaComprasComponent
  },
  {
    path: 'lista-persona',
    component: VistaPersonasComponent
  },
  {
    path: 'lista-proveedor',
    component: VistaProveedoresComponent
  },
  {
    path: 'lista-tipoArticulo',
    component: VistaTipoArticuloComponent
  },
  {
    path: 'lista-venta',
    component: VistaVentasComponent
  },
  {
    path: 'lista-viatico',
    component: VistaViaticosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
