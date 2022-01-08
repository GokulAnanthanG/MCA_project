import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { PopUpService } from 'src/app/service/pop-up.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private popup:PopUpService,private http:HttpService) { }

  ngOnInit(): void {
this.popup.openSnackBar("welcome Admin");
  }
//logout function
  logOut():void{
 this.http.logOut();
  }

}
