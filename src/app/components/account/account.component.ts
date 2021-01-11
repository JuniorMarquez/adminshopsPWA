import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { PostInterface } from '../../models/post-interface'; 
import { OrderInterface } from '../../models/order-interface';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
  	 private route:ActivatedRoute,
  private location: Location,
    private dataApi: DataApiService,
    public _uw:UserWService
  	) { }
    public posts:PostInterface;
  public postSize=0;
    public orders:OrderInterface;
  public order:OrderInterface;
  public ordersSize=0;

  ngOnInit() {
  	this._uw.routeProducts=false;
    this._uw.routeOrders=false;
    this._uw.routeHome=false;
    this._uw.routeAccount=true;
    this._uw.routeBlog=false;
    this._uw.routeLogin=false;
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


}
