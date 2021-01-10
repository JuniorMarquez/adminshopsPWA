import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
   import { UserWService } from "../../services/user-w.service";


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(   
  	public router: Router,
  	private route:ActivatedRoute,
    private location: Location,
      public _uw:UserWService
    ) { }

  ngOnInit() {
    this._uw.selectedQuan=0;
    this._uw.categorySelected="Todos";
  }

}
