import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Items } from "../interfaces/interfaces";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}
  async getProducts() {
    // now returns an Observable of Config
    debugger;
    const res = await this.http
      .get<Items>(`http://localhost:3000/api/Items`)
      .toPromise()
      .then((resp) => {
        // Success
        console.log(resp);
      });
    return res;
  }
}
