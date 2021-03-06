import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-api-youtube',
  templateUrl: './api-youtube.component.html',
  styleUrls: ['./api-youtube.component.scss']
})
export class ApiYoutubeComponent implements OnInit {

  @Input() searchVideo: string;

  apiKey = "AIzaSyCyaZRe4xMnxqPdh9_fwuizP7bKTreyKNc";

  public videos = [];
  nextPage = "";
  prevPage = "";
  search = "";
  dangerousVideoUrl = "";
  loading = true;
  error = false;
  errorStatus;

  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { 
    
  }

  ngOnInit() {
    // S'il y a un parametre de création de composant
    if(this.searchVideo !== null){
      // on cherche les vidéos du sujet et ensuite on assigne la recherche au thème du parametre
      this.getVideos(this.searchVideo);
      this.search = this.searchVideo;
    }
  }

  public getVideos(varSearch: string){
    this.loading = true;
    this.error = false;
    varSearch = varSearch.replace(" ", "%7C");
    this.search = varSearch;
    this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + varSearch + "&type=video&videoCaption=any&key=AIzaSyCyaZRe4xMnxqPdh9_fwuizP7bKTreyKNc&maxResults=9")
      .subscribe((response: Array<Object>) => {
        this.videos = response["items"];
        this.nextPage = response["nextPageToken"];
        this.videos.forEach(element => {
          this.dangerousVideoUrl = 'http://www.youtube.com/embed/' + element["id"]["videoId"] + '?enablejsapi=1&origin=http://example.com&rel=1';
          element['urlSecure'] = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
          this.loading = false;
        });
      },
      (error)=>{
        alertify.notify("Erreur lors du chargement des vidéos youtube, veuillez réessayer plus tard", "error", 10);
        this.error = true;
        this.errorStatus = error.status;
      });
  }
  getVideosNext(){
    this.loading = true;
    this.error = false;
    this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + this.search + "&type=video&videoCaption=any&key=AIzaSyCyaZRe4xMnxqPdh9_fwuizP7bKTreyKNc&maxResults=6&pageToken=" + this.nextPage)
      .subscribe((response: Array<Object>) => {
        this.videos = response["items"];
        this.nextPage = response["nextPageToken"];
        this.prevPage = response["prevPageToken"];
        this.videos.forEach(element => {
          this.dangerousVideoUrl = 'http://www.youtube.com/embed/' + element["id"]["videoId"] + '?enablejsapi=1&origin=http://example.com';
          element['urlSecure'] = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
          this.loading = false;
        });
      },
      (error)=>{
        alertify.notify("Erreur lors du chargement des vidéos youtube, veuillez réessayer plus tard", "error", 10);
        this.error = true;
        this.errorStatus = error.status;
      });
  }
  getVideosPrev(){
    this.loading = true;
    this.error = false;
    this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + this.search + "&type=video&videoCaption=any&key=AIzaSyCyaZRe4xMnxqPdh9_fwuizP7bKTreyKNc&maxResults=6&pageToken=" + this.prevPage)
      .subscribe((response: Array<Object>) => {
        this.videos = response["items"];
        this.nextPage = response["nextPageToken"];
        this.prevPage = response["prevPageToken"];
        this.videos.forEach(element => {
          this.dangerousVideoUrl = 'http://www.youtube.com/embed/' + element["id"]["videoId"] + '?enablejsapi=1&origin=http://example.com';
          element['urlSecure'] = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
          this.loading = false;
        });
      },
      (error)=>{
        alertify.notify("Erreur lors du chargement des vidéos youtube, veuillez réessayer plus tard", "error", 10);
        this.error = true;
        this.errorStatus = error.status;
      });
  }

}
