import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LecteurVisitesPage } from './lecteur-visites';

@NgModule({
  declarations: [
    LecteurVisitesPage,
  ],
  imports: [
    IonicPageModule.forChild(LecteurVisitesPage),
  ],
})
export class LecteurVisitesPageModule {}
