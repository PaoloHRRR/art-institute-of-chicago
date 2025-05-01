import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private baseUrl = environment.AICApiBaseUrl;
  private sourcesEndpoint = environment.exhibitionsEndpointPath;

  constructor(private http: HttpClient) {}

  getSources(): Observable<Source[]> {
    return this.http.get<SourcesResponse>(`${this.baseUrl}${this.sourcesEndpoint}`, {
      params: { apiKey: this.apiKey }
    }).pipe(
      map(response => SourceAssembler.withLogoApiService(this.logoApiService).toEntitiesFromResponse(response))
    );
  }
}
