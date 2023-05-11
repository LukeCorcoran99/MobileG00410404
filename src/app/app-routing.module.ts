import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'timer',
    loadChildren: () => import('./timer/timer.module').then( m => m.TimerPageModule)
  },
  {
    path: 'alarm',
    loadChildren: () => import('./alarm/alarm.module').then( m => m.AlarmPageModule)
  },
  {
    path: 'stopwatch',
    loadChildren: () => import('./stopwatch/stopwatch.module').then( m => m.StopwatchPageModule)
  },
  {
    path: 'clock',
    loadChildren: () => import('./clock/clock.module').then( m => m.ClockPageModule)
  },
  {
    path: 'clockhome',
    loadChildren: () => import('./clockhome/clockhome.module').then( m => m.ClockhomePageModule)
  },
  {
    path: 'clockmonth',
    loadChildren: () => import('./clockmonth/clockmonth.module').then( m => m.ClockmonthPageModule)
  },
  {
    path: 'clockyear',
    loadChildren: () => import('./clockyear/clockyear.module').then( m => m.ClockyearPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
