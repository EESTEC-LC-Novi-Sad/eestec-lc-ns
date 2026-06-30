import { Component, Input } from '@angular/core';
import { Project } from 'src/app/model/Project';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project: Project = new Project();
  theme: string = 'dark';

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.getTheme();
    themeService.refreshTheme$.subscribe((theme) => {
      this.theme = theme;
    });
  }
}
