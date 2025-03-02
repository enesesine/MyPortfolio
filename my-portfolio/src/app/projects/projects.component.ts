import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { projects } from '../projects.data';
import { Project } from '../interfaces/project.model';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectDetailComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public projects: Project[] = projects;
  public selectedProject: Project | null = null;
  public showDetail: boolean = false;

  constructor(private router: Router) {}

  viewProject(projectId: number): void {
    // Finde das Projekt anhand der ID und zeige die Detailansicht als Overlay an
    this.selectedProject =
      this.projects.find((p) => p.id === projectId) || null;
    this.showDetail = true;
  }

  closeDetail(): void {
    // Schließt die Detailansicht (Modal/Overlay)
    this.showDetail = false;
    this.selectedProject = null;
  }
}
