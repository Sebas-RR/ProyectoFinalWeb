import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VistaProveedoresComponent } from './vistas/vistaproveedor/vista-proveedores/vista-proveedores.component';
import { VistaArticulosComponent } from './vistas/vistaArticulos/vista-articulos/vista-articulos.component';
import { VistaBuzonComponent } from './vistas/vistaBuzon/vista-buzon/vista-buzon.component';
import { VistaTipoArticuloComponent } from './vistas/vistaTipoArticulo/vista-tipo-articulo/vista-tipo-articulo.component';
import { VistaVentasComponent } from './vistas/vistaVentas/vista-ventas/vista-ventas.component';
import { VistaDevolucionesComponent } from './vistas/vistaDevoluciones/vista-devoluciones/vista-devoluciones.component';
import { VistaComprasComponent } from './vistas/vistacompras/vista-compras/vista-compras.component';
import { VistaPersonasComponent } from './vistas/vistaPersonas/vista-personas/vista-personas.component';
import { VistaViaticosComponent } from './vistas/vistaViaticos/vista-viaticos/vista-viaticos.component';
import { VistaCajaComponent } from './vistas/vistaCaja/vista-caja/vista-caja.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaProveedoresComponent,
    VistaArticulosComponent,
    VistaBuzonComponent,
    VistaTipoArticuloComponent,
    VistaVentasComponent,
    VistaDevolucionesComponent,
    VistaComprasComponent,
    VistaPersonasComponent,
    VistaViaticosComponent,
    VistaCajaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
