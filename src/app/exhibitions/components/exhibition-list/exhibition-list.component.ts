import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Exhibition} from '../../model/exhibition.entity';
import {MatNavList} from '@angular/material/list';
import {ExhibitionItemComponent} from '../exhibition-item/exhibition-item.component';

@Component({
  selector: 'app-exhibition-list',
  imports: [
    MatNavList,
    ExhibitionItemComponent
  ],
  templateUrl: './exhibition-list.component.html',
  styleUrl: './exhibition-list.component.css'
})
export class ExhibitionListComponent {
  @Input() exhibitions!: Array<Exhibition>;
  @Output() exhibitionSelected = new EventEmitter<Exhibition>();

  onExhibitionSelected(exhibition: Exhibition) {
    this.exhibitionSelected.emit(exhibition);
  }
}
