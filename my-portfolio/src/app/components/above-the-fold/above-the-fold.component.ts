import { Component, Inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss'],
  imports: [
    CommonModule, // Nur nötig, wenn du z.B. ngIf etc. hier brauchst
    TranslateModule,
  ],
})
export class AboveTheFoldComponent {
  isGerman = false;
  splittedFullstack!: string;
  splittedDeveloper!: string;
  mobileMenuOpen = false;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Prüfen, ob wir im BROWSER laufen (nicht auf dem Server):
    if (isPlatformBrowser(this.platformId)) {
      // Wenn localStorage schon eine Sprache gespeichert hat -> nehmen
      const storedLang = localStorage.getItem('lang');
      if (storedLang) {
        this.translate.use(storedLang);
        this.isGerman = storedLang === 'de';
      } else {
        // Falls nichts im Storage steht -> Standard z.B. Englisch
        this.translate.use('en');
        this.isGerman = false;
      }
    } else {
      // Wir laufen vermutlich auf dem Server (SSR) -> localStorage gibt's nicht
      // => Standard auf Englisch o.Ä.
      this.translate.use('en');
      this.isGerman = false;
    }

    this.splittedFullstack = this.wrapInLetterSpans('Fullstack');
    this.splittedDeveloper = this.wrapInLetterSpans('Developer');
  }

  toggleLanguage(): void {
    // Neue Sprache bestimmen
    const newLang = this.translate.currentLang === 'en' ? 'de' : 'en';
    this.translate.use(newLang);

    // Wieder erst prüfen, ob wir im Browser sind
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', newLang);
    }

    this.isGerman = newLang === 'de';
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
