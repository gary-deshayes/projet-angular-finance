import { YoutubeAuthService } from './../youtube-auth.service';
import { Component, OnInit, ComponentRef } from '@angular/core';
import { Router } from '@angular/router';
import GoogleUser = gapi.auth2.GoogleUser;
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { $ } from 'protractor';


@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent implements OnInit {
  private user: GoogleUser;
  private userLogged;

  constructor(private youtubeAuth: YoutubeAuthService, private router: Router) {
    this.user = JSON.parse(localStorage.getItem("googleUser"));
    if (this.user != undefined) {
      this.userLogged = true;
      console.log(this.user);
    } else{
      this.userLogged = false;
    }
  }

  ngOnInit() {



  }



  signin() {
    const response = this.youtubeAuth.signIn();
    response.subscribe((auth: GoogleUser) => {
      auth.signIn()
        .then(res => {
          console.log(res);
          this.youtubeAuth.signInSuccessHandler(res);
          this.user = res;
          if (res != undefined) {
            localStorage.setItem("googleUser", JSON.stringify(res));
            document.getElementById("lien-accueil").click();
          }
        }
          // 
        );
    });

  }

  alertProfile() {
    console.log("Alert Profile", this.youtubeAuth.getProfile());
  }

  isLogged() {
    this.user = this.youtubeAuth.getUser();
    return this.youtubeAuth.isSignedIn();
  }
  disconnect() {
    this.youtubeAuth.disconnect();
  }
}
