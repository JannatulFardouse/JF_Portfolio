import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 Import this
import AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true, // make sure this line is present
  imports: [RouterModule], // 👈 Add this
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JF_Portfolio';
  ngOnInit(): void {
    AOS.init(); // Initialize AOS
  }
}
