import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
// import { GlobalNavComponent } from './shared/globalnav.component';
import { ExploreModule } from './explore/explore.module';
import { ParticipateModule } from './participate/participate.module';
import { ThreadsModule } from './threads/threads.module';
import { SharedModule } from './shared/shared.module';

import { TakeTourComponent } from './explore/take-tour/taketour.component';
import { ThreadsComponent } from  './threads/threads.component';
import { AboutComponent } from './home/about/about.component';

import { ExploreComponent } from './explore/explore.component';
import { BlockComponent } from './the-quilt/block/block.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot ([
      { path: 'home', component: HomeComponent },
      { path: 'start', component: StartComponent },
      { path: 'explore', component: ExploreComponent },
      // { path: 'favorite', component: FavoriteComponent },
      // { path: 'stitch', component: StitchComponent },
      { path: 'tour', component: TakeTourComponent },
      { path: 'thread', component: ThreadsComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    ExploreModule,
    SharedModule,
    ParticipateModule,
    ThreadsModule,
  ],


  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    AboutComponent,
    BlockComponent,
    // GlobalNavComponent,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [ AppComponent ]
})

export class AppModule { }