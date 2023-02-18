import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';
import { Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-ej2-form-demo',
  templateUrl: './ej2-form-demo.component.html',
  styleUrls: ['./ej2-form-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Ej2FormDemoComponent implements OnInit {

  working: boolean = false;
  message: string = '';

  formGroup = new FormGroup({
    cat: new FormControl(0),
    art: new FormControl(0)
  });
  catDataSource: any;
  artDataSource: any;
  catFields: Object = { value: 'catID', text: 'category' };
  artFields: Object = { value: 'artID', text: 'artCaption' };
  formSubmitValue!: string;

  cat$ = new Subject();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{ [key: string]: object; }[]>(
      "https://miukafoto.com/api/Cat/public-category-list",
      { observe: "response" as 'body' }
    ).subscribe((x: any) => {
      if (x.ok && x.status === 200) {
        this.catDataSource = x.body;
      };
    });

    this.formGroup.controls['cat'].valueChanges.subscribe(x => {
      this.cat$.next(x);
    });

    this.cat$.subscribe(() => {

      const catid = this.formGroup.get('cat')?.value;
      
      if (catid) {
        this.http.get<{ [key: string]: object; }[]>(
          "https://miukafoto.com/api/Art/public-list?catid=" + catid,
          { observe: "response" as 'body' }
        ).subscribe((x: any) => {
          if (x.ok && x.status === 200) {
            this.artDataSource = x.body;
          };
        });
      } else {
        // if asign this.artDataSource = null/undefined => it doesn't work :)
        this.artDataSource = []; 
      };
    });

  }

  public onCatFiltering: EmitType<string> = (e: FilteringEventArgs) => {
    let query = new Query();
    //frame the query based on search string with filter type.
    query = (e.text != "") ? query.where("category", "contains", e.text, true, true) : query;
    //pass the filter data source, filter query to updateData method.
    e.updateData(this.catDataSource, query);
  };

  public onArtFiltering: EmitType<string> = (e: FilteringEventArgs) => {
    let query = new Query();
    //frame the query based on search string with filter type.
    query = (e.text != "") ? query.where("artCaption", "contains", e.text, true, true) : query;
    //pass the filter data source, filter query to updateData method.
    e.updateData(this.artDataSource, query);
  };

  onSubmit() {
    this.formSubmitValue = JSON.stringify(this.formGroup.getRawValue(), null, 2);
  };

  initFormValue() {

    this.working = true;

    this.simulatingGetByIdApi().then(x => {
      this.formGroup.setValue(x);
      this.message = `
        As you can see, the form value, Category data source and Post data source have been all updated,
        but the second ej2 dropdown list is not showing text even when the corresponding field has a value!!!
      `


      this.working = false;
    });
    
  };

  // wait for 2 seconds
  simulatingGetByIdApi(): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          cat: 3,
          art: 1093,
        })
      }, 2000);
    })
  }

  showArtDataSource() {
    alert(JSON.stringify(this.artDataSource, null, 2));
  };
}