import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllcommentPage } from './allcomment';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    AllcommentPage,
  ],
  imports: [
      StarRatingModule,
    IonicPageModule.forChild(AllcommentPage),
  ],
})
export class AllcommentPageModule {}
