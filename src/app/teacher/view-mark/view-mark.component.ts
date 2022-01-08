import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { PopUpService } from 'src/app/service/pop-up.service';

@Component({
  selector: 'app-view-mark',
  templateUrl: './view-mark.component.html',
  styleUrls: ['./view-mark.component.scss']
})
export class ViewMarkComponent implements OnInit {
searchMarkForm:any
markArray:any={noOfStudents:'',marks:[]};
data:any
  constructor(private fb:FormBuilder,private http:HttpService,private pop:PopUpService,private route:Router) { }

  ngOnInit(): void {
    this.searchMarkForm=this.fb.group({
      "course":new FormControl('',Validators.required),
      "batch":new FormControl('',Validators.required),
      "subject":new FormControl('',Validators.required)
    })
  }
  search():void{
this.http.getMark(this.searchMarkForm.value).subscribe(x=>{
  console.log(x);
  this.data=x.result
  this.markArray=x.result
  console.log(this.markArray);
  
},err=>{
  this.pop.openSnackBar("failed to fetch mark");
})
  }


  deleteMark(id:any):void{
    if(confirm("Are You Sure ?")){
      this.http.deleteMark({id:id}).subscribe(x=>{
         
        if(x.result.deletedCount==1){
          this.pop.openSnackBar("Mark list deleted");
          this.route.navigateByUrl('/teacher')
        }
        else{
          this.pop.openSnackBar("oops something went wrong");
        }
        
      },err=>{
        console.log(err);
        this.pop.openSnackBar("oops something went wrong");
      })
    }  }

}
