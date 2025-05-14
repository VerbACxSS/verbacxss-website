import {Inject, Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private router: Router,
              private metaService: Meta,
              private titleService: Title,
              @Inject(DOCUMENT) private document: Document) {
  }

  public updateSeoSettings(): void {
    this.updateCanonicalUrl(environment.FRONTEND_URL + this.router.url)

    switch (this.router.url) {
      case '/home':
        this.titleService.setTitle('VerbACxSS – Home');
        this.metaService.updateTag({
          name: 'description',
          content: 'VerbACxSS è un progetto PRIN che studia criteri di semplificazione e accessibilità linguistica con l\'obiettivo di sviluppare un Automatic Text Simplifier per la lingua italiana.'
        });
        break;

      case '/project':
        this.titleService.setTitle('VerbACxSS – Progetto');
        this.metaService.updateTag({
          name: 'description',
          content: 'Il progetto indaga, attraverso approcci di linguistica teorica e applicata, criteri di semplificazione linguistica con l\'obiettivo di costruire un software ATS per la lingua italiana.'
        });
        break;

      case '/conferences/unimol-conference-2024':
        this.titleService.setTitle('VerbACxSS – Convegno Unimol 2024');
        this.metaService.updateTag({
          name: 'description',
          content: 'Il convengo "Amministrazione attiva: semplicità e chiarezza per la comunicazione amministrativa" tratta termi relativi alla semplificazione linguistica delle comunicazioni delle PA.'
        });
        break;

      case '/conferences/uniroma3-conference-2025':
        this.titleService.setTitle('VerbACxSS – Convegno Uniroma3 2025');
        this.metaService.updateTag({
          name: 'description',
          content: 'Nuove proposte e nuove sfide per la semplificazione e l\'accessibilità\n" tratta termi relativi alla semplificazione linguistica delle comunicazioni delle PA.'
        });
        break;

      case '/training':
        this.titleService.setTitle('VerbACxSS – Formazione');
        this.metaService.updateTag({
          name: 'description',
          content: 'Il progetto prevedere l\'organizzazione di eventi di presentazione pubblica del software ATS e di brevi corsi di formazione al personale delle PA.'
        });
        break;

      case '/publications':
        this.titleService.setTitle('VerbACxSS – Pubblicazioni');
        this.metaService.updateTag({
          name: 'description',
          content: 'Il progetto prevede la pubblicazione di articoli scientifici.'
        });
        break;

      case '/severas-lab':
        this.titleService.setTitle('VerbACxSS – Laboratorio SeVerAs');
        this.metaService.updateTag({
          name: 'description',
          content: 'Il laboratorio Severas è un laboratorio di ricerca di sperimentazione psicolinguistica.'
        });
        break;

      case '/ats':
        this.titleService.setTitle('VerbACxSS – Software');
        this.metaService.updateTag({
          name: 'description',
          content: 'Il progetto prevedere la realizzazione dell\'ATS in open source a disposizione delle PA, delle scuole di italiano e dei ricercatori.'
        });
        break;

      case '/contact':
        this.titleService.setTitle('VerbACxSS – Contatti');
        this.metaService.updateTag({
          name: 'description',
          content: 'Contatta i principali rappresentati delle unità di ricerca del progetto PRIN VerbACxSS.'
        });
        break;

      case '/sitemap':
        this.titleService.setTitle('VerbACxSS – Mappa del sito');
        this.metaService.updateTag({name: 'description', content: 'Mappa del sito'});
        break;

      case '/privacy-policy':
        this.titleService.setTitle('VerbACxSS – Privacy Policy');
        this.metaService.updateTag({name: 'description', content: 'Privacy Policy'});
        break;
    }
  }

  private updateCanonicalUrl(url: string) {
    const link: HTMLLinkElement = this.document.querySelector(`link[rel='canonical']`) || this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);

    link.setAttribute('href', url);
  }
}
