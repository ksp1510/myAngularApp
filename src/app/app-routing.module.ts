import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { LoginComponent } from './login/login.component';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { ProfileComponent } from './profile/profile.component';
import { RecentAlbumsComponent } from './recent-albums/recent-albums.component';
import { UploadPicturesComponent } from './upload-pictures/upload-pictures.component';

const routes: Routes = [
  {path:'profile/:profileId', component: ProfileComponent},
  {path:'login', component: LoginComponent},
  {path:'album/me', component: MyAlbumsComponent},
  {path:'create', component: CreateAlbumComponent},
  {path:'album/:albumId', component: AlbumDetailsComponent},
  {path:'upload/:albumId', component: UploadPicturesComponent},
  {path:'photo/:photoId', component: PhotoDetailsComponent},
  {path:'albums/recent', component: RecentAlbumsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
