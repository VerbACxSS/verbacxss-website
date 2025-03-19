import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItAccordionComponent} from 'design-angular-kit';
import {SeoService} from '../../services/seo.service';
import {PageTitleComponent} from '../../components/page-title/page-title.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-project',
  styleUrl: './project.component.scss',
  templateUrl: './project.component.html',
  standalone: true,
  imports: [
    PageTitleComponent,
    ItAccordionComponent,
    NgOptimizedImage
  ]
})
export class ProjectComponent implements AfterViewInit {

  @ViewChild('uniroma3Accordion') uniroma3Accordion!: ItAccordionComponent;
  @ViewChild('unimolAccordion') unimolAccordion!: ItAccordionComponent;
  @ViewChild('unisaAccordion') unisaAccordion!: ItAccordionComponent;

  constructor(private route: ActivatedRoute,
              private seoService: SeoService) {
  }

  public ngAfterViewInit(): void {
    this.seoService.updateSeoSettings();

    this.route.fragment.subscribe(fragment => {
      let selectedAccordion!: ItAccordionComponent;
      switch (fragment) {
        case 'unit-uniroma3':
          selectedAccordion = this.uniroma3Accordion;
          break;
        case 'unit-unimol':
          selectedAccordion = this.unimolAccordion;
          break;
        case 'unit-unisa':
          selectedAccordion = this.unisaAccordion;
          break;
        default:
          return;
      }

      selectedAccordion.toggle();
      setTimeout(() => {
        (document.getElementById("collapse-" + selectedAccordion.id + "-heading") as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }, 100);
    });
  }

}
