import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tech } from '../../shared/interfaces/tech.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16 bg-base-200/80 backdrop-blur-sm p-8 rounded-lg">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Compétences Techniques
          </h2>
          <p class="text-lg text-base-content/70">
            Expertise en développement web moderne et technologies cloud
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (category of categories; track category) {
            <div class="card bg-base-100/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <div class="card-body">
                <h3 class="card-title text-2xl capitalize mb-6">{{category}}</h3>
                <div class="space-y-6">
                  @for (tech of getTechsByCategory(category); track tech.name) {
                    <div class="space-y-2">
                      <div class="flex items-center gap-3">
                        <img [src]="tech.icon" [alt]="tech.name" class="w-6 h-6">
                        <span class="font-medium">{{tech.name}}</span>
                      </div>
                      <div class="w-full bg-base-300 rounded-full h-2">
                        <div 
                          class="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                          [style.width.%]="tech.level * 20">
                        </div>
                      </div>
                    </div>
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
  `]
})
export class SkillsComponent {
  techs = [
    // CMS & E-commerce
    { name: 'WordPress', level: 5, category: 'cms', icon: 'assets/icons/wordpress.svg' },
    { name: 'Magento', level: 4, category: 'cms', icon: 'assets/icons/magento.svg' },
    { name: 'WooCommerce', level: 5, category: 'cms', icon: 'assets/icons/woocommerce.svg' },
    
    // Development
    { name: 'PHP', level: 5, category: 'development', icon: 'assets/icons/php.svg' },
    { name: 'JavaScript', level: 4, category: 'development', icon: 'assets/icons/javascript.svg' },
    { name: 'Vue.js', level: 4, category: 'development', icon: 'assets/icons/vuejs.svg' },
    { name: 'MySQL', level: 4, category: 'development', icon: 'assets/icons/mysql.svg' },
    { name: 'TailwindCSS', level: 4, category: 'development', icon: 'assets/icons/tailwind.svg' },
    
    // SEO & Analytics
    { name: 'SEO Technique', level: 5, category: 'seo', icon: 'assets/icons/seo.svg' },
    { name: 'Google Analytics', level: 5, category: 'seo', icon: 'assets/icons/analytics.svg' },
    { name: 'Optimisation Performance', level: 5, category: 'seo', icon: 'assets/icons/performance.svg' },
    
    // DevOps
    { name: 'Docker', level: 4, category: 'devops', icon: 'assets/icons/docker.svg' },
    { name: 'CI/CD', level: 4, category: 'devops', icon: 'assets/icons/cicd.svg' },
    { name: 'ETL', level: 4, category: 'devops', icon: 'assets/icons/etl.svg' }
  ];

  get categories(): string[] {
    return [...new Set(this.techs.map(tech => tech.category))];
  }

  getTechsByCategory(category: string): Tech[] {
    return this.techs.filter(tech => tech.category === category);
  }
} 