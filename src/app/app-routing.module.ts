import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseContentComponent } from './course-content/course-content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InstructorProfileComponent } from './instructor-profile/instructor-profile.component';
import { LoginInstructorComponent } from './login-instructor/login-instructor.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParticularCourseComponent } from './particular-course/particular-course.component';
import { RegisterInstructorComponent } from './register-instructor/register-instructor.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ResetCodeComponent } from './reset-code/reset-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetSuccessfulComponent } from './reset-successful/reset-successful.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '',
    component: HomepageComponent},

  { path: 'homepage',
    component: HomepageComponent},

  { path: 'footer',
    component: FooterComponent},

  { path: 'course-content',
    component: CourseContentComponent},

  { path: 'instructor-profile',
    component: InstructorProfileComponent},

    { path: 'login-instructor',
    component: LoginInstructorComponent},

    { path: 'login-user',
    component: LoginUserComponent},

    { path: 'navbar',
    component: NavbarComponent},
  
    { path: 'particular-course',
    component: ParticularCourseComponent},

  { path: 'register-instructor',
    component: RegisterInstructorComponent},

  { path: 'register-user',
    component: RegisterUserComponent},

  { path: 'reset-password',
    component: ResetPasswordComponent},

  { path: 'super-admin',
    component:SuperAdminComponent},

  { path: 'user-profile',
    component: UserProfileComponent},

  { path: 'reset-code',
    component: ResetCodeComponent},

  { path: 'reset-successful',
    component: ResetSuccessfulComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
