import { Injectable } from '@angular/core';
import { Playlist } from '../models/playlist.model';
import { Song } from '../models/song.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private playlists: Playlist[] = [];
  private nextId = 1;

  getPlaylists(): Playlist[] {
    return this.playlists;
  }

  createPlaylist(name: string): void {
    if (!name.trim()) return;

    this.playlists.push({
      id: this.nextId++,
      name,
      songs: []
    });
  }

  addSongToPlaylist(playlist: Playlist, song: Song): void {
    if (!playlist.songs.find(s => s.id === song.id)) {
      playlist.songs.push(song);
    }
  }

  removeSongFromPlaylist(playlist: Playlist, song: Song): void {
    playlist.songs = playlist.songs.filter(s => s.id !== song.id);
  }
}
