import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../shared/interfaces/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold text-center mb-12 bg-base-200/80 backdrop-blur-sm p-4 rounded-lg">Mes Projets</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of projects; track project.title) {
            <div class="card bg-base-100/80 backdrop-blur-sm shadow-xl">
              <figure><img [src]="project.imageUrl" [alt]="project.title"></figure>
              <div class="card-body">
                <h3 class="card-title">{{project.title}}</h3>
                <p>{{project.description}}</p>
                <div class="flex flex-wrap gap-2 my-4">
                  @for (tech of project.technologies; track tech) {
                    <span class="badge badge-primary">{{tech}}</span>
                  }
                </div>
                <div class="card-actions justify-end">
                  @if (project.github) {
                    <a [href]="project.github" target="_blank" class="btn btn-ghost">
                      <i class="fab fa-github"></i>
                    </a>
                  }
                  @if (project.link) {
                    <a [href]="project.link" target="_blank" class="btn btn-primary">Voir le projet</a>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .card figure {
      height: 200px;
      overflow: hidden;
    }
    
    .card figure img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Portfolio Personnel',
      description: 'Site web personnel présentant mes compétences et réalisations en tant que développeur fullstack.',
      technologies: ['Angular', 'TypeScript', 'TailwindCSS'],
      imageUrl: 'assets/projects/portfolio.jpg',
      github: 'https://github.com/yourusername/portfolio'
    },
    {
      title: 'Application de Gestion',
      description: 'Application web de gestion des tâches et des projets pour les équipes.',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      imageUrl: 'assets/projects/taskmanager.jpg',
      link: 'https://taskmanager.example.com'
    }
  ];
}
