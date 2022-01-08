import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { PopUpService } from 'src/app/service/pop-up.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private popup: PopUpService,
    private http: HttpService
  ) {}
  courseForm: any;
  ngOnInit(): void {
    var hodDetail:any=localStorage.getItem('hodDetail');
    this.courseForm = this.fb.group({
      courseName: new FormControl('',{validators:[Validators.required]}),
      noOfSubject: new FormControl('', [Validators.required]),
      department: new FormControl(JSON.parse(hodDetail).department , [Validators.required]),
      subjects: new FormArray([]),
    });
  }

  getSubjects(): FormArray {
    return this.courseForm.get('subjects') as FormArray;
  }

  noOfSubject(event: any): void {
    let array = this.courseForm.get('subjects') as FormArray;
    array.controls = [];
    for (var i = 0; i < event.target.value; i++) {
      let new_group = this.fb.group({
        subject: new FormControl('', Validators.required),
        teacherIncharge: new FormControl('', Validators.required),
      });
      array.push(new_group);
    } //for
  }

  addCourse(): void {
    if (this.courseForm.valid) {
      this.http.addCourse(this.courseForm.value).subscribe(
        (x) => {
          if (x.result.acknowledged == true){
            let array = this.courseForm.get('subjects') as FormArray;
            array.controls = [];
          this.courseForm.reset();
            this.popup.openSnackBar(`Course added`);
          }
          else
            this.popup.openSnackBar(
              'oops something went wrong failed to add course'
            );
        },
        (err) => {
          this.popup.openSnackBar('oops something went wrong');
        }
      );
    } else this.popup.openSnackBar('Pleace fill all the fields');
  }
}
