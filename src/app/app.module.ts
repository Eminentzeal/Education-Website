import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
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
import { ResetCodeComponent } from './reset-code/reset-code.component';
import { ResetSuccessfulComponent } from './reset-successful/reset-successful.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';import {MatCardModule} from '@angular/material/card';
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
    ResetCodeComponent,
    ResetSuccessfulComponent,
    HomepageComponent,
    MainNavComponent,
  ],

  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
