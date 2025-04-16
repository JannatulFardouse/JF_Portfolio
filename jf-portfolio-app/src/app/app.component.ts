import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThreeSceneComponent } from './components/three-scene/three-scene.component';
import { ParticlesComponent } from './components/particles/particles.component';  // <-- Import the ParticlesComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ThreeSceneComponent, ParticlesComponent],  // <-- Add the ParticlesComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'JF_Portfolio';
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async ngOnInit(): Promise<void> {
    if (this.isBrowser) {
      const AOS = await import('aos');
      AOS.init();
    }
  }
}
