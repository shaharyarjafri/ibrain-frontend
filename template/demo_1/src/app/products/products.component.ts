import { Component, OnInit } from "@angular/core";
import { SharedHelpersService } from "../api/api-helper.service";
// import { ApiService } from "../api/api.service";
import { Items } from "../interfaces/interfaces";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  constructor(public apiService: SharedHelpersService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  // getProducts() {
  //   this.api.getProducts();
  // }

  async getProducts() {
    const data = await this.apiService.get(`http://localhost:3000/api/Items`);
  }
}
