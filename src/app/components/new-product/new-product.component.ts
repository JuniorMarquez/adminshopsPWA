import {Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserWService } from "../../services/user-w.service";
import { CategoryInterface } from '../../models/category-interface';
import { TixInterface } from '../../models/tix-interface'; 
import { DataApiService } from '../../services/data-api.service';
import { HttpClient } from  '@angular/common/http';
import { isError } from "util";
import { DemoFilePickerAdapter } from  '../../file-picker.adapter';
import { FilePickerComponent } from '../../../assets/file-picker/src/lib/file-picker.component';
import { FilePreviewModel } from '../../../assets/file-picker/src/lib/file-preview.model';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
    adapter = new DemoFilePickerAdapter(this.http,this._uw);
  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
   myFiles: FilePreviewModel[] = [];

ngFormAddtixs: FormGroup;
  submitted = false;
  constructor(
	private route:ActivatedRoute,
  private dataApi: DataApiService,
	private location: Location,
	public _uw:UserWService,
  private  http: HttpClient,
  private router: Router,
  private formBuilder: FormBuilder
  	) { }

    public categories:CategoryInterface;
    public tixs:TixInterface;
    public editingPrice=false;
    public editingDescription=false;
    public all = true;
    public isError = false;
    public isLogged =false;
    public images:any[]=[];
    public tix : TixInterface ={
       // userd:"",
      productName:"",
      description:"",
      // notes:"",
      category:"categoría",
      // check:[],
      // codigo:"",
      color:"",
      // con:[],
      // colection:"",
      globalPrice:0,
      images:[]
      // modelo:"",
      // new:true,
      // sin:[],
      // status:"",
      // tallas:[],
      // typePrice:"global"
    };

    loadAPI = null;
    url = "assets/assetsadmin/scripts/jquery.js";
    url2 = "assets/assetsadmin/scripts/bootstrap.min.js";
    url3 = "assets/assetsadmin/scripts/custom.js";


  sendTix(){
      this.submitted = true;
      if (this.ngFormAddtixs.invalid) {
        this._uw.errorFormAddtixs=true;
      return;
        } 
      this._uw.errorFormAddtixs=false;
      this.tix = this.ngFormAddtixs.value;
      this.tix.status="activated";
      this.tix.images=this._uw.images;
      return this.dataApi.saveTixFree(this.tix)
        .subscribe(
        );
  }  
   finish(){
    if (this._uw.errorFormAddtixs){
      this.sendTix();
    }
    this.router.navigate(['/mytixs'])
  }


  ngOnInit() {
      this.getAllCategories();
  		if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
            this.loadScript2();
            this.loadScript3();
          });
        }
      this._uw.loaded=true;
      this._uw.images=[];
      this.ngFormAddtixs = this.formBuilder.group({
      productName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      color:['', [Validators.required]],
      globalPrice: [0,[Validators.required]]
      });
  }
    getAllCategories(){
        this.dataApi.getAllCategories().subscribe((res:any) => {
      if (res[0] === undefined){
       }else{
        this._uw.categories=res;  
        this._uw.selectedQuan=res.length;          
        }
     });  
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


    onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
      onValidationError(e: ValidationError) {
      console.log(e);
    }
    onUploadSuccess(e: FilePreviewModel) {
      this.images=this._uw.file;  
    }
    onRemoveSuccess(e: FilePreviewModel) {
      console.log(e);
    }
    onFileAdded(file: FilePreviewModel) {
      file.fileName="http://192.168.43.227/imgApi2/server/local-storage/tixsImages/"+file.fileName;
      this.myFiles.push(file);
    }
    removeFile() {
      this.uploader.removeFileFromList(this.myFiles[0].fileName);
    }

}
