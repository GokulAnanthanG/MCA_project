import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor(private snackBar:MatSnackBar) { }

openSnackBar(message:string):void{
this.snackBar.open(message,'X',{duration:2000});
}

}
