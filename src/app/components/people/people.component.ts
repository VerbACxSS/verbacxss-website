import {Component, Input} from '@angular/core';
import {ItAvatarDirective} from 'design-angular-kit';
import {NgOptimizedImage} from '@angular/common';
import {Person} from '../../models/Person';

@Component({
  selector: 'app-people',
  styleUrl: './people.component.scss',
  templateUrl: './people.component.html',
  standalone: true,
  imports: [
    ItAvatarDirective,
    NgOptimizedImage
  ],
})
export class PeopleComponent {
  @Input() people!: Person[];
  @Input() maxCols!: number;

  public evalPeopleColumnClass(): string {
    return `col-12 col-md-${12 / this.maxCols}`;
  }
}
