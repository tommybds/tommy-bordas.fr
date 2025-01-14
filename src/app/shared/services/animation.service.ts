import { Injectable } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  fadeInUp = trigger('fadeInUp', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      animate('0.6s ease-out')
    ])
  ]);
  
  slideIn = trigger('slideIn', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(-30px)' }),
      animate('0.5s ease-out')
    ])
  ]);
} 