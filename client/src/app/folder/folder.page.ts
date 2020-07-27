import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { TrackingDeliveryService } from '../services/tracking-delivery.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  private folderName: any  = {
    'delivery-tracker': '배송 조회'
  };
  public trackingForm = new FormGroup({
    companyCode: new FormControl(''),
    invoiceNumber: new FormControl('')
  });
  public companies: Company[] = [
    { name: 'CJ대한통운', code: '04' },
    { name: '한진택배', code: '05' },
    { name: '경동택배', code: '23' }
  ];
  public invoiceNumber: string;
  public companyName: string;
  public trackingData: any;
  public errorResponse: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private trackingDeliveryService: TrackingDeliveryService
  ) { }

  ngOnInit() {
    const selectedFolder = this.activatedRoute.snapshot.paramMap.get('id');
    this.folder = this.folderName[selectedFolder];
  }

  public trackDelivery() {
    console.log('tracking form value :', this.trackingForm.value);
    this.trackingDeliveryService.getTrackingInfo(this.trackingForm.value).subscribe(
      (res) => {
        console.log('res :', res);
        if (res) {
          if (res.status !== 200) {
            this.errorResponse = {
              status: res.status,
              message: res.message
            };
          }
          
          this.trackingData = res.data;
          console.log('tracking details :', res.data.trackingDetails);
        }
      },
      err => console.log(err)
    )
  }
  
  public getCompanyName(code: string): string {
    const len = this.companies.length;
    
    for (let i = 0; i < len; i++) {
      if (this.companies[i].code === code) {
        return this.companies[i].name;
      }
    }
  }
}
