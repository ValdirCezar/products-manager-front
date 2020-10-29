
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CrudComponent } from "./views/product/crud/crud.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./components/template/header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./views/home/home.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";

import { NgModule, LOCALE_ID } from "@angular/core";
import { NavComponent } from "./components/template/nav/nav.component";

import { ProductCreateComponent } from "./components/component/product/product-create/product-create.component";
import { ProductReadComponent } from "./components/component/product/product-read/product-read.component";
import { ProductRead2Component } from "./components/component/product/product-update/product-read2/product-read2.component";


import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { ProductUpdateComponent } from './components/component/product/product-update/product-update.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-br",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
