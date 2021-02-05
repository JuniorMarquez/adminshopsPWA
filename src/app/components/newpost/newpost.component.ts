import {Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserWService } from "../../services/user-w.service";
import { CategoryInterface } from '../../models/category-interface';
import { PostInterface } from '../../models/post-interface'; 
import { DataApiService } from '../../services/data-api.service';
import { HttpClient } from  '@angular/common/http';
import { isError } from "util";
import { DemoFilePickerAdapter } from  '../../file-picker.adapter';
import { FilePickerComponent } from '../../../assets/file-picker/src/lib/file-picker.component';
import { FilePreviewModel } from '../../../assets/file-picker/src/lib/file-preview.model';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
	    adapter = new DemoFilePickerAdapter(this.http,this._uw);
  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
   myFiles: FilePreviewModel[] = [];

ngFormAddpost: FormGroup;
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
    public posts:PostInterface;
    public editingPrice=false;
    public editingDescription=false;
    public all = true;
    public isError = false;
    public isLogged =false;
    public images:any[]=[];

    public post : PostInterface ={
      tittle:"",
      post:"",
      status:"",
      images:[]
    };


    loadAPI = null;
    url = "assets/assetsadmin/scripts/jquery.js";
    url2 = "assets/assetsadmin/scripts/bootstrap.min.js";
    url3 = "assets/assetsadmin/scripts/custom.js";
   sendPost(){
      this.submitted = true;
      if (this.ngFormAddpost.invalid) {
        this._uw.errorFormAddpost=true;
      return;
        } 
      this._uw.errorFormAddpost=false;
      this.post = this.ngFormAddpost.value;
      this.post.status = "activated";
      this.post.images=this._uw.images;
      return this.dataApi.savePostFree(this.post)
        .subscribe(
        );
  }  
   finish(){
    if (this._uw.errorFormAddtixs){
      this.sendPost();
    }
    this.router.navigate(['/blog'])
  }



  ngOnInit() {
  		if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
            this.loadScript2();
            this.loadScript3();
          });
        }
      this._uw.loaded=true;
      this._uw.images=[];
      this.ngFormAddpost = this.formBuilder.group({
      tittle: ['', [Validators.required]],
      post: ['', [Validators.required]]
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
