import { Injectable } from '@angular/core';
import { Artist } from '../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private artists: Artist[] = [
    {
      id: 1,
      name: 'alanajordan',
      genre: 'Chill / Ambient',
      bio:
        'alanajordan is an independent ambient music artist known for smooth textures and calming soundscapes.',
      imageUrl: 'assets/image/alanajordan.jpg'
    },
    {
      id: 2,
      name: 'DeltaX Music',
      genre: 'Electronic / Experimental',
      bio:
        'DeltaX Music explores futuristic electronic sounds with layered beats and bold transitions.',
      imageUrl: 'assets/image/deltaXMusic.jpg'
    },
    {
      id: 3,
      name: 'raspberrymusic',
      genre: 'Indie / Lo-Fi',
      bio:
        'raspberrymusic creates warm lo-fi inspired tracks emphasizing mood and simplicity.',
      imageUrl: 'assets/image/raspberrymusic.jpg'
    },
    {
      id: 4,
      name: 'Alex Grohl',
      genre: 'Chill Rock',
      bio:
        'Alex Grohl blends modern rock elements with smooth rhythms and expressive guitar tones.',
      imageUrl: 'assets/image/alex.jpg'
    }
  ];

  getArtists(): Artist[] {
    return this.artists;
  }
}
