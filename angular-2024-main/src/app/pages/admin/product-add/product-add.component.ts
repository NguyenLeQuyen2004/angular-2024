import { ProductService } from './../../../product.service';
import { Product } from './../../../interfaces/Product';
import {
  FormsModule,
  ReactiveFormsModule,
  Form,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss',
})
export class ProductAddComponent implements OnInit {
  product: Product = {} as Product;
  productForm: FormGroup = {} as FormGroup;
  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      title: [''],
      price: [0],
      description: [''],
    });
  }
  ngOnInit(): void {}
  handleSubmit() {
    // this.productService.createProduct(this.product).subscribe((product) => {
    //   console.log('Success!', product);
    //   this.router.navigate(['/admin']);
    // });
    console.log(this.productForm.value);
  }
}
