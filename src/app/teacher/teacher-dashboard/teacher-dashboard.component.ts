import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnnouncementComponent } from 'src/app/dialog/announcement/announcement.component';
import { HttpService } from 'src/app/service/http.service';
import { PopUpService } from 'src/app/service/pop-up.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {

  constructor(private popup:PopUpService,private http:HttpService,private dialog:MatDialog) { }
  TEACHER_DATA:any;
    ngOnInit(): void {
      let sData:any=localStorage.getItem('teacherDetail');
       
      this.TEACHER_DATA=JSON.parse(sData);
       
  this.popup.openSnackBar(`welcome  ${this.TEACHER_DATA.name}`);
    }
  
  
  //logout function
    logOut():void{
   this.http.logOut();
    }
  
    announcement():void{
      this.dialog.open(AnnouncementComponent);
     }

}
