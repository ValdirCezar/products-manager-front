import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "src/app/components/product/product.model";
import { ProductService } from "src/app/components/product/product.service";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    name: "",
    price: null,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }

  deleteProduct(): void {
    try {
      this.productService
        .delete(this.product.id.toString())
        .subscribe((del) => {
          this.productService.showMessageCreated(
            "Operação realizada com sucesso"
          );
          this.router.navigate(["/products"]);
        });
    } catch (error) {
      window.alert("Falha ao deletar produto!\nContate o admin do sistema");
    }
  }
}
