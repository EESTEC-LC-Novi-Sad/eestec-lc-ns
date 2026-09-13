import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [];

  public activeProjects: Project[] = [];
  public oldProjects: Project[]=[];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe((data) => {
      this.projects = this.projectService.convertDataToProjects(data);

      this.activeProjects = this.projects.filter(
        project=>project.activeProject==true
      );

      this.oldProjects = this.projects.filter(
        project => project.activeProject !== true
      );
    });
  }
}
