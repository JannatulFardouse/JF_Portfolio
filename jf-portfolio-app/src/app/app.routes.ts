import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ThreeSceneComponent } from './components/three-scene/three-scene.component';
import { ParticlesComponent } from './components/particles/particles.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'three-scene', component: ThreeSceneComponent},
    { path: 'particles', component: ParticlesComponent},
];

