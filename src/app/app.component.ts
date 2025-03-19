import {Component} from '@angular/core';
import {ItBackToTopComponent} from 'design-angular-kit';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ItBackToTopComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  constructor() {
  }
}
