import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-experiences-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences-section.component.html',
  styleUrls: ['./experiences-section.component.scss']
})
export class ExperiencesSectionComponent implements OnInit {
  experiences: any[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.experiences = this.profileService.getProfile().experiences;
  }
}
