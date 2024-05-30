import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardEmployeeComponent } from './components/card-employee/card-employee.component';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeesComponent } from './features/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    CardEmployeeComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
