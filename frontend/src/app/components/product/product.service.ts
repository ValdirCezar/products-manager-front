import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private snackBar: MatSnackBar) {}

  showMessageCreated(msg: string) {
    this.snackBar.open(msg, "Close", {
      verticalPosition: "top",
      horizontalPosition: "right",
      duration: 3000,
    });
  }
}
