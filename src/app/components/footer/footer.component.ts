import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgClass, NgOptimizedImage, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-footer',
  styleUrl: './footer.component.scss',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    UpperCasePipe,
    NgOptimizedImage
  ]
})
export class FooterComponent {
  public MENU_ITEMS: Array<any> = [
    {name: 'Home', path: '/home'},
    {name: 'Progetto', path: '/project'},
    {name: 'Convegno', path: '/conference'},
    {name: 'Formazione', path: '/training'},
    {name: 'Pubblicazioni', path: '/publications'},
    {name: 'Software', path: '/ats'}
  ]

  constructor(public router: Router) {
  }
}
