import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

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

  getVideos(search: string){
    search = search.replace(" ", "%7C");
    this.search = search;
    this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + search + "&type=video&videoCaption=any&key=AIzaSyCyaZRe4xMnxqPdh9_fwuizP7bKTreyKNc&maxResults=5&order=rating")
      .subscribe((response: Array<Object>) => {
        this.videos = response["items"];
        this.nextPage = response["nextPageToken"];
        console.log(response);
        this.videos.forEach(element => {
          this.dangerousVideoUrl = 'http://www.youtube.com/embed/' + element["id"]["videoId"] + '?enablejsapi=1&origin=http://example.com';
          element['urlSecure'] = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
        });
        console.log(search);
      });
  }
  getVideosNext(){
    this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + this.search + "&type=video&videoCaption=any&key=AIzaSyCyaZRe4xMnxqPdh9_fwuizP7bKTreyKNc&maxResults=5&order=rating&pageToken=" + this.nextPage)
      .subscribe((response: Array<Object>) => {
        this.videos = response["items"];
        this.nextPage = response["nextPageToken"];
        this.prevPage = response["prevPageToken"];
        console.log(response);
        this.videos.forEach(element => {
          this.dangerousVideoUrl = 'http://www.youtube.com/embed/' + element["id"]["videoId"] + '?enablejsapi=1&origin=http://example.com';
          element['urlSecure'] = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
        });
      });
  }
  getVideosPrev(){
    this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + this.search + "&type=video&videoCaption=any&key=AIzaSyCyaZRe4xMnxqPdh9_fwuizP7bKTreyKNc&maxResults=5&order=rating&pageToken=" + this.prevPage)
      .subscribe((response: Array<Object>) => {
        this.videos = response["items"];
        this.nextPage = response["nextPageToken"];
        this.prevPage = response["prevPageToken"];
        console.log(response);
        this.videos.forEach(element => {
          this.dangerousVideoUrl = 'http://www.youtube.com/embed/' + element["id"]["videoId"] + '?enablejsapi=1&origin=http://example.com';
          element['urlSecure'] = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
        });
      });
  }

  
}
