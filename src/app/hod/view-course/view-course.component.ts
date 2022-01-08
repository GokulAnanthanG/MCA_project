import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { PopUpService } from 'src/app/service/pop-up.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {
  HOD_DATA:any
  courseArray:any
  constructor(private http:HttpService,private popup:PopUpService,private route:Router ) { }

  ngOnInit(): void {
    let sData:any=localStorage.getItem('hodDetail');
    this.HOD_DATA=JSON.parse(sData);
this.http.getCourse({department:this.HOD_DATA.department}).subscribe(x=>{
this.courseArray=x.result;
},err=>{
this.popup.openSnackBar("oops something went wrong failed to fetch courses");
})
  }

  deleteCourse(id:any):void{
 if(confirm("Are You Sure ?")){
  this.http.deleteCourse({id:id}).subscribe(x=>{
     
    if(x.result.deletedCount==1){
      this.popup.openSnackBar("Course deleted");
      this.route.navigateByUrl('/hod')
    }
    else{
      this.popup.openSnackBar("oops something went wrong");
    }
    
  },err=>{
    console.log(err);
    this.popup.openSnackBar("oops something went wrong");
  })
}
 }


}
