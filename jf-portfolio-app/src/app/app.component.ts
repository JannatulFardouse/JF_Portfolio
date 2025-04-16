import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThreeSceneComponent } from './components/three-scene/three-scene.component';
import { ParticlesComponent } from './components/particles/particles.component';  // <-- Import the ParticlesComponent
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperiencesSectionComponent } from './components/experiences-section/experiences-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule, ThreeSceneComponent, ParticlesComponent, SkillsSectionComponent, ExperienceComponent, ExperiencesSectionComponent],  // <-- Add the ParticlesComponent here
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
