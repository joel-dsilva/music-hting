import { Component } from '@angular/core';
import { PlaylistService } from '../../core/services/playlist.service';
import { MusicService } from '../../core/services/music.service';
import { Playlist } from '../../core/models/playlist.model';
import { Song } from '../../core/models/song.model';

@Component({
  selector: 'app-playlist-manager',
  standalone: true,
  templateUrl: './playlist-manager.component.html',
  styleUrls: ['./playlist-manager.component.css']
})
export class PlaylistManagerComponent {

  playlists: Playlist[] = [];
  songs: Song[] = [];
  newPlaylistName = '';
  expandedPlaylistId: number | null = null;

  constructor(
    private playlistService: PlaylistService,
    private musicService: MusicService
  ) {
    this.playlists = this.playlistService.getPlaylists();
    this.songs = this.musicService.getSongs();
  }

  createPlaylist() {
    if (!this.newPlaylistName.trim()) return;
    this.playlistService.createPlaylist(this.newPlaylistName);
    this.newPlaylistName = '';
  }

  togglePlaylist(id: number) {
    this.expandedPlaylistId =
      this.expandedPlaylistId === id ? null : id;
  }

  addSong(playlist: Playlist, song: Song) {
  this.playlistService.addSongToPlaylist(playlist, song);
}

  removeSong(playlist: Playlist, song: Song) {
  this.playlistService.removeSongFromPlaylist(playlist, song);
}


  /** ⭐ KEY FIX */
  availableSongs(playlist: Playlist): Song[] {
    return this.songs.filter(
      s => !playlist.songs.some(ps => ps.id === s.id)
    );
  }
}
