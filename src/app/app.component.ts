import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BackgroundComponent } from './components/background/background.component';
import { fadeAnimation } from './animations/route-animations';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    BackgroundComponent
  ],
  selector: 'app-root',
  template: `
    <app-background></app-background>
    
    <div class="relative z-10">
      <header class="fixed top-0 w-full bg-base-100/80 backdrop-blur-sm z-50">
        <nav class="container mx-auto px-4 py-4">
          <div class="flex justify-between items-center">
            <a routerLink="/" class="text-xl font-bold">TB</a>
            
            <!-- Menu Desktop -->
            <div class="hidden md:flex gap-6">
              <a routerLink="/home" class="hover:text-primary transition-colors">Accueil</a>
              <a routerLink="/about" class="hover:text-primary transition-colors">À propos</a>
              <a routerLink="/skills" class="hover:text-primary transition-colors">Compétences</a>
              <a routerLink="/projects" class="hover:text-primary transition-colors">Projets</a>
              <a routerLink="/contact" class="hover:text-primary transition-colors">Contact</a>
            </div>

            <!-- Burger Menu Button -->
            <button 
              class="md:hidden text-2xl"
              (click)="toggleMenu()"
              aria-label="Toggle menu">
              <i [class]="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
            </button>
          </div>

          <!-- Menu Mobile -->
          <div 
            class="md:hidden"
            [class.hidden]="!isMenuOpen"
            [@slideInOut]="isMenuOpen">
            <div class="flex flex-col gap-4 pt-4">
              <a routerLink="/home" 
                 (click)="closeMenu()"
                 class="hover:text-primary transition-colors py-2">Accueil</a>
              <a routerLink="/about" 
                 (click)="closeMenu()"
                 class="hover:text-primary transition-colors py-2">À propos</a>
              <a routerLink="/skills" 
                 (click)="closeMenu()"
                 class="hover:text-primary transition-colors py-2">Compétences</a>
              <a routerLink="/projects" 
                 (click)="closeMenu()"
                 class="hover:text-primary transition-colors py-2">Projets</a>
              <a routerLink="/contact" 
                 (click)="closeMenu()"
                 class="hover:text-primary transition-colors py-2">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main class="pt-16 relative min-h-screen">
        <router-outlet></router-outlet>
      </main>

      <footer class="bg-base-200/80 backdrop-blur-sm py-8">
        <div class="container mx-auto px-4 text-center">
          <p>© 2024 Tommy Bordas - Développeur Web Freelance</p>
        </div>
      </footer>
    </div>
  `,
  animations: [
    fadeAnimation,
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('200ms ease-out', 
          style({ opacity: 1, height: '*' })
        )
      ]),
      transition(':leave', [
        animate('200ms ease-in', 
          style({ opacity: 0, height: 0 })
        )
      ])
    ])
  ]
})
export class AppComponent {
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
