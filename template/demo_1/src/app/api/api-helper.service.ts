import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { LoaderService } from './loader.service';
// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SharedHelpersService {
  readonly userKey = 'E2A49A91-C159-4133-9D04-C6D73744474B';

  readonly userNameKey = '8C1A03E5-B5C4-41D3-AD17-913C072C24D5';

  constructor(
    private http: HttpClient,
    @Inject('environment') private environment,
    // private loaderService: LoaderService,
    // private authService: AuthService
  ) {}

  get urlPrefix(): string {
    return this.environment.apiUrl;
  }

  async get(url: string, showLoader = true): Promise<any> {
    // if (showLoader) this.loaderService.show();

    const response = (await this.http
      .get(this.urlPrefix + url)
      .toPromise()) as any;
    // if (showLoader) this.loaderService.hide();
    if (!response.isError) return response;
    throw new Error(response.message);
  }

  async post(url: string, body: any): Promise<any> {
    // this.loaderService.show();
    const response = (await this.http
      .post(this.urlPrefix + url, body)
      .toPromise()) as any;
    // this.loaderService.hide();
    if (!response.isError) return response;

    return response;
  }

  async delete(url: string): Promise<any> {
    // this.loaderService.show();
    const response = (await this.http
      .delete(this.urlPrefix + url)
      .toPromise()) as any;
    // this.loaderService.hide();
    if (!response.isError) return response;
    throw new Error(response.message);
  }
}
