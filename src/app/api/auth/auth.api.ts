import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginRequest, LoginResponse} from "./auth.types";
import {Observable} from "rxjs";
import {API_URL} from "../api-url";

@Injectable({providedIn: "root"})
export class AuthApi {
  private http = inject(HttpClient);
  private baseApiUrl = API_URL;

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseApiUrl}auth/login`, request);
  }
}
