import {Component, inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ExhibitionListComponent} from './exhibitions/components/exhibition-list/exhibition-list.component';
import {Exhibition} from './exhibitions/model/exhibition.entity';
import {ExhibitionApiService} from './exhibitions/services/exhibition-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ExhibitionListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catch-up';
  exhibitions: Array<Exhibition> = [];
  private exhibitionsApi = inject(ExhibitionApiService);
  drawer: any;

  ngOnInit() {
    this.exhibitionsApi.getExhibitions().subscribe(exhibitions => {
      this.exhibitions = exhibitions;
      console.log(this.exhibitions);
    })

  }

  onExhibitionSelected(exhibition: Exhibition) {
    console.log(exhibition.title);
  }

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
