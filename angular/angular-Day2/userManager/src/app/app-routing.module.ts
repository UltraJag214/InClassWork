import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeztComponent } from './tezt/tezt.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  // { path: '**', redirectTo: 'test' },
  { path: 'tezt', component: TeztComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
