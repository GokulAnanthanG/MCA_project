import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { PopUpService } from 'src/app/service/pop-up.service';

@Component({
  selector: 'app-view-dep-teacher',
  templateUrl: './view-dep-teacher.component.html',
  styleUrls: ['./view-dep-teacher.component.scss']
})
export class ViewDepTeacherComponent implements OnInit {
  constructor(private http:HttpService,private popup:PopUpService,private route:Router) { }
  dataArray:Array<any>=[]
    ngOnInit(): void {
      var hodDetail:any=localStorage.getItem('hodDetail');
      this.http.getTeacherByDepartment({department:JSON.parse(hodDetail).department}).subscribe(x=>{
        this.dataArray=x.result;
       },err=>{
         this.popup.openSnackBar("oops something went wrong");
       })
    }
    
   

}
