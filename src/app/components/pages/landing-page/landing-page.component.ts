import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from 'src/app/model/blogPost';
import { BlogService } from 'src/app/services/blog.service';
import { Project } from 'src/app/model/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  projects: Project[] = [];

  constructor(private router: Router, private blogService: BlogService, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.blogService.getAllPosts().subscribe((data) => {
      this.blogPosts = this.blogService.convertDataToPosts(data);
    });

    this.projectService.getAllProjects().subscribe((data) => {
      this.projects = this.projectService.convertDataToProjects(data);
    });
  }

  getProjectImage(title: string): string {
    const project = this.projects.find(
      (p) => p.title.toLowerCase() === title.toLowerCase()
    );

    return project?.coverImage || '';
  }

}
