import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Exhibition} from '../../model/exhibition.entity';
import {MatCardModule} from '@angular/material/card';
import {TranslatePipe} from '@ngx-translate/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-exhibition-item',
  imports: [MatCardModule, TranslatePipe, DatePipe],
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
