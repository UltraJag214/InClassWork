import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeztComponent } from './tezt/tezt.component';

const routes: Routes = [
  { path: 'tezt', component: TeztComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
