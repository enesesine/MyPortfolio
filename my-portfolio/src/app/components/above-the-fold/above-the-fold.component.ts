import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss'],
  imports: [TranslateModule],
})
export class AboveTheFoldComponent {
  isGerman = false;
  splittedFullstack!: string;
  splittedDeveloper!: string;
  mobileMenuOpen = false;

  constructor(private translate: TranslateService) {
    this.splittedFullstack = this.wrapInLetterSpans('Fullstack');
    this.splittedDeveloper = this.wrapInLetterSpans('Developer');
  }

  toggleLanguage(): void {
    const newLang = this.translate.currentLang === 'en' ? 'de' : 'en';
    this.translate.use(newLang);
    this.isGerman = newLang === 'de';
    console.log('Language switched to:', newLang);
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  private wrapInLetterSpans(word: string): string {
    return word
      .split('')
      .map(
        (char) =>
          `<span class="letter-wrapper"><span class="letter">${char}</span></span>`
      )
      .join('');
  }
}
