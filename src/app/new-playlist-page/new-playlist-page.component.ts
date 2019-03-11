import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }     from '@angular/router';
import { YoutubeAuthService } from '../youtube-auth.service';

@Component({
  selector: 'app-new-playlist-page',
  templateUrl: './new-playlist-page.component.html',
  styleUrls: ['./new-playlist-page.component.scss']
})
export class NewPlaylistPage implements OnInit {

  constructor(private route: ActivatedRoute, private apiyoutube: YoutubeAuthService, private router: Router) { 
    if (this.apiyoutube.getProfile() == false) {
      this.router.navigate(['']);
      
    }

  }

  ngOnInit() {
  }

}
