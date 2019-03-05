import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { IndexComponent } from './components/index/index.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatRippleModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { TempComponent } from './components/temp/temp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginDialogComponent,
    IndexComponent,
    HomeComponent,
    ProfileComponent,
    CompaniesListComponent,
    CompanyDetailComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatRippleModule,
    MatInputModule,
    MatCardModule
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
