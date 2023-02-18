import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';
import { Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-ej2-form-demo',
  templateUrl: './ej2-form-demo.component.html',
  styleUrls: ['./ej2-form-demo.component.scss']
})
export class Ej2FormDemoComponent implements OnInit {


  formGroup = new FormGroup({
    code: new FormControl(1330),
    art: new FormControl(1214)
  });
  codeDataSource: Observable<any>;
  artDataSource: Observable<any>;
  fields: Object = { value: 'artID', text: 'artCaption' };
  formSubmitValue!: string;

  constructor(private http: HttpClient) {
    this.codeDataSource = this.http.get<{ [key: string]: object; }[]>(
      "https://miukafoto.com/api/Art/public-list?catid=7"
    );
    this.artDataSource = this.http.get<{ [key: string]: object; }[]>(
      "https://miukafoto.com/api/Art/public-list?catid=1"
    );
  }

  ngOnInit(): void {
    
  }

  onFiltering: EmitType<string> = (e: FilteringEventArgs) => {
    let query = new Query();
    //frame the query based on search string with filter type.
    query = (e.text != "") ? query.where("artCaption", "contains", e.text, true) : query;
    //pass the filter data source, filter query to updateData method.
    //e.updateData(this.data, query);
  };

  onSubmit() {
    this.formSubmitValue = JSON.stringify(this.formGroup.getRawValue(), null, 2);
  }
}