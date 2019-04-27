import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FollowingComponent } from './components/following/following.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { RouteGuard } from './auth/route-guard';

const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'all', component: AllPostsComponent, canActivate: [RouteGuard]},
    {path: 'following', component: FollowingComponent, canActivate: [RouteGuard]},
    {path: 'favorites', component: FavoritesComponent, canActivate: [RouteGuard]},
    {path: 'myposts', component: MyPostsComponent, canActivate: [RouteGuard]},
    {path: 'signup', component: SignUpComponent},
    {path: 'login', component: LoginComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: false })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}