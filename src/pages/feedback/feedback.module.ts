import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbackPage } from './feedback';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    FeedbackPage,
  ],
  imports: [
    StarRatingModule,
    IonicPageModule.forChild(FeedbackPage),

  ],
})
export class FeedbackPageModule {}
