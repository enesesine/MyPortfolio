import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AboveTheFoldComponent } from './components/above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    AboveTheFoldComponent,
    AboutMeComponent,
    SkillSetComponent,
    ProjectsComponent,
    ContactMeComponent,
    TranslateModule,
  ],
})
export class AppComponent {
  title = 'my-portfolio';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  toggleLanguage(): void {
    const newLang = this.translate.currentLang === 'en' ? 'de' : 'en';
    console.log('Switching to:', newLang);
    this.translate.use(newLang);
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
