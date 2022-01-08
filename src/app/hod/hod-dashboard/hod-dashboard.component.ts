import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { PopUpService } from 'src/app/service/pop-up.service';

@Component({
  selector: 'app-hod-dashboard',
  templateUrl: './hod-dashboard.component.html',
  styleUrls: ['./hod-dashboard.component.scss']
})
export class HodDashboardComponent implements OnInit {

  constructor(private popup:PopUpService,private http:HttpService) { }
HOD_DATA:any;
  ngOnInit(): void {
    let sData:any=localStorage.getItem('hodDetail');
     
    this.HOD_DATA=JSON.parse(sData);
     
this.popup.openSnackBar(`welcome HOD ${this.HOD_DATA.name}`);
  }


//logout function
  logOut():void{
 this.http.logOut();
  }


}

