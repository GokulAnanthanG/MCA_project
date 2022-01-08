import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { PopUpService } from 'src/app/service/pop-up.service';

@Component({
  selector: 'app-view-hod',
  templateUrl: './view-hod.component.html',
  styleUrls: ['./view-hod.component.scss']
})
export class ViewHodComponent implements OnInit {

  constructor(private http:HttpService,private popup:PopUpService,private route:Router) { }
dataArray:Array<any>=[]
  ngOnInit(): void {
  }
  search(event:any):void{
console.log(event.target.value);
this.http.getHod({name:event.target.value}).subscribe(x=>{
 this.dataArray=x.result;
},err=>{
  this.popup.openSnackBar("oops something went wrong");
})
}

delete(id:any):void{
if(confirm("Are You Sure ?")){
  this.http.deleteHod({id:id}).subscribe(x=>{
    if(x.result.deletedCount==1){
      this.popup.openSnackBar("record deleted");
      this.route.navigateByUrl("admin")
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
