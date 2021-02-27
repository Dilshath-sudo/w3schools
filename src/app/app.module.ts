import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BodyComponent } from './components/body/body.component';

export const ROUTES: Routes = [{
  path: 'lesson/learn-html', component: BodyComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BodyComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
