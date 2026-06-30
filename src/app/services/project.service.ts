import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { Project } from '../model/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  getAllProjects() {
    const promise = this.client.getEntries({
      content_type: 'eestec_projekti',
    });
    return from(promise);
  }

  convertDataToProjects(data: any): Project[] {
    let retVal: Project[] = [];
    for (let item of data.items) {
      let project: Project = new Project();
      project.title = item.fields.title;
      project.description = item.fields.description;
      project.coverImage = item.fields.coverImg;
      project.projectLogo = item.fields.projectLogo;
      project.activeProject = item.fields.activeProject;
      project.id = item.sys.id;

      retVal.push(project);
    }

    return retVal;
  }

  getProjectById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }

  convertDataToProject(item: any): Project {

    let project: Project = new Project();
      project.title = item.fields.title;
      project.description = item.fields.description;
      project.coverImage = item.fields.coverImg;
      project.projectLogo = item.fields.projectLogo;
      project.activeProject = item.fields.activeProject;
      project.id = item.sys.id;

    return project;
  }
}
