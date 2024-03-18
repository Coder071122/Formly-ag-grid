import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="w-4/5 mx-auto mt-12 py-8 border-2 p-6">
    <h1>Reset Filter</h1>
    <hr style="background-color: gray; width:100%; height:1px">
    <div class="py-6 flex gap-5"> 
      <button (click)="sortByage()" class="py-2 px-4 border-2">Sort age</button>
      <button class="py-2 px-4 border-2">Clear filters</button>
      <button class="py-2 px-4 border-2">Clear filters and sorters</button>
    </div>
    <form class="border-2" [formGroup]="form" (ngSubmit)="submit()">
      <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>
    </form>  
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  gridApi: any;
  gridColumnApi: any;
  title:any;
  form = new FormGroup({});
  model: any = {
    investments: [      
      {
        investmentName: 'John Brown',
        investmentDate: '32',
        stockIdentifier: 'New York No. 1 Lake Park ',
      },
      {
        investmentName: 'Jim Green',
        investmentDate: '42',
        stockIdentifier: 'New York No. 1 Lake Park',
      },
      {
        investmentName: 'Joe Black',
        investmentDate: '32',
        stockIdentifier: 'New York No. 1 Lake Park',
      },
      {
        investmentName: 'Jim Red',
        investmentDate: '32',
        stockIdentifier: 'New York No. 2 Lake Park',
      },
      {
        investmentName: 'hung 5',
        investmentDate: '55',
        stockIdentifier: 'New York No. 1 Lake Park',
      },
      {
        investmentName: 'hung 6',
        investmentDate: '66',
        stockIdentifier: 'New York No. 1 Lake Park',
      },
      {
        investmentName: 'hung 7',
        investmentDate: '77',
        stockIdentifier: 'New York No. 1 Lake Park',
      },
      {
        investmentName: 'hung 8',
        investmentDate: '88',
        stockIdentifier: 'New York No. 1 Lake Park',
      },
      {
        investmentName: 'hung 9',
        investmentDate: '99',
        stockIdentifier: 'New York No. 1 Lake Park',
      },
      {
        investmentName: 'hung 10',
        investmentDate: '100',
        stockIdentifier: 'New York No. 1 Lake Park',
      },
      {
        investmentName: 'hung 11',
        investmentDate: '111',
        stockIdentifier: 'New York No. 1 Lake Park',
      },
      {
        investmentName: 'hung 12',
        investmentDate: '66',
        stockIdentifier: 'New York No. 1 Lake Park',
      },
    ],
  };
  sortByage() {
    if (this.gridApi) {
      this.gridApi.applyColumnState({
        state: [{ colId: 'investmentDate', sort: 'asc' }],
        defaultState: { sort: null },
      });
    }
  }  
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
    },
    {
      key: 'investments',
      type: 'grid',
      className: 'ag-theme-alpine',
      props: {
        height: '400px',
        gridOptions: {
          rowHeight: 50,
          columnDefs: [
            {
              headerName: 'Name',
              field: 'investmentName',
              sortable: true,
              width: 350,
            },
            {
              headerName: 'Age',
              field: 'investmentDate',
              sortable: true,
              width: 350,
            },
            { 
              headerName: 'Address',
              field: 'stockIdentifier',
            },
          ],
          pagination: true, 
          paginationPageSize: 4, 
        },
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'input',
            key: 'investmentName',
            props: {
              readonly: true,
            },
          },
          {
            type: 'input',
            key: 'investmentDate',
            props: {
              readonly: true,
            },
          },
          {
            type: 'input',
            key: 'stockIdentifier',
            props: {
              readonly: true,
            },
          },
        ],
      },
    },
  ];

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}
