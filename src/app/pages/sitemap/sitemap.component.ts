import {AfterViewInit, Component} from '@angular/core';
import {SeoService} from '../../services/seo.service';
import {PageTitleComponent} from '../../components/page-title/page-title.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sitemap',
  styleUrl: './sitemap.component.scss',
  templateUrl: './sitemap.component.html',
  standalone: true,
  imports: [
    PageTitleComponent,
    RouterLink
  ]
})
export class SitemapComponent implements AfterViewInit {

  public SITEMAP: Array<any> = [
    {name: 'Home', path: '/home'},
    {name: 'Progetto', path: '/project'},
    {name: 'Convegno', path: '/conference'},
    {name: 'Formazione', path: '/training'},
    {name: 'Pubblicazioni', path: '/publications'},
    {name: 'Software', path: '/ats'},
    {name: 'Contatti', path: '/contact'},
    {name: 'Mappa del sito', path: '/sitemap'},
    {name: 'Privacy Policy', path: '/privacy-policy'},
  ]

  constructor(private seoService: SeoService) {
  }

  public ngAfterViewInit(): void {
    this.seoService.updateSeoSettings();
  }

}
