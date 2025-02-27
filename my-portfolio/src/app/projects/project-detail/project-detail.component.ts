import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../../interfaces/project.model';
import { projects } from '../../projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent {
  @Input() project: Project = {} as Project;
  @Output() closeDialog = new EventEmitter<void>();

  constructor(private router: Router, private route: ActivatedRoute) {
    // Optional: Lade anhand der URL den richtigen Projektdatensatz:
    const projectId = this.route.snapshot.paramMap.get('id');
    const proj = projects.find((p) => p.id.toString() === projectId);
    if (proj) {
      this.project = proj;
    }
  }

  goBack(): void {
    this.router.navigate(['/projects']);
  }

  nextProject(): void {
    const currentIndex = projects.findIndex((p) => p.id === this.project.id);
    let nextIndex = currentIndex + 1;
    if (nextIndex >= projects.length) {
      nextIndex = 0; // Start von vorne
    }
    this.project = projects[nextIndex];
  }

  getTechIconPath(tech: string): string {
    // Beispiel: Icons befinden sich in "assets/Images/TechIcons/" (Passe ggf. den Pfad an)
    return `assets/Images/TechIcons/${tech}.png`;
  }
}
