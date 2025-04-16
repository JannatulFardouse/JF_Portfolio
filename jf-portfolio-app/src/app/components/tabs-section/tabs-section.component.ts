import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileService } from '../../services/profile.service';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabs-section',
  standalone: true,
  imports: [CommonModule, MatTabsModule, LayoutModule, FormsModule],
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
  isMobile: boolean = false;

  selectedTab: string = 'Skills';
  selectedTabIndex: number = 0;
  tabLabels = [
    'Skills',
    'Experience',
    'Education',
    'Certifications',
    'Languages & Soft Skills'
  ];

  constructor(
    private profileService: ProfileService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.profile = this.profileService.getProfile();

    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }

  nextTab(): void {
    if (this.selectedTabIndex < this.tabLabels.length - 1) {
      this.selectedTabIndex++;
    }
  }

  prevTab(): void {
    if (this.selectedTabIndex > 0) {
      this.selectedTabIndex--;
    }
  }
}