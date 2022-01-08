import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { PopUpService } from 'src/app/service/pop-up.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  constructor(private http:HttpService,private pop:PopUpService) { }
anArray:any=[];
teacher:any
  ngOnInit(): void {
    var teacherDetail:any=localStorage.getItem("teacherDetail");
      this.teacher=JSON.parse(teacherDetail);
    this.http.getCourse({department:JSON.parse(teacherDetail).department}).subscribe(x=>{
      console.log(x);
      var data=x.result
      data.forEach((e:any)=> {
         e.subjects.forEach((e:any) => {
           console.log(e);
           
           if(e.teacherIncharge==JSON.parse(teacherDetail).name){
this.anArray.push(e)
           }
         });//inner for
      });//foreach
    },err=>{
this.pop.openSnackBar("oops something went wrong");
    })
 

  }

}
