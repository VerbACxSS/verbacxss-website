import {Component, ViewChild} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgOptimizedImage} from '@angular/common';
import {
  ItDropdownComponent,
  ItDropdownItemComponent,
  ItHeaderComponent,
  ItNavBarItemComponent
} from 'design-angular-kit';

@Component({
  selector: 'app-header',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    ItNavBarItemComponent,
    ItHeaderComponent,
    NgOptimizedImage,
    RouterLink,
    ItDropdownComponent,
    ItDropdownItemComponent
  ],
})
export class HeaderComponent {

  @ViewChild('header') header?: ItHeaderComponent;

  public readonly MENU_ITEMS: Array<any> = [
    {name: 'Home', path: '/home'},
    {name: 'Progetto', path: '/project'},
    {name: 'Convegno', path: '/conference'},
    {name: 'Formazione', path: '/training'},
    {name: 'Pubblicazioni', path: '/publications'},
    {
      name: 'Risorse', children: [
        {
          name: 'Corpus ItaIst',
          path: 'https://huggingface.co/datasets/VerbACxSS/ItaIst'
        },
        {
          name: 'Laboratorio SeVerAs',
          path: '/severas-lab'
        },
      ]
    },
    {name: 'Software', path: '/ats'},
    {name: 'Contatti', path: '/contact'},
  ]

  constructor(public router: Router) {
  }

  public closeHeader() {
    this.header?.toggleCollapse();
  }
}
