import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { PopUpService } from 'src/app/service/pop-up.service';

@Component({
  selector: 'app-add-mark',
  templateUrl: './add-mark.component.html',
  styleUrls: ['./add-mark.component.scss']
})
export class AddMarkComponent implements OnInit {

  constructor(private http:HttpService,private pop:PopUpService,private fb:FormBuilder) { }
  course:any=[];
  courseForm:any;
teacherDetail:any;
anArray:any=[];
teacher:any
  ngOnInit(): void {
    let data:any=localStorage.getItem("teacherDetail");
    this.teacherDetail=JSON.parse(data);
     this.http.getCourse({department:this.teacherDetail.department}).subscribe(x=>{
       
 x.result.forEach((e:any) => {
  this.course.push(e.courseName)
});
 console.log(this.course);
 
    })


////
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
 
//form


this.courseForm = this.fb.group({
  courseName: new FormControl('',{validators:[Validators.required]}),
  subject: new FormControl('', [Validators.required]),
    batch: new FormControl('', [Validators.required]),
    noOfStudents: new FormControl('', [Validators.required]),
  department: new FormControl(JSON.parse(teacherDetail).department , [Validators.required]),
  marks: new FormArray([]),
});
}

noOfSubject(event:any){
  let array = this.courseForm.get('marks') as FormArray;
    array.controls = [];
    for (var i = 0; i < event.target.value; i++) {
      let new_group = this.fb.group({
        regNo: new FormControl('', Validators.required),
        inSemMark: new FormControl('', Validators.required),
        ISAI: new FormControl('', Validators.required),
        ISAII: new FormControl('', Validators.required),
        submission: new FormControl('', Validators.required),
      });
      array.push(new_group);
    } //for
}

addCourse():void{
  if(this.courseForm.valid){
    this.http.addMark(this.courseForm.value).subscribe(
      (x) => {
        if (x.result.acknowledged == true){
          let array = this.courseForm.get('marks') as FormArray;
          array.controls = [];
        this.courseForm.reset();
          this.pop.openSnackBar(`Mark added`);
        }
        else
          this.pop.openSnackBar(
            'oops something went wrong failed to add mark'
          );
      },
      (err) => {
        this.pop.openSnackBar('oops something went wrong');
      }
    );
  }
  else
  this.pop.openSnackBar("Pleace fill all the fields");
}

}
