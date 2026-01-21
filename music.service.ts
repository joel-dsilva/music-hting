import { Injectable } from '@angular/core';
import { Song } from '../models/song.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private songs: Song[] = [
    {
      id: 1,
      title: 'Dash',
      artist: 'alanajordan',
      audioUrl: 'assets/audio/dash.mp3',
      isFavorite: false
    },
    {
      id: 2,
      title: 'Honey Kisses',
      artist: 'DeltaX Music',
      audioUrl: 'assets/audio/honey_kisses.mp3',
      isFavorite: false
    },
    {
      id: 3,
      title: 'The Last Point',
      artist: 'raspberrymusic',
      audioUrl: 'assets/audio/lastpoint_elec.mp3',
      isFavorite: false
    },
    {
      id: 4,
      title: 'Sweet Life Luxury Chill',
      artist: 'Alex Grohl',
      audioUrl: 'assets/audio/sweetlife_luxurychill.mp3',
      isFavorite: false
    }
  ];

  getSongs(): Song[] {
    return this.songs;
  }

  toggleFavorite(song: Song): void {
    song.isFavorite = !song.isFavorite;
  }
}
