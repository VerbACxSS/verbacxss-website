import {AfterViewInit, Component} from '@angular/core';
import {SeoService} from '../../services/seo.service';
import {PageTitleComponent} from '../../components/page-title/page-title.component';

@Component({
  selector: 'app-training',
  styleUrl: './training.component.scss',
  templateUrl: './training.component.html',
  standalone: true,
  imports: [
    PageTitleComponent
  ]
})
export class TrainingComponent implements AfterViewInit {

  constructor(private seoService: SeoService) {
  }

  public ngAfterViewInit(): void {
    this.seoService.updateSeoSettings();
  }
}
