import {AfterViewInit, Component, ViewChild} from '@angular/core';
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
export class RomeConferenceComponent implements AfterViewInit {
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

  public downloadPoster(): void {
    window.open('assets/conferences/uniroma3-conference/locandina_convegno.pdf', '_blank');
  }

  public openTouristInformationLink(): void {
    window.open('https://www.turismoroma.it', '_blank');
  }

  public downloadUsefulInformation(): void {
    window.open('assets/conferences/uniroma3-conference/informazioni_utili.pdf', '_blank');
  }

  public openTeamsLink(): void {
    window.open('https://teams.microsoft.com/l/meetup-join/19%3ameeting_YjQ1MDM3MjctZDZmMS00ZjI0LTllZTAtZTViYzhhYWZhNWY5%40thread.v2/0?context=%7b%22Tid%22%3a%22ffb4df68-f464-458c-a546-00fb3af66f6a%22%2c%22Oid%22%3a%227511281c-a056-4a91-bac6-f5089fe4aaad%22%7d', '_blank');
  }
}
