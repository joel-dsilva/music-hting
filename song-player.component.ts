import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AudioService } from '../../core/services/audio.service';
import { MusicService } from '../../core/services/music.service';

@Component({
  selector: 'app-song-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song-player.component.html',
  styleUrls: ['./song-player.component.css']
})
export class SongPlayerComponent {

  isPlaying = false;
  volume = 100;
  private subs: Subscription | null = null;
  private trackSub: Subscription | null = null;

  currentTitle: string | null = null;
  currentArtist: string | null = null;

  constructor(
    private audioService: AudioService,
    private musicService: MusicService
  ) {}

  ngOnInit(): void {
    this.subs = this.audioService.playing$.subscribe((p) => {
      this.isPlaying = p;
    });

    this.trackSub = this.audioService.currentTrack$.subscribe((url) => {
      if (!url) {
        this.currentTitle = null;
        this.currentArtist = null;
        return;
      }

      // Normalize URL to a path (e.g. '/assets/audio/foo.mp3') and compare
      let path: string;
      try {
        const u = new URL(url, location.origin);
        path = u.pathname; // starts with '/'
      } catch (e) {
        path = url;
      }

      const pathNoSlash = path.replace(/^\//, '');
      const songs = this.musicService.getSongs();
      const match = songs.find((s) => s.audioUrl === path || s.audioUrl === pathNoSlash);
      if (match) {
        this.currentTitle = match.title;
        this.currentArtist = match.artist;
      } else {
        const parts = path.split('/');
        this.currentTitle = parts[parts.length - 1] || path;
        this.currentArtist = '';
      }
    });
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
    this.trackSub?.unsubscribe();
  }

  play() {
    // If there's a current track, resume; otherwise no-op
    this.audioService.resume();
  }

  pause() {
    this.audioService.pause();
  }

  onVolumeChange(value: number | string): void {
    const v = typeof value === 'string' ? parseInt(value, 10) : value;
    this.volume = Math.max(0, Math.min(100, v));
    this.audioService.setVolume(this.volume / 100);
  }
}
