import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeAuthService } from './../youtube-auth.service';

@Component({
  selector: 'app-api-youtube-video',
  templateUrl: './api-youtube-video.component.html',
  styleUrls: ['./api-youtube-video.component.scss']
})
export class ApiYoutubeVideoComponent implements OnInit {

  apiKey = "AIzaSyCyaZRe4xMnxqPdh9_fwuizP7bKTreyKNc";
  videoId = this.route.snapshot.paramMap.get('id');
  dangerousVideoUrl = 'http://www.youtube.com/embed/' + this.videoId;
  videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);

  headers = "";
  
  public videos = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private sanitizer: DomSanitizer, private youtubeAuth: YoutubeAuthService) {
   }

  ngOnInit() {
    this.getVideo();
  }

  public getVideo(){
    this.http.get("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + this.videoId + "&key=" + this.apiKey)
      .subscribe((response: Array<Object>) => {
        this.videos = response["items"];
      });
  }

  public postLike(){
    this.http.post('https://www.googleapis.com/youtube/v3/videos/rate?id='+ this.videoId +'&rating=like&key='+ this.apiKey, this.headers)
    .subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }
}
