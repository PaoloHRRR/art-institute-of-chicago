import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {Exhibition} from '../model/exhibition.entity';
import {ExhibitionResponse} from './exhibitions.response';
import {ExhibitionAssembler} from './exhibition.assembler';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionApiService {
  private baseUrl = environment.AICApiBaseUrl;
  private exhibitionEndpoint = environment.exhibitionsEndpointPath;

  constructor(private http: HttpClient) {}

  getExhibitions(): Observable<Exhibition[]> {
    return this.http.get<ExhibitionResponse>(`${this.baseUrl}${this.exhibitionEndpoint}`, {
      params: {}
    }).pipe(
      map(response => ExhibitionAssembler.toEntitiesFromResponse(response))
    );
  }
}
