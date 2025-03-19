import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AtsComponent} from './pages/ats/ats.component';
import {ItErrorPageComponent} from 'design-angular-kit';
import {ProjectComponent} from './pages/project/project.component';
import {ConferenceComponent} from './pages/conference/conference.component';
import {TrainingComponent} from './pages/training/training.component';
import {ContactComponent} from './pages/contact/contact.component';
import {SitemapComponent} from './pages/sitemap/sitemap.component';
import {PrivacyPolicyComponent} from './pages/privacy-policy/privacy-policy.component';
import {PublicationsComponent} from "./pages/publications/publications.component";
import {SeverasLabComponent} from './pages/severas-lab/severas-lab.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'conference',
    component: ConferenceComponent,
  },
  {
    path: 'training',
    component: TrainingComponent
  },
  {
    path: 'publications',
    component: PublicationsComponent
  },
  {
    path: 'severas-lab',
    component: SeverasLabComponent
  },
  {
    path: 'ats',
    component: AtsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'sitemap',
    component: SitemapComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {path: 'not-found', component: ItErrorPageComponent, data: {errorCode: 404}},
  {path: '**', redirectTo: 'not-found'}
];
