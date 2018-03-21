import { Routes } from '@angular/router';
import {AddPhotoComponent} from 'app/add-photo/add-photo.component';
import {AddAlbumComponent} from 'app/add-album/add-album.component';
import { CalendarModule } from 'angular-calendar';


import { AppComponent } from '../app.component';
import { AuthLoginComponent } from '../auth-login/auth-login.component';
import { AuthSignupComponent } from '../auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from '../my-private-page/my-private-page.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { BookAServiceComponent } from '../book-a-service/book-a-service.component';

export const routes: Routes = [
    { path: 'login' , component: AuthLoginComponent},
    { path: 'signup' , component: AuthSignupComponent},
    { path: 'private', component: MyPrivatePageComponent},
    { path: 'addAlbum', component: AddAlbumComponent },
    { path: 'add-photos/:idAlbum', component: AddPhotoComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'book-a-service', component: BookAServiceComponent },
    { path: '**', redirectTo: '' }
];

