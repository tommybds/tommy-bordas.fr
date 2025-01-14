import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', data: { animation: 'home' } },
  { path: 'home', loadComponent: () => import('./components/hero/hero.component').then(m => m.HeroComponent), data: { animation: 'home' } },
  { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent), data: { animation: 'about' } },
  { path: 'skills', loadComponent: () => import('./components/skills/skills.component').then(m => m.SkillsComponent), data: { animation: 'skills' } },
  { path: 'projects', loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent), data: { animation: 'projects' } },
  { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent), data: { animation: 'contact' } }
];
