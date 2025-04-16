import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ThreeSceneComponent } from './components/three-scene/three-scene.component';
import { ParticlesComponent } from './components/particles/particles.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent }, // a more detailed project view
  { path: 'contact', component: ContactComponent },
  { path: 'three-scene', component: ThreeSceneComponent }, // maybe for 3D background testing
  { path: 'particles', component: ParticlesComponent },     // maybe for visual tests
  // REMOVE these unless you want full pages:
  // { path: 'experience', component: ExperienceComponent },
  // { path: 'experiences-section', component: ExperiencesSectionComponent },
  // { path: 'projects-section', component: ProjectsSectionComponent },
  // { path: 'skills-section', component: SkillsSectionComponent },
];
