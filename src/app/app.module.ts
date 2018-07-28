import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileContentComponent } from './profile-content/profile-content.component';
import { SkillComponent } from './profile-content/skill/skill.component';
import { WorkComponent } from './profile-content/work/work.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileHeaderComponent,
    ProfileContentComponent,
    SkillComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
