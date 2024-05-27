import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.baseURL);
  }

  getProductById(id: number | string | undefined) {
    return this.http.get<Product>(`${this.baseURL}/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(this.baseURL, product);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`${this.baseURL}/${product.id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
