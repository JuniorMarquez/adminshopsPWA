import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { OrderInterface } from '../../models/order-interface';
import { DataApiService } from '../../services/data-api.service';
import { Router } from '@angular/router';
import { UserWService } from "../../services/user-w.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
  private dataApi: DataApiService,
	private route:ActivatedRoute,
  private router:Router,
	private location: Location,
	public _uw:UserWService
  	) { }
  loadAPI = null;
    url = "assets/assetsadmin/scripts/jquery.js";
    url2 = "assets/assetsadmin/scripts/bootstrap.min.js";
    url3 = "assets/assetsadmin/scripts/custom.js";

  public orders:OrderInterface;
  public order:OrderInterface;

  ngOnInit() {
         this.getOrders();
     this.getOrdersTamano();
  		if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
            this.loadScript2();
            this.loadScript3();
          });
        }
      this._uw.loaded=true;
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

    setId(order,indice,tamano){
    this._uw.orderSelected=order;
    this._uw.idSelected=order.id;
    this._uw.tamano=tamano;
    this._uw.indice=indice;
    this.router.navigate(['/orderdetail']);
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
