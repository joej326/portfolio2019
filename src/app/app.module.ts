import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { SlideshowComponent } from './projects-section/slideshow/slideshow.component';
import { SlideComponent } from './projects-section/slideshow/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProjectsSectionComponent,
    SlideshowComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
