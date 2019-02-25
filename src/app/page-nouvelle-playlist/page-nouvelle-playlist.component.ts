import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }     from '@angular/router';
import { YoutubeAuthService } from './../youtube-auth.service';

@Component({
  selector: 'app-page-nouvelle-playlist',
  templateUrl: './page-nouvelle-playlist.component.html',
  styleUrls: ['./page-nouvelle-playlist.component.scss']
})
export class PageNouvellePlaylistComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiyoutube: YoutubeAuthService, private router: Router) { 
    if (this.apiyoutube.getProfile() == false) {
      this.router.navigate(['']);
      
    }

  }

  ngOnInit() {
  }

}
