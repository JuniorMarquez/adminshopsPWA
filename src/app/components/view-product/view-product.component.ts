import { Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { DataApiService } from "../../services/data-api.service";
import { UserWService } from "../../services/user-w.service";
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TixInterface } from '../../models/tix-interface'; 
import { HttpClient } from  '@angular/common/http';
import { DemoFilePickerAdapter } from  '../../file-picker.adapter';
import { FilePickerComponent } from '../../../assets/file-picker/src/lib/file-picker.component';
import { FilePreviewModel } from '../../../assets/file-picker/src/lib/file-preview.model';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';
import { isError } from "util";
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
    adapter = new DemoFilePickerAdapter(this.http,this._uw);
  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
   myFiles: FilePreviewModel[] = [];

ngFormAddtixs: FormGroup;
  submitted = false;
  constructor(
  private formBuilder: FormBuilder,
 	public _uw:UserWService,
 	public dataApi:DataApiService,
 	private route:ActivatedRoute,
	private location: Location,
  private router: Router,
  private  http: HttpClient
  	) { }
    public editingCategory=false;
    public editingPrice=false;
    public editingDescription=false;
    public editingColor=false;
    public editingTalla=false;
    public tixs:TixInterface;
    loadAPI = null;
    url = "assets/assetsadmin/scripts/jquery.js";
    url2 = "assets/assetsadmin/scripts/bootstrap.min.js";
    url3 = "assets/assetsadmin/scripts/custom.js";

  ngOnInit() {
  		if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
            this.loadScript2();
            this.loadScript3();
          });
        }
      this._uw.loaded=true;
  }

public editCategory(){
  this.editingCategory=true;
}
public editPrice(){
  this.editingPrice=true;
}
public editTalla(){
  this.editingTalla=true;
}
public editColor(){
  this.editingColor=true;
}
public editDescription(){
  this.editingDescription=true;
}
public saveEditing(){
  this.editingCategory=false;
  this.editingPrice=false;
  this.editingDescription=false;
  this.editingColor=false;
  this.editingTalla=false;
}

  public loadScript() {
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
    public loadScript2() {
      let node = document.createElement("script");
      node.src = this.url2;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
     public loadScript3() {
      let node = document.createElement("script");
      node.src = this.url3;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }

}
