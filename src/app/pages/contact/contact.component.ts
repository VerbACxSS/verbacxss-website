import {AfterViewInit, Component} from '@angular/core';
import {SeoService} from '../../services/seo.service';
import {PageTitleComponent} from '../../components/page-title/page-title.component';
import {Person} from '../../models/Person';
import {PeopleComponent} from '../../components/people/people.component';

@Component({
  selector: 'app-contact',
  styleUrl: './contact.component.scss',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [
    PageTitleComponent,
    PeopleComponent
  ]
})
export class ContactComponent implements AfterViewInit {

  public readonly UNI_ROMA_3_CONTACTS: Array<Person> = [
    {
      name: 'prof.ssa Anna Pompei',
      subtitle: 'Direttrice scientifica PRIN',
      email: 'anna.pompei@uniroma3.it',
      imageSrc: 'assets/people/uniroma3/anna-pompei.jpg'
    },
    {
      name: 'prof.ssa Valentina Benigni',
      email: 'valentina.benigni@uniroma3.it',
      imageSrc: 'assets/people/uniroma3/valentina-benigni.jpg'
    },
    {
      name: 'prof.ssa Maria Silvia Rati',
      subtitle: '(Università per Stranieri "Dante Alighieri")',
      email: 'm.rati@unidarc.it',
      imageSrc: 'assets/people/uniroma3/maria-silvia-rati.jpg'
    },
    {
      name: 'prof.ssa Monica Palmerini',
      email: 'monica.palmerini@uniroma3.it',
      imageSrc: 'assets/people/uniroma3/monica-palmerini.jpg'
    },
  ]

  public readonly UNIMOL_CONTACTS: Array<Person> = [
    {
      name: 'prof.ssa Giuliana Fiorentino',
      subtitle: 'Direttrice unità locale',
      email: 'giuliana.fiorentino@unimol.it',
      imageSrc: 'assets/people/unimol/giuliana-fiorentino.jpg'
    },
    {
      name: 'dott. Vittorio Ganfi',
      email: 'vittorio.ganfi@unimol.it',
      imageSrc: 'assets/people/unimol/vittorio-ganfi.png'
    },
    {
      name: 'dott. Marco Russodivito',
      email: 'marco.russodivito@unimol.it',
      imageSrc: 'assets/people/unimol/marco-russodivito.jpg'
    }
  ]

  public readonly UNISA_CONTACTS: Array<Person> = [
    {
      name: 'prof.ssa Daniela Vellutino',
      subtitle: 'Direttrice unità locale',
      email: 'dvellutino@unisa.it',
      imageSrc: 'assets/people/unisa/daniela-vellutino.jpg'
    },
    {
      name: 'prof. Mario Monteleone',
      email: 'mmonteleone@unisa.it',
      imageSrc: 'assets/people/unisa/mario-monteleone.jpg'
    },
    {
      name: 'prof.ssa Maria de Martino',
      email: 'mdemartino@unisa.it',
      imageSrc: 'assets/people/unisa/maria-de-martino.jpg'
    },
    {
      name: 'dott. Nicola Cirillo',
      email: 'nicirillo@unisa.it',
      imageSrc: 'assets/people/unisa/nicola-cirillo.jpg'
    }
  ]

  constructor(private seoService: SeoService) {
  }

  public ngAfterViewInit(): void {
    this.seoService.updateSeoSettings();
  }
}
