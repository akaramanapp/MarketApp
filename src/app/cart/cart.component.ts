import { Component, OnInit, Input } from '@angular/core';
import { Product } from "app/Models/Product";

@Component({
    selector: 'cart',
    template: '<div *ngIf="CartList"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> {{CartList.length}}</div>'
})
export class CartComponent implements OnInit {
    constructor() { }
    @Input() CartList: Product [];
    ngOnInit() { }
}