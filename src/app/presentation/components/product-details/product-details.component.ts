import {Component, inject, OnInit} from '@angular/core';
import {ProductModel} from '../../../core/models/product.model';
import {ProductRepository} from '../../../data/repositories/product.repository';
import {ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';
import {ProductCardComponent} from '../product-card/product-card.component';
import {CartStore} from '../../state/cart.store';
import {MatAnchor} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  imports: [
    ProductCardComponent,
    MatAnchor,
    RouterLinkActive,
    RouterLink,
    MatAnchor,
    RouterLinkActive,
    MatAnchor,
    MatIcon,
    RouterLinkActive
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  route = inject(ActivatedRoute);
  cartStore = inject(CartStore);
  item!: ProductModel;
  id!: number;
  productService = inject(ProductRepository);


  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = this.productService.getProduct(this.id);
    console.log(this.item);

    /* SEO*/
    this.title.setTitle(`${this.item.title} | Comprar Online en Mi Tienda`);

    this.meta.updateTag({ name: 'description', content: this.item.description });
    this.meta.updateTag({ property: 'og:title', content: this.item.title });
    this.meta.updateTag({ property: 'og:description', content: this.item.description });
    this.meta.updateTag({ property: 'og:image', content: this.item.images[0] });
    this.meta.updateTag({ name: 'twitter:title', content: this.item.title });
    this.meta.updateTag({ name: 'twitter:description', content: this.item.description });
    this.meta.updateTag({ name: 'twitter:image', content: this.item.images[0] });
  }
  cartItemAdd(item: ProductModel) {
    /*alert("Se agregó el el producto " + item.title + " al carrito de compras");*/
    this.cartStore.addProduct(item);
  }
}
