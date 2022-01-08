import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
//importing agular material
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatCardModule} from '@angular/material/card';
import{MatButtonModule} from '@angular/material/button';
import{MatTooltipModule} from '@angular/material/tooltip';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import{MatIconModule} from '@angular/material/icon';
import{MatDividerModule} from '@angular/material/divider';
import{MatDialogModule} from '@angular/material/dialog';
import{MatAutocompleteModule} from '@angular/material/autocomplete';

//
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './service/http.service';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { FofoComponent } from './fofo/fofo.component';
import { AddHodComponent } from './admin/add-hod/add-hod.component';
import { ViewHodComponent } from './admin/view-hod/view-hod.component';
import { AddTeacherComponent } from './admin/add-teacher/add-teacher.component';
import { ViewTeacherComponent } from './admin/view-teacher/view-teacher.component';
import { HodLoginComponent } from './hod/hod-login/hod-login.component';
import { HodDashboardComponent } from './hod/hod-dashboard/hod-dashboard.component';
import { DataService } from './service/data.service';
import { AddCourseComponent } from './hod/add-course/add-course.component';
import { ViewCourseComponent } from './hod/view-course/view-course.component';
import { GenMarkComponent } from './hod/gen-mark/gen-mark.component';
import { FailPassComponent } from './hod/fail-pass/fail-pass.component';
import { ViewDepTeacherComponent } from './hod/view-dep-teacher/view-dep-teacher.component';
import { TeacherLoginComponent } from './teacher/teacher-login/teacher-login.component';
import { AddMarkComponent } from './teacher/add-mark/add-mark.component';
import { ViewMarkComponent } from './teacher/view-mark/view-mark.component';
import { NotificationComponent } from './teacher/notification/notification.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { AnnouncementComponent } from './dialog/announcement/announcement.component';

 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    FofoComponent,
    AddHodComponent,
    ViewHodComponent,
    AddTeacherComponent,
    ViewTeacherComponent,
    HodLoginComponent,
    HodDashboardComponent,
    AddCourseComponent,
    ViewCourseComponent,
    GenMarkComponent,
    FailPassComponent,
    ViewDepTeacherComponent,
    TeacherLoginComponent,
    AddMarkComponent,
    ViewMarkComponent,
    NotificationComponent,
    TeacherDashboardComponent,
    AnnouncementComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //material
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatAutocompleteModule
  ],
  providers: [HttpService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
