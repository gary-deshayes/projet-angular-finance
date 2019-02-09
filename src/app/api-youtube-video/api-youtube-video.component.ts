import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

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
  
  public videos = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private sanitizer: DomSanitizer) {
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
}
