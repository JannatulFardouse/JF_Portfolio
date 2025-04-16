import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { tsParticles } from '@tsparticles/engine';
import { loadBasic } from '@tsparticles/basic';

@Component({
  selector: 'app-particles',
  standalone: true,
  template: '<div id="tsparticles"></div>',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      await loadBasic(tsParticles);

      await tsParticles.load({
        id: 'tsparticles',
        options: {
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          background: {
            color: {
              value: '#ffffff'
            }
          },
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              } as any 
            },
            color: {
              value: '#b80099'
            },
            shape: {
              type: 'circle'
            },
            opacity: {
              value: 0.5
            },
            size: {
              value: { min: 1, max: 7 } 
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              outModes: {
                default: 'out'
              }
            },
            links: {
              enable: true,
              color: '#b80099',
              distance: 150,
              opacity: 0.5
            }
          },
          detectRetina: true
        }
      });
    }
  }
}
