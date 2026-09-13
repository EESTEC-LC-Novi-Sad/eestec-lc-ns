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

  getProjectRoute(): string {
    const routes: { [key: string]: string } = {
      'KONTEH': '/konteh',
      'EESTech Challenge': '/eestech-challenge',
      'Soft Skills Academy': '/soft-skills-academy',
      'Code9': '/code9',
      '5 dana u oblacima': '/5-dana-u-oblacima',
      'Ve:Conf': '/ve-conf',
      'Motivacioni vikend': '/motivacioni-vikend',
      'Congress NS': '/congress-ns',
      'Tech Skills Hub': '/tech-skills-hub',
      'Welcome to FTN': '/welcome-to-ftn'
    };

    return routes[this.project.title] || '/projects';
  }
}