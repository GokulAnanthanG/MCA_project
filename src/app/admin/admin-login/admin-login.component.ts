import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { PopUpService } from 'src/app/service/pop-up.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private httpService:HttpService,private pop_up:PopUpService,private router:Router) { }
  loginForm:any;

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      "userName":new FormControl('',[Validators.required]),
      "password":new FormControl('',[Validators.required]),
    })
  }

  
  formSubmit():void{//checking is the user is valid user or not
    if(this.loginForm.valid){
      this.httpService.login(this.loginForm.value).subscribe(x=>{
        
        //
if(x.result===null){
  this.pop_up.openSnackBar('Enter The Valid User Detail')
}
else{
  localStorage.setItem('pro_loginStatus','true');
  localStorage.setItem('pro_user','admin');
  this.router.navigateByUrl('/admin')
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
