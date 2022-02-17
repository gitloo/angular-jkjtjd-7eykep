/*6 Per far sì che ProductAlertsComponent riceva i dati del prodotto, serve prima settare import {Input} from @angular/core. In questo caso si può unire in coda a import {Component, OnInit} */

/*11 Per far funzionare il pulsante Notify Me, il componente figlio (ProductAlertsComponent) deve notificare e passare i dati al componente padre. ProductAlertsComponent deve emettere un event quando l'utente fa clic su Notify Me e ProductListComponent deve rispondere all'evento.*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

/*5 Il decoratore @Component() indica che la classe seguente è un componente. @Component() fornisce anche metadati sul componente, inclusi il selettore, i template e gli stili. */
@Component({
  selector: 'app-product-alerts',
  /* Il selettore identifica il componente. Per convenzione, 
  i selettori di componenti Angular cominciano con il prefisso -app */
  templateUrl: './product-alerts.component.html',
  /* template rimanda al file html del componente*/
  styleUrls: ['./product-alerts.component.css'],
  /* style rimanda al file css del componente*/
})
export class ProductAlertsComponent implements OnInit {
  /*7 definiamo una proprietà product con un decoratore @Input(). Il decoratore indica che il valore della proprietà proviene dal genitore del componente, cioè ProductListComponent. */
  @Input() product: Product | undefined;
  /*12 definiamo una proprietà notify con un decoratore @Output() e un istanza di EventEmitter(). La configurazione di ProductAlertsComponent con un @Output() consente a ProductAlertsComponent di emettere un event quando il valore della proprietà notify cambia. */
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
