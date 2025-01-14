import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out')
      ])
    ])
  ]
})
export class HomeComponent {
  stats = [
    { value: '43', label: 'Missions réalisées' },
    { value: '80+', label: 'Sites gérés' },
    { value: '98%', label: 'Clients satisfaits' }
  ];

  certifications = [
    {
      name: 'Google Analytics',
      institution: 'IAE DE NANTES',
      year: '2018'
    }
  ];

  education = [
    {
      degree: 'Licence 3 MIAGE',
      school: 'Université de Nantes',
      year: '2015'
    },
    {
      degree: 'Licence 3 Webmarketing et E-Commerce',
      school: 'Université de Nantes',
      year: '2016'
    },
    {
      degree: 'DUT Gestion des Entreprises et des Administrations',
      school: 'IUT Poitiers',
      year: '2012'
    }
  ];
} 