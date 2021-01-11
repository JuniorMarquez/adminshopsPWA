import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserWService } from "../../services/user-w.service";
import { DataApiService} from '../../services/data-api.service';
import { PostInterface } from '../../models/post-interface'; 
    
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(
  private dataApi: DataApiService,
	private route:ActivatedRoute,
	private location: Location,
	public _uw:UserWService
  	) { }
    loadAPI = null;
    url = "assets/assetsadmin/scripts/jquery.js";
    url2 = "assets/assetsadmin/scripts/bootstrap.min.js";
    url3 = "assets/assetsadmin/scripts/custom.js";


  public posts:PostInterface;

  ngOnInit() {
    this._uw.routeProducts=false;
    this._uw.routeOrders=false;
    this._uw.routeHome=false;
    this._uw.routeAccount=false;
    this._uw.routeBlog=true;
    this._uw.routeLogin=false;
    this.getAllPosts();
  		if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
            this.loadScript2();
            this.loadScript3();
          });
        }
      this._uw.loaded=true;
  }

    getAllPosts(){
        this.dataApi.getAllPosts().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("no");
       }else{
        this.posts=res;            
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
