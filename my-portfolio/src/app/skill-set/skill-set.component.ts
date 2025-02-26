import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  pulled: boolean = false; // Zustand: false => Pull.png, true => PulledImage.png

  togglePull() {
    this.pulled = !this.pulled;
  }
}
