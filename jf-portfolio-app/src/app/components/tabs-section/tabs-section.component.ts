import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileService } from '../../services/profile.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-tabs-section',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './tabs-section.component.html',
  styleUrls: ['./tabs-section.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('400ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class TabsSectionComponent implements OnInit {
  profile: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profile = this.profileService.getProfile();
  }
}
