import { async, TestBed } from '@angular/core/testing';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { slideToRight } from './router.animations';
import { slideToLeft } from './router.animations';
import { slideToBottom } from './router.animations';
import { slideToTop } from './router.animations';

describe('RouterAnimations', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        }),
        HttpClientModule,
        BrowserDynamicTestingModule,
        NoopAnimationsModule
      ],
      declarations: []
    });
  }));

  it('should check slideToRight', () => {
    const trigg = trigger('routerTransition', [
      state('void', style({})),
      state('*', style({})),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ]);

    expect(slideToRight()).toEqual(trigg);
  });

  it('should check slideToLeft', () => {
    const trigg = trigger('routerTransition', [
      state('void', style({})),
      state('*', style({})),
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ]);

    expect(slideToLeft()).toEqual(trigg);
  });

  it('should check slideToBottom', () => {
    const trigg = trigger('routerTransition', [
      state('void', style({})),
      state('*', style({})),
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
      ])
    ]);

    expect(slideToBottom()).toEqual(trigg);
  });

  it('should check slideToTop', () => {
    const trigg = trigger('routerTransition', [
      state('void', style({})),
      state('*', style({})),
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
      ])
    ]);

    expect(slideToTop()).toEqual(trigg);
  });
});
