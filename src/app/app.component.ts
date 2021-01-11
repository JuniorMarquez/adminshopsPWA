import { Component } from '@angular/core';
import { TixsService } from "./services/tixs.service";
import { IpbucketService } from "./services/ipbucket.service";
import { DataApiService } from "./services/data-api.service";
import { ProductInfoService } from "./services/product-info.service";
import { UserWService } from "./services/user-w.service";
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
	


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor (
 	public _ps:TixsService, 
 	public _uw:UserWService,
 	public _pi:ProductInfoService, 
 	public ipbucket:IpbucketService, 
 	public dataApi:DataApiService,
 	private route:ActivatedRoute,
 	private swUpdate:SwUpdate,
	private location: Location,
	){

 }
     ngOnInit() {

      if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                if(confirm("Adminshops tiene nuevas mejoras. desea cargar esta nueva versión?")) {
                    window.location.reload();
                }
            });
        }    


  	 // if (this._uw.loaded==true){
    //       this.loadAPI = new Promise(resolve => {
    //         this.loadScript();
    //       });
    //     }
    //     this._uw.loaded=true;
  }
}
