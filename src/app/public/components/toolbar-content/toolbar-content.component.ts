import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar-content',
  imports: [
    MatToolbarModule,
    LanguageSwitcherComponent,
    TranslatePipe
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {
}
