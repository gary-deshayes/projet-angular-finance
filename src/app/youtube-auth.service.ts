import { Injectable } from '@angular/core';
import { GoogleAuthService, GoogleApiService } from 'ng-gapi';
import GoogleUser = gapi.auth2.GoogleUser;
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeAuthService {
  public static SESSION_STORAGE_KEY: string = 'accessToken';
  private user: GoogleUser;
  apiKey = "AIzaSyCyaZRe4xMnxqPdh9_fwuizP7bKTreyKNc";
  playlists;
  videosPlaylists;


  constructor(private googleAuth: GoogleAuthService, private router: Router, private GoogleApi: GoogleApiService, private http: HttpClient) {

  }

  public getToken(): string {
    let token: string = sessionStorage.getItem(YoutubeAuthService.SESSION_STORAGE_KEY);
    if (!token) {
      throw new Error("no token set , authentication required");
    }
    return sessionStorage.getItem(YoutubeAuthService.SESSION_STORAGE_KEY);
  }

  public signIn(): Observable<object> {
    return this.googleAuth.getAuth();
  }

  public signInSuccessHandler(res: GoogleUser) {
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
    console.log("Déconnexion");
    document.getElementById("lien-accueil").click();
    document.getElementById("lien-accueil").click();
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

  public getVideosPlaylists(idPlaylists: string){
      return this.http.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=" + idPlaylists + "&key=" + this.apiKey);
        
  }

  public deleteVideoPlaylist(): Observable<void> {
    console.log("loading gapi delete...");
    // On charge la librairie google
    return this.GoogleApi.onLoad();
    
  }

  

  



}
