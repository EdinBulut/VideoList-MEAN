import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VideoCenterComponent } from './pages/video-center/video-center.component';

const routes: Routes = [
  {path: '', redirectTo: 'videos', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'videos', component: VideoCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
