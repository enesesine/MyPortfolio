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
  @ViewChild('contactForm', { read: ElementRef, static: true })
  contactFormRef!: ElementRef<HTMLFormElement>;

  showPrivacyPolicy: boolean = false;
  showLegalNotice: boolean = false;

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.contactFormRef.nativeElement.submit();
      form.resetForm(); // Alle Felder leeren
    } else {
      // Felder als "touched" markieren, sodass Error-Messages angezeigt werden
      form.control.markAllAsTouched();
    }
  }

  openPrivacyPolicy(): void {
    this.showPrivacyPolicy = true;
  }

  closePrivacyPolicy(): void {
    this.showPrivacyPolicy = false;
  }

  openLegalNotice(): void {
    this.showLegalNotice = true;
  }

  closeLegalNotice(): void {
    this.showLegalNotice = false;
  }
}
