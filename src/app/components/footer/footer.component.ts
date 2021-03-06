import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
   import { UserWService } from "../../services/user-w.service";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    	public router: Router,
  	private route:ActivatedRoute,
    private location: Location,

	public _uw:UserWService
    ) { }

  ngOnInit() {
  }

}
