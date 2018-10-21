import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ContentSliderComponent } from './components/content-slider/content-slider.component';



const appRoutes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'content', component: ContentSliderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
