import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-name',
  template: `
  <input class="border-0" type="input" [formControl]="formControl" [formlyAttributes]="field">
`,
  styleUrls: ['./name.component.scss']
})
export class NameComponent extends FieldType<FieldTypeConfig> {}

