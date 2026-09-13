import { Component, Input } from '@angular/core';

@Component({
  selector: 'landing-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class LandingProjectCardComponent {
  @Input() title = '';
  @Input() image = '';
}