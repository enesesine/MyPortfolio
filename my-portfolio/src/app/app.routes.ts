// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: ProjectsComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  // Wildcard (optional):
  { path: '**', redirectTo: 'projects' },
];
