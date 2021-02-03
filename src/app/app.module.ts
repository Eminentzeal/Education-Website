import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InstructorProfileComponent } from './instructor-profile/instructor-profile.component';
import { LoginInstructorComponent } from './login-instructor/login-instructor.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ParticularCourseComponent } from './particular-course/particular-course.component';
import { RegisterInstructorComponent } from './register-instructor/register-instructor.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResetCodeComponent } from './reset-code/reset-code.component';
import { ResetSuccessfulComponent } from './reset-successful/reset-successful.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CourseContentComponent,
    FooterComponent,
    HomeComponent,
    InstructorProfileComponent,
    LoginInstructorComponent,
    LoginUserComponent,
    ParticularCourseComponent,
    RegisterInstructorComponent,
    RegisterUserComponent,
    ResetPasswordComponent,
    SuperAdminComponent,
    UserProfileComponent,
    NavbarComponent,
    ResetCodeComponent,
    ResetSuccessfulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
