import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { PopUpService } from 'src/app/service/pop-up.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-gen-mark',
  templateUrl: './gen-mark.component.html',
  styleUrls: ['./gen-mark.component.scss']
})
export class GenMarkComponent implements OnInit {
  fileName= 'marksheet.xlsx';
  searchMarkForm:any
markArray:any={noOfStudents:'',marks:[]};
data:any
failCount:number=0;
passCount:number=0;

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
  
this.markArray.marks.forEach((e:any) => {
  if(e.inSemMark+e.ISAI+e.ISAII+e.submission<40){
this.failCount++;
  }
  else{
    this.passCount++
  }
});//for
console.log("fail pass",this.passCount,this.failCount);

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


    exportexcel(): void
    {
      /* pass here the table id */
      let element = document.getElementById('excel-table');
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
   
      /* generate workbook and add the worksheet */
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   
      /* save to file */  
      this.fileName=`${this.markArray.subject+this.markArray.noOfStudents}.xlsx`
      XLSX.writeFile(wb, this.fileName);
   
    }

}
