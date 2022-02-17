//metodi predefiniti
import { Component } from '@angular/core';

import { products } from '../products'; //da product.ts

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products =
    products; /* 4 all'interno di questa classe viene definita la proprietà products che acquisisce i dati inseriti nell'array products presente nel file product.ts */

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
    /*14 Definiamo il comportamento che si verifica quando l'utente fa clic sul pulsante. Il genitore, ProductListComponent, agisce quando il figlio (ProductAlertsComponent) genera l'evento. */
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
