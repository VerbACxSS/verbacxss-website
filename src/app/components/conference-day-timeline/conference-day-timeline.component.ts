import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IconName, ItCardComponent, ItIconComponent} from 'design-angular-kit';
import {ConferenceSession} from '../../models/ConferenceSession';
import {ConferenceSpeech} from '../../models/ConferenceSpeech';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-conference-day-timeline',
  styleUrl: './conference-day-timeline.component.scss',
  templateUrl: './conference-day-timeline.component.html',
  standalone: true,
  imports: [
    ItCardComponent,
    ItIconComponent,
    NgClass
  ],
})
export class ConferenceDayTimelineComponent {
  @Input() sessions!: Array<ConferenceSession>;
  @Output() onInfoClick = new EventEmitter<ConferenceSpeech>();

  getIcon(icon: string): IconName {
    return icon as IconName;
  }
}
