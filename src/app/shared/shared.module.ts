import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule, NgSelectConfig } from '@ng-select/ng-select';
import { NgbPaginationModule, NgbDatepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { PokemonsService } from './services/pokemons/pokemons.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbPaginationModule,
    NgbDropdownModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot(),
    NgSelectModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbDropdownModule,
    NgxMaskModule,
    NgSelectModule,
    FontAwesomeModule
  ],
  providers: [PokemonsService]
})
export class SharedModule {
  constructor(private translateConfig: NgSelectConfig, private translateService: TranslateService) {
    library.add();
    this.translateConfig.notFoundText = this.translateService.instant('No items found');
    this.translateConfig.placeholder = this.translateService.instant('Select');
  }
}
