import { Component, ElementRef, OnInit, ViewChild, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-background',
  standalone: true,
  template: `
    <canvas #canvas class="fixed top-0 left-0 w-full h-full z-0"></canvas>
  `,
  styles: [`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
      pointer-events: none;
    }
  `]
})
export class BackgroundComponent implements OnInit {
  @ViewChild('canvas', { static: true }) private canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private particles!: THREE.Points;
  private platformId = inject(PLATFORM_ID);
  
  private mouse = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    speed: 0.1
  };

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (isPlatformBrowser(this.platformId)) {
      this.mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initThree();
      this.animate();
    }
  }

  private initThree() {
    this.scene = new THREE.Scene();
    
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 50;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      alpha: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 50;

      const h = i / (count * 3);
      const color = new THREE.Color();
      color.setHSL(h, 0.6, 0.6);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colors, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particles);
  }

  private animate() {
    if (isPlatformBrowser(this.platformId)) {
      requestAnimationFrame(() => this.animate());

      this.mouse.x += (this.mouse.targetX - this.mouse.x) * this.mouse.speed;
      this.mouse.y += (this.mouse.targetY - this.mouse.y) * this.mouse.speed;

      if (this.particles) {
        this.particles.rotation.x += 0.0002;
        this.particles.rotation.y += 0.0004;

        this.particles.rotation.x += this.mouse.y * 0.002;
        this.particles.rotation.y += this.mouse.x * 0.002;

        const geometry = this.particles.geometry as THREE.BufferGeometry;
        const positionAttribute = geometry.getAttribute('position');
        const positions = positionAttribute.array as Float32Array;
        const time = Date.now() * 0.0002;

        for(let i = 0; i < positions.length; i += 3) {
          const x = positions[i];
          const z = positions[i + 2];
          positions[i + 2] = z + Math.sin(time + x * 0.2) * 0.2;
        }

        positionAttribute.needsUpdate = true;
      }

      this.renderer.render(this.scene, this.camera);
    }
  }
} 