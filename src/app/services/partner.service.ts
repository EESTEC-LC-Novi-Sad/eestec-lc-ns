import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { Partner } from '../model/partner';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  getAllPartners() {
    const promise = this.client.getEntries({
      content_type: 'eestecPartner',
    });
    return from(promise);
  }

  convertDataToPartners(data: any): Partner[] {
    let retVal: Partner[] = [];
    for (let item of data.items) {
      let partner: Partner = new Partner();
      partner.name = item.fields.name;
      partner.logo = item.fields.logo;
      partner.description = item.fields.description;
      partner.website = item.fields.website;
      partner.gallery = item.fields.gallery;
      partner.id = item.sys.id;

      retVal.push(partner);
    }

    return retVal;
  }

  getPartnerById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }

  convertDataToPartner(data: any): Partner {
    let partner: Partner = new Partner();

    partner.name = data.fields.name;
    partner.logo = data.fields.logo;
    partner.description = data.fields.description;
    partner.website = data.fields.website;
    partner.gallery = data.fields.gallery;
    partner.id = data.sys.id;

    return partner;
  }

  getAllPartnersByType(contentType: string) {
    const promise = this.client.getEntries({
      content_type: contentType,
    });
    return from(promise);
  }
}
