import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  // Objekt, das die Formulardaten hält:
  formData = {
    name: '',
    email: '',
    message: '',
    consent: false,
  };

  onSubmit(form: any): void {
    if (form.valid) {
      // Hier kannst du optional weitere Logik hinzufügen,
      // wenn das Formular gültig ist.
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
