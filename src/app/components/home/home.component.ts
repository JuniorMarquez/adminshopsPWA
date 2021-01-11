import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { PostInterface } from '../../models/post-interface'; 
import { OrderInterface } from '../../models/order-interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
	private route:ActivatedRoute,
	private location: Location,
    private dataApi: DataApiService,
    public _uw:UserWService
  	) { }
    loadAPI = null;
    url = "assets/assetsadmin/scripts/jquery.js";
    url2 = "assets/assetsadmin/scripts/bootstrap.min.js";
    url3 = "assets/assetsadmin/scripts/custom.js";
  public posts:PostInterface;
  public postSize=0;
    public orders:OrderInterface;
  public order:OrderInterface;
  public ordersSize=0;
  ngOnInit() {
    this._uw.routeProducts=false;
    this._uw.routeOrders=false;
    this._uw.routeHome=true;
    this._uw.routeAccount=false;
    this._uw.routeBlog=false;
    this._uw.routeLogin=false;
		if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
            this.loadScript2();
            this.loadScript3();
          });
        }
      this._uw.loaded=true;
      this.getAllCategories();
         this.getAllPosts();
         this.getOrders();
         this.getOrdersTamano();

  }
getOrdersTamano(){
         this.dataApi
         .getOrders()
         .subscribe((res:any) => {
      if (res[0] === undefined){
        return
        }else{
          this.orders=res;
         this._uw.tamano = res.length;
        }
      });
    }

  getOrders(){
        this.dataApi
        .getOrders()
        .subscribe((orders: OrderInterface) => (this.orders=orders));
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
    getAllPosts(){
        this.dataApi.getAllPosts().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("no");
       }else{
        this.posts=res;    
        this.postSize=res.length;        
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
