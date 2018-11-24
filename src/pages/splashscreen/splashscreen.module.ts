import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashscreenPage } from './splashscreen';
import { NativeAudio } from '@ionic-native/native-audio';

@NgModule({
  declarations: [
    SplashscreenPage,
  ],
  imports: [
    IonicPageModule.forChild(SplashscreenPage),
  ],
})
export class SplashscreenPageModule {}
