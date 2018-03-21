import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SessionService } from "./services/session.service";
import { AlbumService } from "./services/album.service";


import { AppComponent } from './app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from './my-private-page/my-private-page.component';

import { routes } from './routes/app.routing'
import { RouterModule } from '@angular/router';
import { materialize } from 'rxjs/operators/materialize';

import { FileSelectDirective } from 'ng2-file-upload';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BookAServiceComponent } from './book-a-service/book-a-service.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    MyPrivatePageComponent,
    FileSelectDirective,
    AddPhotoComponent,
    AddAlbumComponent,
    AboutMeComponent,
    BookAServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterializeModule,
  ],
  providers: [SessionService, AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
