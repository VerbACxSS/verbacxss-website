import {Component} from '@angular/core';
import {ItCardComponent, ItIconComponent} from "design-angular-kit";
import {PageTitleComponent} from "../../components/page-title/page-title.component";
import published from '../../../assets/publications/published.json';
import submitted from '../../../assets/publications/submitted.json';
import corpora from '../../../assets/publications/corpora.json';
import {Publication} from '../../models/Publication';


@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [
    ItCardComponent,
    ItIconComponent,
    PageTitleComponent
  ],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss'
})
export class PublicationsComponent {
  TYPES = ["Contributo pubblicato", "Contributo in stampa", "Corpora"]

  public readonly PUBLISHED: Array<Publication> = published
  public readonly SUBMITTED: Array<Publication> = submitted
  public readonly CORPORA: Array<Publication> = corpora

  public filterByType(type: string) {
    if (type == 'Corpora') {
      return this.CORPORA;
    }
    if (type == 'Contributo pubblicato') {
      return this.PUBLISHED;
    }
    return this.SUBMITTED;
  }

  public sectionClassByType(type: string) {
    if (type == 'Corpora' || type == 'Contributo pubblicato') {
      return 'section'
    }
    return 'section section-muted'
  }
}
