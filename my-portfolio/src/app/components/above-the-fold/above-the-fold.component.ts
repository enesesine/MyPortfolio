import { Component } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss'],
})
export class AboveTheFoldComponent {
  isGerman = false;

  toggleLanguage() {
    this.isGerman = !this.isGerman;

    // Ändert die Schriftfarbe basierend auf der aktiven Sprache
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
}
