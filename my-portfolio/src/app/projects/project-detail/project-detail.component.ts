import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../../interfaces/project.model';
import { projects } from '../../projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent {
  @Input() project: Project = {} as Project;
  @Output() closeDialog = new EventEmitter<void>();

  constructor(private router: Router, private route: ActivatedRoute) {
    const projectId = this.route.snapshot.paramMap.get('id');
    const proj = projects.find((p) => p.id.toString() === projectId);
    if (proj) {
      this.project = proj;
    }
  }

  goBack(): void {
    this.closeDialog.emit();
  }

  nextProject(): void {
    const currentIndex = projects.findIndex((p) => p.id === this.project.id);
    let nextIndex = currentIndex + 1;
    if (nextIndex >= projects.length) {
      nextIndex = 0;
    }
    this.project = projects[nextIndex];
  }

  openLink(link: string): void {
    window.open(link, '_blank');
  }

  getTechIconPath(tech: string): string {
    return `assets/Images/TechIcons/${tech}.png`;
  }
}
