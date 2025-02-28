import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule],
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
      console.log('Form data:', this.formData);
      alert('Thank you for contacting me!');
      // Hier kannst du weitere Aktionen durchführen, z. B. die Daten an einen Service schicken.
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
