import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-2xl">
        <div class="bg-base-200/80 backdrop-blur-sm p-8 rounded-lg shadow-xl">
          <h2 class="text-3xl font-bold text-center mb-12">Me Contacter</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-6">
              <h3 class="text-xl font-semibold">Informations de contact</h3>
              <div class="space-y-4">
                <p>
                  <i class="fas fa-envelope mr-2"></i>
                  <a
                    href="mailto:contact&#64;tommybordas.fr"
                    class="hover:text-primary"
                    >contact&#64;tommybordas.fr</a
                  >
                </p>
                <p>
                  <i class="fas fa-phone mr-2"></i>
                  <a href="tel:+33600000000" class="hover:text-primary"
                    >+33 6 00 00 00 00</a
                  >
                </p>
                <p>
                  <i class="fas fa-map-marker-alt mr-2"></i>
                  Bordeaux, France
                </p>
              </div>
              <div class="flex gap-4 mt-6">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  class="text-2xl hover:text-primary"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  class="text-2xl hover:text-primary"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  class="text-2xl hover:text-primary"
                >
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <form class="space-y-4">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Nom</span>
                    </label>
                    <input type="text" class="input input-bordered" required />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input type="email" class="input input-bordered" required />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Message</span>
                    </label>
                    <textarea
                      class="textarea textarea-bordered h-24"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary w-full">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ContactComponent {}
