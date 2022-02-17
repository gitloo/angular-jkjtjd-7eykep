import { Component, OnInit } from '@angular/core';
//35 come utilizzare il servizio cart per visualizzare i prodotti nel carrello: importiamo CartService.
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  //36 iniettiamo CartService in modo che CartComponent possa usarlo aggiungendolo al costruttore() e definiamo la proprietà degli articoli per memorizzare i prodotti nel carrello.
  items = this.cartService.getItems();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    //Stackblitz genera ngOnInit di default quando vengono creati nuovi componenti
  }
}
