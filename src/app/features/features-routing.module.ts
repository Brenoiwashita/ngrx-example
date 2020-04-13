import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleContainerComponent } from './example/example.container';

const routes: Routes = [
  {
    path: '',
    component: ExampleContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
