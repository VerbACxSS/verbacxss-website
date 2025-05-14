import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {SeoService} from '../../../services/seo.service';
import {ItButtonDirective, ItModalComponent} from 'design-angular-kit';
import {PageTitleComponent} from '../../../components/page-title/page-title.component';
import {PeopleComponent} from '../../../components/people/people.component';
import {ConferencePlan} from '../../../models/ConferencePlan';
import conferencePlan from '../../../../assets/conferences/unimol-conference/conferencePlan.json';
import {ConferenceDayTimelineComponent} from '../../../components/conference-day-timeline/conference-day-timeline.component';
import {ConferenceSpeech} from '../../../models/ConferenceSpeech';

@Component({
  selector: 'app-conference',
  styleUrl: './unimol-conference.component.scss',
  templateUrl: './unimol-conference.component.html',
  standalone: true,
  imports: [
    PageTitleComponent,
    ItButtonDirective,
    ItModalComponent,
    PeopleComponent,
    ConferenceDayTimelineComponent
  ]
})
export class UnimolConferenceComponent implements AfterViewInit {
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
    window.open('assets/conferences/unimol-conference/programma_convegno.pdf', '_blank');
  }

  public downloadPoster(): void {
    window.open('assets/conferences/unimol-conference/locandina_convegno.pdf', '_blank');
  }

  public downloadPracticalInfo(): void {
    window.open('assets/conferences/unimol-conference/info_pratiche.pdf', '_blank');
  }

  public openTouristInformationLink(): void {
    window.open('https://www.visitcampobasso.it/', '_blank');
  }

  public downloadAbstractBooklet(): void {
    window.open('assets/conferences/unimol-conference/abstract_booklet.pdf', '_blank');
  }

  public downloadLogisticInformation(): void {
    window.open('assets/conferences/unimol-conference/informazioni_logistiche.pdf', '_blank');
  }
}
