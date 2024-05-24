import { CommonModule } from '@angular/common';
import { ProductService } from './../../../product.service';
import { Product } from './../../../interfaces/Product';
import {
  FormsModule,
  ReactiveFormsModule,
  Form,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
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
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      description: [''],
    });
  }
  ngOnInit(): void {}
  handleSubmit() {
    if (this.productForm.valid) {
      this.productService
        .createProduct(this.productForm.value)
        .subscribe((product) => {
          console.log('Success!', product);
          alert('Add successfull');
          this.router.navigate(['/admin']);
        });
    }
    // console.log(this.productForm.value);
  }
}
