import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { GridTypeComponent } from './grid.type';
import { GridFormlyCellComponent } from './grid-formly-cell.component';
import { NameComponent } from './name/name.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(en);

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    AgGridModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: 'input', component: NameComponent },
        {
          name: 'grid',
          component: GridTypeComponent,
          defaultOptions: {
            props: { 
              width: '100%',
              height: '400px',
            },
          },
        },
      ],
    }),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, GridTypeComponent, GridFormlyCellComponent, NameComponent],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
})
export class AppModule {}


