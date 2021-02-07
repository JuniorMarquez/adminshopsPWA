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

formEdit: FormGroup;
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
    public tix:TixInterface;
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

          this.formEdit = this.formBuilder.group({
        // productName: ['', [Validators.required]],
        description: ['', [Validators.required]],
        // category: ['', [Validators.required]],
        color:['', [Validators.required]],
        tallas: ['', [Validators.required]],
        globalPrice: [0,[Validators.required]]
      });
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
  this.sendTix();
  console.log("entra desde la funcion saveEditing ");
}
    sendTix(){
      let idToUpdate =this._uw.tixPreview.id;
      this.submitted = true;
      this.tix = this.formEdit;
      // if (this.tix.description=="") 
      //   {
      //     this.tix.description=this._uw.tixPreview.description;
      //   } 
      //   if (this.tix.color=="") 
      //   {
      //     this.tix.color=this._uw.tixPreview.color;
      //   }
        
        // if (this.tix.globalPrice=="undefined") 
        // {
        //   this.tix.globalPrice=this._uw.tixPreview.globalPrice;
        // } 
      this._uw.errorFormAddtixs=false;
      this.tix.images = this._uw.tixPreview.images;
      this.tix.status = this._uw.tixPreview.status;
      this.tix.globalPrice = this.formEdit.value.globalPrice;
       console.log("ya estamos dentro",+idToUpdate);
      // this.tix.status="activated";
      // if (this._uw.moccs){
      //   this.tix.globalPrice=0;
      //   this.tix.con=this.con;
      //   this.tix.sin=this.sin;
      // }
      // if (this._uw.botas || this._uw.zapatos){
      //   this.tix.price=this.tix.globalPrice;
      // }
      // if(this.tix.new){
      //   this.tix.colection="new";
      // }
      // if (this.tix.category=="Botas y botines"){
      //   this.tix.categoryFilter="Botas";
      // }
      // else{
      //   this.tix.categoryFilter=this.tix.category;
      // }
      // this.tix.check=this.checks;
      // this.tix.tallas=this.tallas;
      // this.tix.images=this._uw.images;
      return this.dataApi.updateTix(this.tix, idToUpdate)
        .subscribe(
            tix => this.router.navigate(['/products'])
        );
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
