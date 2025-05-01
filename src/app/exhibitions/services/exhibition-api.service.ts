import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {Exhibition} from '../model/exhibition.entity';

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  baseUrl = environment.AICApiBaseUrl;

  constructor() {
  }

}
