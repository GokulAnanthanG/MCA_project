import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { HttpService } from 'src/app/service/http.service';
import { PopUpService } from 'src/app/service/pop-up.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss']
})
export class TeacherLoginComponent implements OnInit {

  constructor(private httpService:HttpService,private pop_up:PopUpService,private router:Router,private data:DataService) { }
  loginForm:any;

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      "userName":new FormControl('',[Validators.required]),
      "password":new FormControl('',[Validators.required]),
    })
  }

  
  formSubmit():void{//checking is the user is valid user or not
    if(this.loginForm.valid){
      this.httpService.teacherLogin(this.loginForm.value).subscribe(x=>{
        
        //
if(x.result===null){
  this.pop_up.openSnackBar('Enter The Valid User Detail')
}
else{
localStorage.setItem('teacherDetail',JSON.stringify(x.result));
  localStorage.setItem('pro_loginStatus','true');
  localStorage.setItem('pro_user','teacher');
  this.router.navigateByUrl('/teacher');
}
        //
        
      },err=>{
        this.pop_up.openSnackBar('oops something went wrong')
      })
    }
    else{
      this.pop_up.openSnackBar("Invalid User Detail")
    }
  }


}
