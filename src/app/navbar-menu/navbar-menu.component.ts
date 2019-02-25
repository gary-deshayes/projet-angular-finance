import { YoutubeAuthService } from './../youtube-auth.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import GoogleUser = gapi.auth2.GoogleUser;
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent implements OnInit {
  private user: GoogleUser;
  private userLogged;

  constructor(private youtubeAuth: YoutubeAuthService, private router: Router, private ngZone: NgZone) {
    
  }
  ngOnInit() {
    this.user = this.youtubeAuth.getUser();
    if(this.user != undefined){
      this.userLogged = true;
    }else {
      this.userLogged = false;
    }
  }



  signin() {
    const response = this.youtubeAuth.signIn();
    response.subscribe((auth: GoogleUser) => {
      auth.signIn()
        .then(res => {
          this.ngZone.run(() => {
            this.youtubeAuth.signInSuccessHandler(res);
            this.user = res;
            if (res != undefined) {
              // localStorage.setItem("googleUser", JSON.stringify(res));
              this.userLogged = true;
            }
          })

        }
          // 
        );
    });

  }

  isLogged() {
    this.user = this.youtubeAuth.getUser();
    return this.youtubeAuth.isSignedIn();
    
  }
  disconnect() {
    this.youtubeAuth.disconnect();
    this.user = undefined;
    this.userLogged = false;
    alertify.notify("Déconnexion réussie", "success", 5);
  }
}
