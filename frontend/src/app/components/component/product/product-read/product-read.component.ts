import { ProductService } from "src/app/components/product/product.service";
import { Product } from "src/app/components/product/product.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price'];

  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.ProductService.read().subscribe((products) => {
      this.products = products;
      console.log(this.products);
    });
  }
}
