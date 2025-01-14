import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="min-h-screen relative overflow-hidden">
      <div class="container mx-auto px-4 py-20 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="font-display text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Tommy Bordas
          </h1>
          
          <p class="font-sans text-xl md:text-2xl mb-8 text-base-content/80">
            Développeur Web Fullstack Freelance
          </p>
          
          <p class="font-sans text-lg md:text-xl mb-12 text-base-content/70">
            Spécialisé en Angular, Node.js et TypeScript
          </p>
          
          <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a routerLink="/projects" class="btn btn-primary btn-lg">
              <i class="fa-solid fa-code mr-2"></i>
              Voir mes projets
            </a>
            <a routerLink="/contact" class="btn btn-outline btn-lg">
              <i class="fa-solid fa-paper-plane mr-2"></i>
              Me contacter
            </a>
          </div>
          
          <div class="mt-16 flex justify-center gap-8">
            <a href="https://github.com/yourusername" target="_blank" class="btn btn-circle btn-ghost text-2xl hover:text-primary transition-colors">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" class="btn btn-circle btn-ghost text-2xl hover:text-primary transition-colors">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" class="btn btn-circle btn-ghost text-2xl hover:text-primary transition-colors">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="mailto:contact@tommybordas.fr" target="_blank" class="btn btn-circle btn-ghost text-2xl hover:text-primary transition-colors">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .bg-grid-pattern {
      background-image: linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,.1) 1px, transparent 1px);
      background-size: 4rem 4rem;
    }
  `]
})
export class HeroComponent {}
