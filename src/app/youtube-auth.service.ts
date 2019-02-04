import { Injectable } from '@angular/core';
import { GoogleAuthService, GoogleApiService } from 'ng-gapi';
import GoogleUser = gapi.auth2.GoogleUser;
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeAuthService {
  public static SESSION_STORAGE_KEY: string = 'accessToken';
  private user: GoogleUser;
  apiKey = "AIzaSyCyaZRe4xMnxqPdh9_fwuizP7bKTreyKNc";
  playlists;


  constructor(private googleAuth: GoogleAuthService, private router: Router, private GoogleApi: GoogleApiService) {

  }

  public getToken(): string {
    let token: string = sessionStorage.getItem(YoutubeAuthService.SESSION_STORAGE_KEY);
    if (!token) {
      throw new Error("no token set , authentication required");
    }
    return sessionStorage.getItem(YoutubeAuthService.SESSION_STORAGE_KEY);
  }

  public signIn(): void {
    this.googleAuth.getAuth()
      .subscribe((auth) => {
        auth.signIn()
          .then(
            res => this.signInSuccessHandler(res, this.router.url)
          );
      });

  }

  private signInSuccessHandler(res: GoogleUser, redirectUrl: string) {
    this.user = res;
    sessionStorage.setItem(
      YoutubeAuthService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
    );
  }

  public getProfile() {
    return this.user.getBasicProfile();
  }

  public getUser() {
    return this.user;
  }

  public disconnect() {
    this.user.disconnect();
    YoutubeAuthService.SESSION_STORAGE_KEY = 'accessToken';
  }

  public isSignedIn() {
    if (this.user != undefined) {
      return this.user.isSignedIn();
    } else {
      return false;
    }

  }

  public getPlaylists(): Observable<void> {
    console.log("loading gapi...");
    // On charge la librairie google
    return this.GoogleApi.onLoad();
    
  }

  



}
