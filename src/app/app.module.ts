import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { TimeAgoPipe } from './time-ago.pipe';
import { UserDirective } from './user.directive';
import { Routes } from '@angular/router';
import { ProfileService } from './profile.service';
const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: '', redirectTo: '/user', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    UserComponent,
    TimeAgoPipe,
    UserDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
