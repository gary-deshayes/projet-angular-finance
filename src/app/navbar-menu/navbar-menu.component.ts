import { YoutubeAuthService } from './../youtube-auth.service';
import { Component, OnInit, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent implements OnInit {
  infosUser: any;

  constructor(private youtubeAuth: YoutubeAuthService) { }

  ngOnInit() {
  }

  signin(){
    this.youtubeAuth.signIn();
    
  }

  alertToken(){
    console.log("Alert Token",this.youtubeAuth.getToken());
  }

  alertProfile(){
    console.log("Alert Profile",this.youtubeAuth.getProfile());
  }

  isLogged(){
    var bool = this.youtubeAuth.isSignedIn();
    if(bool){
      this.infosUser = this.youtubeAuth.getProfile();
      console.log("isLogged",this.infosUser);
      return true;
    }else{
      return false;
    }
  }
  disconnect(){
    this.youtubeAuth.disconnect();
  }
}
