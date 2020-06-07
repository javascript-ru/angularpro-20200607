import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MypreloadingService } from './mypreloading.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule), 
    data: {
      preload: true
    }
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: MypreloadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
