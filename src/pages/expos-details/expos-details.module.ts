import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExposDetailsPage } from './expos-details';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    ExposDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExposDetailsPage),
    StarRatingModule,
  ],
})
export class ExposDetailsPageModule {}
