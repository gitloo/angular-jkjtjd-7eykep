/*26 In Angular, un servizio è un'istanza di una classe che possiamo rendere disponibile a qualsiasi parte della nostra applicazione utilizzando il sistema di dependency injection di Angular.*/
import { Injectable } from '@angular/core';
/*39 -> app.modules.ts 
iniettiamo il servizio HttpClient nel nostro servizio in modo che la nostra applicazione possa recuperare dati e interagire con API e risorse esterne.*/
import { HttpClient } from '@angular/common/http';
/*27 Importiamo l'interfaccia Product da products.ts e, nella classe CartService...*/
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  /*27...nella classe CartService, definiamo una proprietà items per memorizzare l'array dei prodotti correnti nel carrello. */
  items: Product[] = [];
  constructor(
    /*39 iniettiamo HttpClient nel costruttore di CartService */
    private http: HttpClient
  ) {}
  /*28 Definiamo i metodi per aggiungere articoli al carrello, restituire gli articoli del carrello e cancellare gli articoli del carrello. */
  //addToCart() aggiunge un prodotto a un array di elementi (tramite push)
  addToCart(product: Product) {
    this.items.push(product);
  }
  //getItems() raccoglie gli articoli che gli utenti aggiungono al carrello e restituisce ogni articolo con la quantità associata.
  getItems() {
    return this.items;
  }
  //clearCart() restituisce un array vuoto di elementi, che svuota il carrello.
  clearCart() {
    this.items = [];
    return this.items;
  }
  /*40 Per ottenere i dati di spedizione, da shipping.json, possiamo utilizzare il metodo HttpClient get(). Definiamo un nuovo metodo getShippingPrices() che utilizza il metodo HttpClient get(). 
  --> 41 ng generate component shipping --> shipping.component.ts */
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
