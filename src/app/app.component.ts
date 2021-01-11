import { Component } from '@angular/core';
import { TixsService } from "./services/tixs.service";
import { IpbucketService } from "./services/ipbucket.service";
import { DataApiService } from "./services/data-api.service";
import { ProductInfoService } from "./services/product-info.service";
import { UserWService } from "./services/user-w.service";
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
	


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
	private location: Location,
	){

 }
}
