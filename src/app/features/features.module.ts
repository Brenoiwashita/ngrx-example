import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleContainerComponent } from './example/example.container';
import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ExampleService } from './example/services/example.service';

@NgModule({
  declarations: [ExampleContainerComponent],
  imports: [CommonModule, FeaturesRoutingModule, SharedModule],
  providers: [ExampleService]
})
export class FeaturesModule {}
