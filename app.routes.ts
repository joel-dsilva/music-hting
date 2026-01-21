import { Routes } from '@angular/router';
import { SongListComponent } from './components/song-list/song-list.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { PlaylistManagerComponent } from './components/playlist-manager/playlist-manager.component';

export const routes: Routes = [
  { path: '', component: SongListComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'playlists', component: PlaylistManagerComponent }
];
