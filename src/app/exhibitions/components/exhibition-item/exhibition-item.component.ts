import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Exhibition} from '../../model/exhibition.entity';
import {MatCardModule} from '@angular/material/card';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-exhibition-item',
  imports: [MatCardModule, TranslatePipe],
  templateUrl: './exhibition-item.component.html',
  styleUrl: './exhibition-item.component.css'
})
export class ExhibitionItemComponent {
  @Input() exhibition!: Exhibition;
  @Output() exhibitionSelected = new EventEmitter<Exhibition>();

  onClick(){
    this.exhibitionSelected.emit(this.exhibition);
  }
}
