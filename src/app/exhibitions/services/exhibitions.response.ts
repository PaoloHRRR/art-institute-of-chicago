export interface ExhibitionResponse {
  status: String,
  data: ExhibitionResource[]
}

export interface ExhibitionResource {
  title: string;
  short_description: string;
  web_url: string;
  image_url: string;
  status: string;
  aic_start_at: Date;
  aic_end_at: Date;
  gallery_title: string;
}
