import { NotfoundComponent } from './component/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contacts/contact.component';
import { AboutComponent } from './component/about/about.component';
import { ContattoComponent } from './component/contatto/contatto.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      {
        path: ':id',
        component: ContattoComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
      },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
