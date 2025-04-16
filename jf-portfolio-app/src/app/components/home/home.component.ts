import { Component } from '@angular/core';
import { ThreeSceneComponent } from '../three-scene/three-scene.component';
import { ParticlesComponent } from '../particles/particles.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ThreeSceneComponent, ParticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
