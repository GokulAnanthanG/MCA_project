import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHodComponent } from './admin/add-hod/add-hod.component';
import { AddTeacherComponent } from './admin/add-teacher/add-teacher.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ViewHodComponent } from './admin/view-hod/view-hod.component';
import { ViewTeacherComponent } from './admin/view-teacher/view-teacher.component';
import { FofoComponent } from './fofo/fofo.component';
import { AddCourseComponent } from './hod/add-course/add-course.component';
import { HodDashboardComponent } from './hod/hod-dashboard/hod-dashboard.component';
import { HodLoginComponent } from './hod/hod-login/hod-login.component';
import { ViewCourseComponent } from './hod/view-course/view-course.component';
import { LoginComponent } from './login/login.component';
import { DdminAuthGuard } from './serives/ddmin-auth.guard';
import { GenMarkComponent } from './hod/gen-mark/gen-mark.component';  
import { FailPassComponent } from './hod/fail-pass/fail-pass.component';
import { ViewDepTeacherComponent } from './hod/view-dep-teacher/view-dep-teacher.component';
import { TeacherLoginComponent } from './teacher/teacher-login/teacher-login.component';
import { TeacherAuthGuard } from './serives/teacher-auth.guard';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { AddMarkComponent } from './teacher/add-mark/add-mark.component';
import { ViewMarkComponent } from './teacher/view-mark/view-mark.component';
const routes: Routes = [{
  path:"",redirectTo:'/login',pathMatch:'full'
},
{
  path:"login",component:LoginComponent
},
{
  path:"adminLogin",
  component:AdminLoginComponent
},{
  path:"admin",
  component:AdminDashboardComponent,
  children:[{
    path:"addHod",
    component:AddHodComponent
  },
{
  path:"viewHod",
  component:ViewHodComponent
},
{
  path:"addTeacher",
  component:AddTeacherComponent
},
{
  path:"viewTeacher",
  component:ViewTeacherComponent
}
],
  canActivate:[DdminAuthGuard]
},
//hod
{
path:"hodLogin",
component:HodLoginComponent
},
{
path:"hod",
component:HodDashboardComponent,
children:[
{
  path:"addCourse",
  component:AddCourseComponent
},
{
  path:"viewCourse",
  component:ViewCourseComponent
},
{
  path:"genMark",
  component:GenMarkComponent
},{
  path:"passFail",
  component:FailPassComponent
},{
  path:"viewDepTeacher",
  component:ViewDepTeacherComponent
}
]//child routes of hod
},
{
path:'teacherLogin',
component:TeacherLoginComponent,
},
{
path:"teacher",
component:TeacherDashboardComponent,
canActivate:[TeacherAuthGuard],
children:[
  {
    path:"addMark",
    component:AddMarkComponent
  },
  {
    path:"viewMark",
    component:ViewMarkComponent
  }
]
},
{
  path:"**",component:FofoComponent
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
