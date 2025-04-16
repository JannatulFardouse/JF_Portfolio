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
              value: '#ffffff' // Light background, you can change to '#000' for dark
            }
          },
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800 // ✅ Correct usage
              } as any // optional workaround
            },
            color: {
              value: '#00b894'
            },
            shape: {
              type: 'circle'
            },
            opacity: {
              value: 0.5
            },
            size: {
              value: { min: 1, max: 3 } // ✅ instead of "random"
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
              color: '#00b894',
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
