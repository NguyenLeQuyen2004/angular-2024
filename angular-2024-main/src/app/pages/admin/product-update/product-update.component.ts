import { CommonModule } from '@angular/common';
import { Product } from './../../../interfaces/Product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../product.service';
import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  Form,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.scss',
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {} as Product;
  productForm: FormGroup = {} as FormGroup;

  // khởi tạo (constructor)
  //để them các dịch vụ ProductService, Router, và FormBuilder vào component
  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute // Lấy dl cũ
  ) {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe((product) => {
        this.product = product;
        this.productForm.patchValue(this.product);
      });
    }
  }

  handleSubmit() {
    // Kiểm tra tính hợp lệ của form
    if (this.productForm.valid) {
      // valid: Thành công
      // Cập nhật sản phẩm
      const updatedProduct: Product = {
        ...this.product,
        ...this.productForm.value,
      };
      // console.log(this.productForm.value);
      this.productService.updateProduct(updatedProduct).subscribe((data) => {
        // console.log('Update successful', data);
        alert('Update successful');
        this.router.navigate(['/admin']);
      });
    }
  }
}
