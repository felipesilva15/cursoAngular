import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { AccountComponent } from './shared/pages/account/account.component';
import { CanActiveGuard } from './shared/guard/can-active.guard';
import { CanDeactiveGuard } from './shared/guard/can-deactive.guard';
import { CanLoadGuard } from './shared/guard/can-load.guard';
import { CanActivateChildGuard } from './shared/guard/can-activate-child.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account', component: AccountComponent, canActivate: [ CanActiveGuard ], canDeactivate: [ CanDeactiveGuard ] },
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule), canLoad: [ CanLoadGuard ], canActivateChild: [ CanActivateChildGuard ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
