/* 18 Il ProductDetailsComponent gestisce la visualizzazione di ogni prodotto. Angular Router mostra i componenti in base all'URL del browser e ai percorsi definiti. */
import { Component, OnInit } from '@angular/core';
/*19 Importiamo ActivatedRoute da @angular/router e l'array products da ../products. */
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
//29 Importiamo il servizio cart
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  //20 definiamo la proprietà product
  product: Product | undefined;
  /* 21 iniettiamo ActivatedRoute nel costruttore aggiungendo come parametro "private route: ActivatedRoute", dove ActivatedRoute è una classe che fornisce l'accesso alle informazioni su un percorso associato a un componente caricato in un outlet. La si utilizza per attraversare l'albero RouterState ed estrarre informazioni dai nodi.
  ActivatedRoute è specifico per ogni componente caricato da Angular Router. ActivatedRoute contiene informazioni sul percorso e sui parametri del percorso. Iniettando ActivatedRoute, stiamo configurando il componente per l'utilizzo di un servizio. */
  //30 iniettiamo il servizio cart aggiungendolo al costruttore
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  /* 31 Definiamo il metodo addToCart() esegue le seguenti operazioni:
    - prende il prodotto corrente come argomento.
    - utilizza il metodo CartService addToCart() per aggiungere il prodotto al carrello.
    - visualizza un messaggio che indica che hai aggiunto un prodotto al carrello. */
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  //22 Nel metodo ngOnInit(), estraiamo productId dai parametri della route e troviamo il product corrispondente nell'array products.
  ngOnInit() {
    //Per prima cosa otteniamo l'id del prodotto dalla route corrente.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    //Troviamo il prodotto che corrisponde all'id fornito nella route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
    //23 I parametri della route corrispondono alle variabili del percorso definite nella route. Per accedere ai parametri della route, utilizziamo route.snapshot, la classe ActivatedRouteSnapshot che contiene informazioni sulla route attiva in quel particolare momento. L'URL che combacia la route fornisce il productId . Angular utilizza productId per visualizzare i dettagli per ogni prodotto univoco.
  }
}
