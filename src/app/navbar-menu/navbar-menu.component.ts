import { YoutubeAuthService } from './../youtube-auth.service';
import { Component, OnInit, ComponentRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent implements OnInit {
  infosUser: any;

  constructor(private youtubeAuth: YoutubeAuthService, private router: Router) { }

  ngOnInit() {
  }

  signin(){
    this.youtubeAuth.signIn();
    
  }

  alertToken(){
    this.youtubeAuth.getPlaylists();
  }

  alertProfile(){
    console.log("Alert Profile",this.youtubeAuth.getProfile());
  }

  isLogged(){
    this.infosUser = this.youtubeAuth.getUser();
    return this.youtubeAuth.isSignedIn();
  }
  disconnect(){
    this.youtubeAuth.disconnect();
  }
}
