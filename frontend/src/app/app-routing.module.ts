import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductCreateComponent } from "./components/component/product/product-create/product-create.component";
import { ProductUpdateComponent } from "./components/component/product/product-update/product-update.component";
import { HomeComponent } from "./views/home/home.component";
import { CrudComponent } from "./views/product/crud/crud.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: CrudComponent,
  },
  {
    path: "products/create",
    component: ProductCreateComponent,
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
