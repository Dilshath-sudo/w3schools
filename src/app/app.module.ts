import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { SummaryBoxComponent } from './components/summary-box/summary-box.component';
import { ColorDirective } from './directives/color.directive';
import { SquarePipe } from './square.pipe';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lesson/:lessonUrl', component: BodyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BodyComponent,
    SideBarComponent,
    HomeComponent,
    SummaryBoxComponent,
    ColorDirective,
    SquarePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
