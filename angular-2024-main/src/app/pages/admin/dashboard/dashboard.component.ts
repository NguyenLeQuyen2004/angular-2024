import { ProductService } from './../../../product.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/Product';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  products: Product[] | undefined;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
  deleteProduct(id: any) {
    if (confirm('Are you sure?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        console.log('Product deleted successfully');
        this.products = this.products?.filter((product) => product.id !== id);
      });
    }
  }
}
