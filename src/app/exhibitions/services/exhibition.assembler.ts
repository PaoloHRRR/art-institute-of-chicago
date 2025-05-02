import {ExhibitionApiService} from './exhibition-api.service';
import {ExhibitionResponse, ExhibitionResource} from './exhibitions.response';
import {Exhibition} from '../model/exhibition.entity';

export class ExhibitionAssembler {
  static toEntityFromResource(resource:ExhibitionResource): Exhibition {
    return {
      title: resource.title,
      short_description:resource.short_description,
      web_url: resource.web_url || '',
      image_url: resource.image_url || 'https://firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png',
      status: resource.status,
      aic_start_at: resource.aic_start_at,
      aic_end_at: resource.aic_end_at,
    };
  }
  static toEntitiesFromResponse(response: ExhibitionResponse): Exhibition[] {
    return response.data.map(exhibition =>
    this.toEntityFromResource(exhibition));
  }
}
