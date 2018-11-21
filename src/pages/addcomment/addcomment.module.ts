import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddcommentPage } from './addcomment';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    AddcommentPage,
  ],
  imports: [
    StarRatingModule,
    IonicPageModule.forChild(AddcommentPage),
  ],
})
export class AddcommentPageModule {}
