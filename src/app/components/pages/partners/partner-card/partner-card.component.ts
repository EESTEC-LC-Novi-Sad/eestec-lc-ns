import { Component, Input } from '@angular/core';
import { Partner } from 'src/app/model/partner';

@Component({
  selector: 'partner-card',
  templateUrl: './partner-card.component.html',
  styleUrls: ['./partner-card.component.scss'],
})
export class PartnerCardComponent {
  @Input() partner: Partner = new Partner();
}