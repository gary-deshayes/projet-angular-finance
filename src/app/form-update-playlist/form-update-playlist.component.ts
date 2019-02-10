import { Component, OnInit, Input } from '@angular/core';
import { YoutubeAuthService } from './../youtube-auth.service';

@Component({
  selector: 'app-form-update-playlist',
  templateUrl: './form-update-playlist.component.html',
  styleUrls: ['./form-update-playlist.component.scss']
})
export class FormUpdatePlaylistComponent implements OnInit {
  @Input() playlist: any;
  

  constructor(private youtubeAuth: YoutubeAuthService) { 
    
  }

  ngOnInit() {

    console.log(this.playlist);
  }

}
