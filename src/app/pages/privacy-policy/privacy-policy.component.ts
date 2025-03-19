import {AfterViewInit, Component} from '@angular/core';
import {SeoService} from '../../services/seo.service';
import {PageTitleComponent} from '../../components/page-title/page-title.component';

@Component({
  selector: 'app-privacy-policy',
  styleUrl: './privacy-policy.component.scss',
  templateUrl: './privacy-policy.component.html',
  standalone: true,
  imports: [
    PageTitleComponent
  ]
})
export class PrivacyPolicyComponent implements AfterViewInit {

  constructor(private seoService: SeoService) {
  }

  public ngAfterViewInit(): void {
    this.seoService.updateSeoSettings();
  }
}
