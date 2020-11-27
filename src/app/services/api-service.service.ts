import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private urlService: string = environment.apiUrl;
  
  constructor(private http: HttpClient) {
    console.log('service listo');
   }

  getEnemFib(enem: number) {
    return this.http
    .get(this.urlService + 'fibonachi/' + enem)
    .pipe(
      map(resp => {
        return JSON.stringify(resp);
    }));
  }
}
