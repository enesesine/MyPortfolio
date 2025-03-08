import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { projects } from '../projects.data';
import { Project } from '../interfaces/project.model';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ProjectDetailComponent,
    TranslateModule,
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public projects: Project[] = projects;
  public selectedProject: Project | null = null;
  public showDetail: boolean = false;

  constructor(private router: Router) {}

  viewProject(projectId: number): void {
    this.selectedProject =
      this.projects.find((p) => p.id === projectId) || null;
    this.showDetail = true;
  }

  closeDetail(): void {
    this.showDetail = false;
    this.selectedProject = null;
  }
}
