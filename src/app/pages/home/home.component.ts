import {AfterViewInit, Component} from '@angular/core';
import {SeoService} from '../../services/seo.service';
import {NgOptimizedImage} from '@angular/common';
import {ItCardComponent, ItIconComponent} from 'design-angular-kit';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ItCardComponent,
    RouterLink,
    ItIconComponent
  ]
})
export class HomeComponent implements AfterViewInit {

  constructor(private seoService: SeoService) {
  }

  public ngAfterViewInit(): void {
    this.seoService.updateSeoSettings();
  }

}
