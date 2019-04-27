import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { FollowingComponent } from './components/following/following.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { FormsModule }   from '@angular/forms';
import { RouteGuard } from './auth/route-guard';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllPostsComponent,
    FollowingComponent,
    FavoritesComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    MyPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
