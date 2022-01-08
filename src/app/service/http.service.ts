import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient,private route:Router) { }

login(data:object):Observable<any>{
   return this.http.post('http://localhost:4000/admin/login',data);
}   
 

addHod(data:FormData):Observable<any>{
  return this.http.post("http://localhost:4000/admin/addHod",data)
}


getHod(data:object):Observable<any>{
  return this.http.post('http://localhost:4000/admin/getHod',data);
}


deleteHod(data:object):Observable<any>{
  return this.http.post('http://localhost:4000/admin/deleteHod',data);
}

addTeacher(data:FormData):Observable<any>{
  return this.http.post("http://localhost:4000/admin/addTeacher",data)
}

getTeacher(data:object):Observable<any>{
  return this.http.post('http://localhost:4000/admin/getTeacher',data);
}

deleteTeacher(data:object):Observable<any>{
  return this.http.post('http://localhost:4000/admin/deleteTeacher',data);
}


//hod

hodLogin(data:object):Observable<any>{
  return this.http.post('http://localhost:4000/hod/login',data);
} 

addCourse(data:object):Observable<any>{
  return this.http.post('http://localhost:4000/hod/addCourse',data);
}

getCourse(data:object):Observable<any>{
  return this.http.post('http://localhost:4000/hod/getCourse',data);
}

deleteCourse(data:object):Observable<any>{
  return this.http.post('http://localhost:4000/hod/deleteCourse',data);
}

getTeacherByDepartment(data:object):Observable<any>{
  return this.http.post('http://localhost:4000/hod/getTeacher',data);
}
//teacher
teacherLogin(data:object):Observable<any>{
  return this.http.post('http://localhost:4000/teacher/login',data);
} 
//addMark

addMark(data:object):Observable<any>{
  return this.http.post('http://localhost:4000/teacher/addMark',data);
}

getMark(data:object):Observable<any>{
  return this.http.post('http://localhost:4000/teacher/getMark',data);
}
deleteMark(data:object):Observable<any>{
  return this.http.post('http://localhost:4000/teacher/deleteMark',data);
}



logOut():void{
 if( confirm("Are You Sure ?")){
 localStorage.clear();
 this.route.navigateByUrl('/login')
 }
}

}
