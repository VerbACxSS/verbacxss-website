import {AfterViewInit, Component} from '@angular/core';
import {SeoService} from '../../services/seo.service';
import {PageTitleComponent} from '../../components/page-title/page-title.component';

@Component({
  selector: 'app-ats',
  styleUrl: './ats.component.scss',
  templateUrl: './ats.component.html',
  standalone: true,
  imports: [
    PageTitleComponent
  ]
})
export class AtsComponent implements AfterViewInit {

  constructor(private seoService: SeoService) {
  }

  public ngAfterViewInit(): void {
    this.seoService.updateSeoSettings();
  }

}
