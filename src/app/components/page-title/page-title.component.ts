import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-page-title',
  styleUrl: './page-title.component.scss',
  templateUrl: './page-title.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage
  ]
})
export class PageTitleComponent {

  @Input() title: string;
  @Input() subtitle: string;

  constructor() {
    this.title = "";
    this.subtitle = "";
  }

}
