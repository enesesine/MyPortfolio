import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './components/above-the-fold/above-the-fold.component'; // ⬅ Import hinzufügen

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [AboveTheFoldComponent], // ⬅ Hier die Komponente importieren
})
export class AppComponent {
  title = 'my-portfolio';
}
