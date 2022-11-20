import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { LoginComponent } from './login/login.component';
import { RecentAlbumsComponent } from './recent-albums/recent-albums.component';
import { UploadPicturesComponent } from './upload-pictures/upload-pictures.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MyAlbumsComponent,
    AlbumDetailsComponent,
    CreateAlbumComponent,
    LoginComponent,
    RecentAlbumsComponent,
    UploadPicturesComponent,
    PhotoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
