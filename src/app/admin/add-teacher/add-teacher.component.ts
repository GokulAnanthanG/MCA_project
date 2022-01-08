import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { PopUpService } from 'src/app/service/pop-up.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {

  constructor(private popup: PopUpService, private http: HttpService) {}
  hodForm: any;
  image: any;
  ngOnInit(): void {
    this.hodForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      qualification: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      cpassword: new FormControl('', [Validators.required]),
    });
  }

  imageSelect(event: any): void {
    this.image = event.target.files[0];
  }

  addHod(): void {
    if (this.hodForm.valid) {
      let formdata = new FormData();
      formdata.append('data', JSON.stringify(this.hodForm.value));
      formdata.append('img', this.image);
     if(this.hodForm.get('password').value===this.hodForm.get('cpassword').value){
      this.http.addTeacher(formdata).subscribe(
        (x) => {
          if (x.result.acknowledged == true) {
            this.popup.openSnackBar('Teacher Added');
            this.hodForm.reset();
          } else {
            this.popup.openSnackBar('oops something went wrong');
          }
        },
        (err) => {
          this.popup.openSnackBar('oops something went wrong');
        }
      ); //sub;
     }
     else{
      this.popup.openSnackBar('Password confirm password must be same');
     }
    } else {
      this.popup.openSnackBar('please enter all the fields');
    }
  }
}
