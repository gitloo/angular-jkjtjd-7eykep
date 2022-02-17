import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// 38 importiamo HttpClientModule dal package @angular/common/http.
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
//9;16;33;41 ng generate component ha automaticamente aggiunto ProductAlertsComponent, ProductDetailsComponent, CartComponent e ShippingComponent ad AppModule, per renderlo disponibile agli altri components dell'applicazione.
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  imports: [
    BrowserModule,
    //38 Per registrare i provider HttpClient di Angular a livello globale, aggiungiamo HttpClientModule al decoratore @NgModule() (nell'array imports) di AppModule -> cart.service.ts
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      /* 16 aggiungiamo una route per i dettagli del prodotto, con un percorso e il componente relativo a ProductDetailsComponent */
      { path: 'products/:productId', component: ProductDetailsComponent },
      /*33 aggiungiamo una route per il componente CartComponent */
      { path: 'cart', component: CartComponent },
      /*42 aggiungiamo una route per shipping e specifichiamo un percorso per shipping e un componente di ShippingComponent.
      Non c'è ancora alcun collegamento al nuovo componente shipping, ma possiamo vedere il suo template inserendo l'URL specificato dal suo percorso: ...webcontainer.io/shipping
      -> 43 shipping.component.ts */
      { path: 'shipping', component: ShippingComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
