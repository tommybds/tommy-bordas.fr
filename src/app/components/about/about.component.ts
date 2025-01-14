import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mission } from '../../shared/interfaces/mission.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-4xl bg-base-200/80 backdrop-blur-sm rounded-lg p-8">
        <h2 class="text-3xl font-bold mb-8">À propos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="assets/profile.jpg" alt="Tommy Bordas" class="rounded-lg shadow-lg w-full">
          </div>
          <div class="space-y-4">
            <p class="text-lg">Développeur Web Fullstack avec plus de 8 ans d'expérience, spécialisé dans le développement d'applications web performantes et évolutives.</p>
            <p>Expert en Angular, Node.js et TypeScript, je propose des solutions sur mesure pour répondre aux besoins spécifiques de chaque client.</p>
            
            <div class="mt-6">
              <h3 class="text-xl font-semibold mb-4">Expertise</h3>
              <ul class="space-y-2">
                <li>✓ Architecture et développement d'applications web</li>
                <li>✓ Optimisation des performances</li>
                <li>✓ Migration et modernisation de systèmes</li>
                <li>✓ Intégration de solutions e-commerce</li>
                <li>✓ Formation et accompagnement technique</li>
              </ul>
            </div>

            <div class="mt-6">
              <h3 class="text-xl font-semibold mb-4">Tarifs</h3>
              <p class="text-primary font-semibold">Taux journalier : 550€ - 650€</p>
            </div>
          </div>
        </div>

        <div class="mt-16">
          <h3 class="text-2xl font-bold mb-6">Missions récentes</h3>
          <div class="space-y-8">
            @for (mission of missions; track mission.title) {
              <div class="card bg-base-100 shadow-lg">
                <div class="card-body">
                  <h4 class="card-title">{{mission.title}}</h4>
                  <p class="text-sm text-base-content/70">{{mission.company}} - {{mission.period}}</p>
                  <p class="mt-2">{{mission.description}}</p>
                  <div class="flex flex-wrap gap-2 mt-4">
                    @for (tech of mission.technologies; track tech) {
                      <span class="badge badge-primary">{{tech}}</span>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AboutComponent {
  missions: Mission[] = [
    {
      title: 'Développeur Full Stack',
      company: 'The LINKS',
      period: '2022 - Aujourd\'hui',
      description: 'Architecture technique, développement full-stack, intégration d\'APIs (paiement, CRM, logistique), optimisation des performances, SEO technique.',
      technologies: ['PHP', 'JavaScript', 'Vue.js', 'MySQL', 'Docker', 'CI/CD']
    },
    {
      title: 'Associé, Développeur Full Stack',
      company: 'Sumotori',
      period: '2019 - Aujourd\'hui',
      description: 'Migration Magento, développement WordPress, optimisation SEO, gestion de 80+ sites, intégration de solutions de paiement et logistique.',
      technologies: ['WordPress', 'Magento', 'PHP', 'JavaScript', 'MySQL', 'SEO']
    },
    {
      title: 'Développeur WordPress',
      company: 'itslearning',
      period: '2018 - Aujourd\'hui',
      description: 'Migration de données, développement de thèmes et plugins sur mesure, déploiement et maintenance sur 800+ sites.',
      technologies: ['WordPress', 'PHP', 'Plugin WordPress', 'Migration de données']
    }
  ];

  expertise = [
    'Architecture et développement d\'applications web',
    'SEO technique et audit complet',
    'Optimisation des performances',
    'Migration et intégration de données',
    'E-commerce et marketplaces',
    'Formation et accompagnement technique'
  ];

  tarif = {
    journalier: '500€',
    experience: '8-15 ans',
    localisation: 'Nantes, France'
  };
} 