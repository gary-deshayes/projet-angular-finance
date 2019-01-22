import { Injectable } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import GoogleUser = gapi.auth2.GoogleUser;

@Injectable({
  providedIn: 'root'
})
export class YoutubeAuthService {
  public static SESSION_STORAGE_KEY: string = 'accessToken';
  private user: GoogleUser;
  

  constructor(private googleAuth: GoogleAuthService) {
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
          res => this.signInSuccessHandler(res)
          );
      });
    
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.user = res;
    sessionStorage.setItem(
      YoutubeAuthService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
    );
    console.log("signIn", this.isSignedIn());
  }

  public getProfile(){
    return this.user.getBasicProfile();
  }

  public disconnect(){
    this.user.disconnect();
    YoutubeAuthService.SESSION_STORAGE_KEY ='accessToken';
  }

  public isSignedIn(){
    if(this.user != undefined){
      return this.user.isSignedIn();
    }else{
      return false;
    }
    
  }
  
  
}
