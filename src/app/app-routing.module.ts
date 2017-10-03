import { PageSignupComponent } from './pages/page-signup/page-signup.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';

const routes: Routes = [
  {
    path: 'page1', component: PageOneComponent
  },
  {
    path: 'page2', component: PageTwoComponent
  },
  {
    path: 'join', component: PageSignupComponent
  }
  ,
  {
    path: '**',
    redirectTo: 'page2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/Dynamic-Component-Loader/dist/' }
  ]
})
export class AppRoutingModule { }

// RouterModule.forRoot(routes,{
//   useHash: true,
//   enableTracing: false
// })