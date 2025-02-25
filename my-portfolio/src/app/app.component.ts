import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './components/above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    AboveTheFoldComponent,
    AboutMeComponent,
    SkillSetComponent,
    ProjectsComponent,
  ],
})
export class AppComponent {
  title = 'my-portfolio';
}
