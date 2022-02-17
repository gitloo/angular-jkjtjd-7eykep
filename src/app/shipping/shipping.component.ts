/*41 Ora che abbiamo configurato la nostra applicazione per recuperare i dati di shipping, possiamo creare un luogo per il rendering di tali dati. 
--> 42 app.module.ts */
import { Component, OnInit } from '@angular/core';
/*--> 42 appmodule.ts
43 Modifichiamo ShippingComponent per recuperare i dati di spedizione tramite HTTP dal file shipping.json.: iniziamo importando CartService */
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  /*44 Definiamo una proprietà shippingCosts che imposta la proprietà shippingCosts utilizzando il metodo getShippingPrices() da CartService. 
  ->45 shipping.component.html */
  shippingCosts = this.cartService.getShippingPrices();
  /*43 iniettiamo il servizio cart nel costruttore */
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}
