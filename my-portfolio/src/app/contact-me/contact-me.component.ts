import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  // Hier lesen wir explizit das native Element, statt den NgForm-Direktivenwert.
  @ViewChild('contactForm', { read: ElementRef, static: true })
  contactFormRef!: ElementRef<HTMLFormElement>;

  onSubmit(form: NgForm): void {
    console.log('onSubmit called, form valid:', form.valid);
    if (form.valid) {
      console.log('Native submit wird ausgelöst.');
      // Jetzt sollte contactFormRef definiert sein und das native Element referenzieren.
      this.contactFormRef.nativeElement.submit();
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
