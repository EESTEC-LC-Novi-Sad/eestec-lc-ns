import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/model/partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  public partners: Partner[] = [];
  public merchPartners: Partner[] = [];
  public mediaPartners: Partner[] = [];
  public partnerOrganisations: Partner[] = [];

  public loading = true;

  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.partnerService.getAllPartners().subscribe((data) => {
      this.partners = this.partnerService.convertDataToPartners(data);
      this.loading = false;
    });

    this.partnerService.getAllPartnersByType('eestecMerchPartner').subscribe((data) => {
      this.merchPartners = this.partnerService.convertDataToPartners(data);
    });

    this.partnerService.getAllPartnersByType('eestecMediaPartner').subscribe((data) => {
      this.mediaPartners = this.partnerService.convertDataToPartners(data);
    });

    this.partnerService.getAllPartnersByType('eestecPartnerOrganisation').subscribe((data) => {
      this.partnerOrganisations = this.partnerService.convertDataToPartners(data);
    });
  }
}