import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashscreenPage } from './splashscreen';
import { NativeAudio } from '@ionic-native/native-audio';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    SplashscreenPage,
  ],
  imports: [
    SplashScreen,
    IonicPageModule.forChild(SplashscreenPage),
  ],
})
export class SplashscreenPageModule {}
