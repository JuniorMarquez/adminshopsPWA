import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserWService } from "../../services/user-w.service";
import { CategoryInterface } from '../../models/category-interface';
import { TixInterface } from '../../models/tix-interface'; 
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
	private route:ActivatedRoute,
  private dataApi: DataApiService,
	private location: Location,
	public _uw:UserWService
    ) { }
  public categories:CategoryInterface;
    public tixs:TixInterface;
    public editingPrice=false;
     public editingDescription=false;
     public all = true;
    loadAPI = null;
    url = "assets/assetsadmin/scripts/jquery.js";
    url2 = "assets/assetsadmin/scripts/bootstrap.min.js";
    url3 = "assets/assetsadmin/scripts/custom.js";
  
  ngOnInit() {
    this._uw.categorySelected="all";
    this._uw.routeProducts=true;
    this._uw.routeOrders=false;
    this._uw.routeHome=false;
    this._uw.routeAccount=false;
    this._uw.routeBlog=false;
    this._uw.routeLogin=false;


         this.setCategories();
            this.getAllTixs();
	if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
            this.loadScript2();
            this.loadScript3();
          });
        }
      this._uw.loaded=true;
  }
  public setCategories(){

    this.categories=this._uw.categories;
  }



public filter(catego: string){

  this._uw.categorySelected=catego;
      let categ = catego; 
      this.all=false;

     
    }




public editPrice(){
  this.editingPrice=true;
}
public editDescription(){
  this.editingDescription=true;
}
public saveEditing(){
  this.editingPrice=false;
  this.editingDescription=false;
}

  public viewProduct(tix){
    let tixToView = tix;
    this._uw.tixPreview=tixToView;
    this._uw.tixPreview.quantity=1; 
    this._uw.imagePreviewProduct=this._uw.tixPreview.images[0];
  } 


  
  getAllCategories(){
        this.dataApi.getAllCategories().subscribe((res:any) => {
      if (res[0] === undefined){
       }else{
        this.categories=res;            
        }
     });  
    }
     getAllTixs(){
        this.dataApi.getAllTixs().subscribe((res:any) => {
      if (res[0] === undefined){
       }else{
        this.tixs=res;   
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

}
