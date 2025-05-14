import {Component, ViewChild} from '@angular/core';
import {PageTitleComponent} from '../../../components/page-title/page-title.component';
import {ItButtonDirective, ItModalComponent} from 'design-angular-kit';
import {
  ConferenceDayTimelineComponent
} from '../../../components/conference-day-timeline/conference-day-timeline.component';
import conferencePlan from '../../../../assets/conferences/uniroma3-conference/conferencePlan.json';
import {ConferencePlan} from '../../../models/ConferencePlan';
import {SeoService} from '../../../services/seo.service';
import {ConferenceSpeech} from '../../../models/ConferenceSpeech';

@Component({
  selector: 'app-rome-conference',
  styleUrl: './rome-conference.component.scss',
  templateUrl: './rome-conference.component.html',
  standalone: true,
  imports: [
    PageTitleComponent,
    ItButtonDirective,
    ConferenceDayTimelineComponent
  ]
})
export class RomeConferenceComponent {
  @ViewChild('abstractModal') abstractModal!: ItModalComponent;

  public readonly conferencePlan: ConferencePlan = conferencePlan;

  public abstractTitle: string;
  public abstractAuthors: string;
  public abstractParagraphs: Array<string>;
  public abstractBibliography: Array<string>;

  constructor(private seoService: SeoService) {
    this.abstractTitle = '';
    this.abstractAuthors = '';
    this.abstractParagraphs = [];
    this.abstractBibliography = [];
  }

  public ngAfterViewInit(): void {
    this.seoService.updateSeoSettings();
  }

  public openAbstractModal(conferenceSpeech: ConferenceSpeech): void {
    this.abstractTitle = conferenceSpeech.title;
    this.abstractAuthors = conferenceSpeech.authors!;
    this.abstractParagraphs = conferenceSpeech.abstractParagraphs!;
    this.abstractBibliography = conferenceSpeech.abstractBibliography!;

    this.abstractModal.toggle();
  }

  public downloadSchedule(): void {
    window.open('assets/conferences/uniroma3-conference/programma_convegno.pdf', '_blank');
  }

}
