import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeSceneComponent } from '../three-scene/three-scene.component';
import { ParticlesComponent } from '../particles/particles.component';
import { ProfileService } from '../../services/profile.service';
import { SkillsSectionComponent } from '../skills-section/skills-section.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ExperiencesSectionComponent } from '../experiences-section/experiences-section.component';
import { ProjectsSectionComponent } from '../projects-section/projects-section.component';
import { TabsSectionComponent } from '../tabs-section/tabs-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ThreeSceneComponent,
    ParticlesComponent,
    SkillsSectionComponent,
    ExperienceComponent,
    ExperiencesSectionComponent,
    ProjectsSectionComponent,
    TabsSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profile: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profile = this.profileService.getProfile();
  }
}