import { Component } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss'],
})
export class AboveTheFoldComponent {
  isGerman = false;

  // Gesplittete "Fullstack" und "Developer":
  splittedFullstack!: string;
  splittedDeveloper!: string;

  constructor() {
    // Vollautomatisch jeden Buchstaben in <span class="letter">...</span> hüllen:
    this.splittedFullstack = this.wrapInLetterSpans('Fullstack');
    this.splittedDeveloper = this.wrapInLetterSpans('Developer');
  }

  toggleLanguage() {
    this.isGerman = !this.isGerman;
    const langEN = document.getElementById('lang-en');
    const langDE = document.getElementById('lang-de');
    if (this.isGerman) {
      langDE!.style.color = '#e67d60';
      langEN!.style.color = 'white';
    } else {
      langDE!.style.color = 'white';
      langEN!.style.color = '#e67d60';
    }
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

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
