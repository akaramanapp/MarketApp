import { Component, OnInit, Input } from '@angular/core';
import { Product } from "app/Models/Product";

@Component({
    selector: 'nav-menu',
    templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
    constructor() { }
    @Input() CartList: Product [];
    ngOnInit() { }
}