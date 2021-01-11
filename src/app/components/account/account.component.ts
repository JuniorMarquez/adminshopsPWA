import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
  	public _uw:UserWService
  	) { }

  ngOnInit() {
  	this._uw.routeProducts=false;
    this._uw.routeOrders=false;
    this._uw.routeHome=false;
    this._uw.routeAccount=true;
    this._uw.routeBlog=false;
    this._uw.routeLogin=false;
  }

}
