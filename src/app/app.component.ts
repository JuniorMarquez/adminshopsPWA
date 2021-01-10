import { Component } from '@angular/core';
import { TixsService } from "./services/tixs.service";
import { IpbucketService } from "./services/ipbucket.service";
import { DataApiService } from "./services/data-api.service";
import { ProductInfoService } from "./services/product-info.service";
import { UserWService } from "./services/user-w.service";


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
 	public dataApi:DataApiService){

 }
}
